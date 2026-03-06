'use client';

import { useEffect } from 'react';

export default function TestimonialsSection() {
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

        document.querySelectorAll('.testimonials .animate-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const testimonials = [
        {
            quote: '"Sebelumnya kami bingung bikin laporan keuangan BUMDes. Sekarang tinggal input angka, semua otomatis keluar. Inspektorat pun tidak komplain lagi."',
            initials: 'SP',
            name: 'Pak Sugeng P.',
            role: 'Ketua BUMDes, Klaten',
        },
        {
            quote: '"Template Canva-nya bagus-bagus. Admin medsos kami yang masih muda jadi semangat posting karena desainnya sudah profesional."',
            initials: 'RW',
            name: 'Bu Ratna W.',
            role: 'Ketua Pokdarwis, Magelang',
        },
        {
            quote: '"Panduan foto produk pakai HP sangat membantu. Keripik kami sekarang difoto dengan lebih menarik, penjualan naik 40%."',
            initials: 'SS',
            name: 'Bu Sri S.',
            role: 'Pelaku UMKM, Bantul',
        },
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Bukti Nyata</span>
                    <h2>Dipercaya Desa Wisata di Seluruh Indonesia</h2>
                    <p className="section-desc">Template ini dibuat dari pengalaman nyata mendampingi puluhan desa</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div className="testimonial-card animate-on-scroll" key={index}>
                            <p className="testimonial-quote">{t.quote}</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{t.initials}</div>
                                <div className="testimonial-info">
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
