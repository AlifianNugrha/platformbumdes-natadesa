export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-pattern"></div>
            </div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Wujudkan <span>Desa Wisata</span> Profesional Tanpa Ribet</h1>
                        <p className="hero-description">
                            Kumpulan template Excel, PDF, dan Canva yang sudah terbukti sukses di 50+ desa wisata binaan Natadesa. Tinggal pakai, langsung jalan.
                        </p>
                        <div className="hero-cta">
                            <a href="#harga" className="btn-primary">
                                Lihat Paket
                            </a>
                            <a href="#modul" className="btn-secondary">
                                Lihat Isi Paket
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-dashboard">
                            <div className="hero-main-card">
                                <div className="dashboard-header">
                                    <div>
                                        <h3>Toolkit BUMDes</h3>
                                        <p>Template Administrasi Lengkap</p>
                                    </div>
                                </div>
                                <div className="dashboard-body">
                                    <div className="dash-item">
                                        <div className="dash-text">Administrasi & Keuangan</div>
                                    </div>
                                    <div className="dash-item">
                                        <div className="dash-text">Legalitas & Kelembagaan</div>
                                    </div>
                                    <div className="dash-item">
                                        <div className="dash-text">Marketing & Kelayakan</div>
                                    </div>
                                </div>
                            </div>

                            <div className="hero-float-card hero-float-1">
                                <div className="float-header">
                                    <h4>101 Ide BUMDes</h4>
                                </div>
                                <div className="float-stats">
                                    <div className="float-stat">Ide Bisnis</div>
                                    <div className="float-stat">Pengembangan</div>
                                    <div className="float-stat">KDMP</div>
                                </div>
                            </div>

                            <div className="hero-float-card hero-float-2">
                                <div className="float-header">
                                    <h4>Panduan Direktur</h4>
                                </div>
                                <div className="float-stats">
                                    <div className="float-stat">Tutorial Praktis</div>
                                    <div className="float-stat">SOP Homestay</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
