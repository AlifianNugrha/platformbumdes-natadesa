import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link href="#" className="logo">
                            <img src="/logo.png" alt="Natadesa" className="logo-img" />
                        </Link>
                        <p>Mendampingi desa wisata Indonesia menjadi mandiri, profesional, dan berkelanjutan sejak 2018.</p>

                    </div>
                    <div className="footer-links">
                        <h4>Produk</h4>
                        <ul>
                            <li><a href="#modul">Modul Pemdes</a></li>
                            <li><a href="#modul">Modul KDMP</a></li>
                            <li><a href="#modul">Modul Warga</a></li>
                            <li><a href="#harga">Daftar Harga</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Perusahaan</h4>
                        <ul>
                            <li><a href="#">Tentang Kami</a></li>
                            <li><a href="#">Portofolio Desa</a></li>
                            <li><a href="#">Tim Natadesa</a></li>
                            <li><a href="#">Karir</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Bantuan</h4>
                        <ul>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#kontak">Hubungi Kami</a></li>
                            <li><a href="#">Panduan Penggunaan</a></li>
                            <li><a href="#">Syarat &amp; Ketentuan</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Natadesa. Hak cipta dilindungi undang-undang.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Kebijakan Privasi</a>
                        <a href="#">Syarat Layanan</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
