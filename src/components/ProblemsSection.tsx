'use client';

import { useEffect } from 'react';

export default function ProblemsSection() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.problems .animate-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const problems = [
        {
            icon: '📊',
            title: 'Tata Kelola Keuangan Berantakan',
            desc: 'Pengurus BUMDes kesulitan membuat laporan keuangan yang rapi. Tidak ada format standar yang bisa dipertanggungjawabkan ke inspektorat.',
        },
        {
            icon: '📱',
            title: 'Promosi Digital Tidak Konsisten',
            desc: 'Admin medsos bingung mau posting apa. Desain seadanya, tidak ada jadwal konten, dan pesan WhatsApp dijawab sekenanya.',
        },
        {
            icon: '🏪',
            title: 'Produk UMKM Kurang Menarik',
            desc: 'Warga punya produk bagus tapi kemasan dan foto tidak menarik. Tidak tahu cara menentukan harga yang menguntungkan.',
        },
    ];

    return (
        <section className="problems" id="masalah">
            <div className="container">
                <div className="section-header">
                    <h2>Kendala yang Sering Dihadapi Desa Wisata</h2>
                    <p className="section-desc">Tiga masalah klasik yang menghambat perkembangan desa wisata di Indonesia</p>
                </div>
                <div className="problems-grid">
                    {problems.map((problem, index) => (
                        <div className="problem-card animate-on-scroll" key={index}>
                            <h3>{problem.title}</h3>
                            <p>{problem.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
