'use client';

import { useEffect } from 'react';

export default function PricingSection() {
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

        document.querySelectorAll('.pricing .animate-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const plans = [
        {
            tier: 'Paket Spesial',
            name: 'Rintisan',
            originalAmount: 'Rp 2.500.000',
            amount: 'Rp 299.000',
            period: 'Pembayaran satu kali',
            desc: 'Akses penuh ke semua template dan dokumen operasional untuk mengelola BUMDes secara profesional.',
            features: [
                'Akses Google Drive Seluruh 9 Folder',
                'Template Administrasi & Kelembagaan (Word)',
                'Template Keuangan & Laporan BUMDes (Excel)',
                'SOP, Panduan Direktur, & Presentasi',
                'Bonus Khusus: 101 Ide Bisnis',
                'Akses file seumur hidup',
            ],
            btnClass: 'primary',
            featured: true,
            link: 'https://natadeesa.myscalev.com/p/kumpulan-alat-perang-siap-pakai-yang-kami-gunakan-di-desa-desa-sukses', // ganti dengan link scalev asli Anda
        }
    ];

    return (
        <section className="pricing" id="harga">
            <div className="container">
                <div className="section-header">                    <h2>Pilih Paket Sesuai Kebutuhan Desa</h2>
                    <p className="section-desc">Harga terjangkau untuk anggaran Dana Desa bidang Pemberdayaan</p>
                </div>
                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div className={`pricing-card animate-on-scroll ${plan.featured ? 'featured' : ''}`} key={index}>
                            {plan.featured && <div className="pricing-popular">Paling Populer</div>}
                            <div className="pricing-tier">{plan.tier}</div>
                            <div className="pricing-name">{plan.name}</div>
                            <div className="pricing-price">
                                {plan.originalAmount && (
                                    <span className="pricing-amount-original" style={{ textDecoration: 'line-through', color: '#717171', fontSize: '1.2rem', display: 'block', marginBottom: '4px' }}>
                                        {plan.originalAmount}
                                    </span>
                                )}
                                <span className="pricing-amount">{plan.amount}</span>
                            </div>
                            <div className="pricing-period">{plan.period}</div>
                            <p className="pricing-desc">{plan.desc}</p>
                            <ul className="pricing-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <a href={plan.link || "#kontak"} className={`pricing-btn ${plan.btnClass}`} target="_blank" rel="noopener noreferrer">Pilih Paket</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
