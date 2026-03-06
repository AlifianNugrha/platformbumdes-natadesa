'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    useEffect(() => {
        const header = document.querySelector('header');
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <header>
            <nav>
                <Link href="#" className="logo" onClick={(e) => handleSmoothScroll(e, '.hero')}>
                    <img src="/logo.png" alt="Natadesa" className="logo-img" />
                </Link>
                <ul className="nav-links">
                    <li><a href="#masalah" onClick={(e) => handleSmoothScroll(e, '#masalah')}>Masalah</a></li>
                    <li><a href="#modul" onClick={(e) => handleSmoothScroll(e, '#modul')}>Modul</a></li>
                    <li><a href="#harga" onClick={(e) => handleSmoothScroll(e, '#harga')}>Harga</a></li>
                    <li><a href="#faq" onClick={(e) => handleSmoothScroll(e, '#faq')}>FAQ</a></li>
                    <li><a href="#kontak" className="nav-cta" onClick={(e) => handleSmoothScroll(e, '#kontak')}>Hubungi Kami</a></li>
                </ul>
                <button className="mobile-menu-btn" aria-label="Toggle Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    );
}
