'use client';

import { useEffect } from 'react';

export default function FAQSection() {
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

        document.querySelectorAll('.faq .animate-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const faqs = [
        {
            question: 'Bagaimana cara membeli paket ini?',
            answer: 'Hubungi tim kami melalui WhatsApp atau email. Kami akan mengirimkan proposal resmi yang bisa digunakan untuk pengajuan anggaran Dana Desa bidang Pemberdayaan.',
        },
        {
            question: 'Apakah bisa dibayar dengan Dana Desa?',
            answer: 'Ya, produk ini dirancang khusus agar sesuai dengan mekanisme pengadaan Dana Desa. Kami menyediakan invoice dan kwitansi dengan format yang diterima untuk pelaporan.',
        },
        {
            question: 'Format file apa saja yang akan saya dapatkan?',
            answer: 'Anda akan mendapatkan file Excel (.xlsx), Word (.docx), PDF, dan link akses Canva. Semua format yang umum digunakan dan mudah diedit.',
        },
        {
            question: 'Apakah template bisa diedit sesuai nama desa kami?',
            answer: 'Tentu! Semua template dirancang untuk diedit dengan mudah. Tinggal ganti nama desa, logo, dan informasi relevan lainnya.',
        },
        {
            question: 'Bagaimana cara mengakses file setelah pembayaran?',
            answer: 'Setelah pembayaran dikonfirmasi, kami akan mengirimkan link Google Drive yang berisi semua file. Link ini bisa diakses kapan saja dan dibagikan ke perangkat desa.',
        },
        {
            question: 'Apakah ada garansi atau support setelah pembelian?',
            answer: 'Ya, kami menyediakan support melalui WhatsApp untuk pertanyaan teknis. Paket Berkembang dan Mandiri juga mendapat akses komunitas dan konsultasi langsung.',
        },
    ];

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Tanya Jawab</span>
                    <h2>Pertanyaan yang Sering Diajukan</h2>
                    <p className="section-desc">Temukan jawaban untuk pertanyaan umum seputar produk kami</p>
                </div>
                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div className="faq-item animate-on-scroll" key={index}>
                            <h3 className="faq-question">{faq.question}</h3>
                            <p className="faq-answer">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
