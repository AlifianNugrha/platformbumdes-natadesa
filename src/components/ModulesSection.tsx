'use client';

import { useState } from 'react';

const modulesData = {
    manajemen: {
        badge: 'Kategori Kelembagaan & Administrasi',
        title: 'Tata Kelola & Kelembagaan BUMDes',
        desc: 'Panduan lengkap dan template siap pakai untuk menstrukturkan organisasi dan administrasi BUMDes Anda agar berjalan profesional.',
        features: [
            { title: 'Administrasi (10 File)', sub: 'Surat Menyurat, Formulir, dan Kontrak Kerja Profesional' },
            { title: 'Kelembagaan (10 File)', sub: 'Draft SK, Peraturan Desa (Perdes), AD/ART, dan SOP Organisasi' },
            { title: 'Panduan Direktur BUMDes', sub: 'Buku saku dan panduan strategis kepemimpinan' },
        ],
        cardTitle: 'Mengintip Isi Folder Administrasi',
        cardSubtitle: 'Beberapa contoh template yang didapatkan',
        cardGradient: 'linear-gradient(135deg, #172317, #2B4228)',
        files: [
            { iconClass: 'word', name: 'Template Berbagai Formulir', desc: 'Izin cuti, permintaan barang, dll' },
            { iconClass: 'word', name: 'Template Surat & Kontrak Kerja', desc: 'Kontrak PKWT, probation, & surat keterangan' },
            { iconClass: 'word', name: 'Template Berbagai Surat Legal', desc: 'Surat kuasa, komplain, kepemilikan usaha' },
            { iconClass: 'word', name: 'Template Dokumen Rapat', desc: 'Format notulen dan berita acara rapat' },
            { iconClass: 'word', name: 'Template Perjanjian Kerjasama', desc: 'Format kontrak kerjasama brand / MoU' },
        ],
    },
    keuangan: {
        badge: 'Kategori Keuangan & Pasar',
        title: 'Keuangan, Marketing & Presentasi',
        desc: 'Template otomatis untuk pencatatan keuangan yang rapi, ditambah materi promosi untuk menarik pengunjung.',
        features: [
            { title: 'Keuangan', sub: 'Template Excel laporan laba rugi, neraca, dan arus kas otomatis' },
            { title: 'Marketing', sub: 'Strategi promosi, kalender konten, dan panduan marketing digital' },
            { title: 'PPT Presentasi', sub: 'Desain slide profesional untuk presentasi ke dinas atau investor' },
        ],
        cardTitle: 'Folder Bisnis & Marketing',
        cardSubtitle: 'Keuangan & Pemasaran',
        cardGradient: 'linear-gradient(135deg, #2B4228, #3D5C38)',
        files: [
            { iconClass: 'excel', name: 'Template-Keuangan.xlsx', desc: 'Laporan Otomatis BUMDes' },
            { iconClass: 'pdf', name: 'Strategi-Marketing.pdf', desc: 'Panduan Pemasaran Online' },
            { iconClass: 'canva', name: 'Template-Presentasi.pptx', desc: 'Slide Deck Siap Pakai' },
        ],
    },
    operasional: {
        badge: 'Kategori Pendukung & Legalitas',
        title: 'Kelembagaan, Operasional & Bonus',
        desc: 'Standar pembentukan BUMDes yang komprehensif (Kelembagaan) ditambah dengan ratusan ide bisnis segar.',
        features: [
            { title: 'AD/ART BUMDes', sub: 'Ad/ART yang komprehensif, Kode Etik, LPJ Pengurus' },
            { title: 'SOP (Standar Operasional)', sub: 'SOP pelayanan, kebersihan, dan keselamatan kerja' },
            { title: 'BONUS 101 Ide Bisnis', sub: 'Ratusan ide unik untuk unit usaha BUMDes / KDMP' },
        ],
        cardTitle: 'Mengintip Folder Kelembagaan',
        cardSubtitle: 'Dokumen Legalitas & Aturan',
        cardGradient: 'linear-gradient(135deg, #3D5C38, #4F7548)',
        files: [
            { iconClass: 'word', name: 'Draft Lengkap AD/ART BUMDes', desc: 'Dokumen legal utama siap edit' },
            { iconClass: 'word', name: 'Draft Berbagai Surat Keputusan (SK)', desc: 'SK Pembentukan, Pengangkatan, dll' },
            { iconClass: 'word', name: 'Draft Kode Etik Organisasi', desc: 'Panduan tata krama & kultur kerja' },
            { iconClass: 'word', name: 'Draft Peraturan Internal', desc: 'Produk hukum pendukung BUMDes' },
            { iconClass: 'word', name: 'Template LPJ Pengurus', desc: 'Struktur laporan pertanggungjawaban' },
            { iconClass: 'word', name: 'Template Berita Acara & Inventaris', desc: 'Format aset & berita acara' },
        ],
    },
};

const tabs = [
    { id: 'manajemen', label: 'Tata Kelola' },
    { id: 'keuangan', label: 'Keuangan & Marketing' },
    { id: 'operasional', label: 'Operasional & Bonus' },
];

export default function ModulesSection() {
    const [activeTab, setActiveTab] = useState('manajemen');

    const currentModule = modulesData[activeTab];

    return (
        <section className="modules" id="modul">
            <div className="container">
                <div className="section-header">
                    <h2>9 Folder Utama di Dalam Paket</h2>
                    <p className="section-desc">Seluruh file diatur secara rapi dan sistematis agar Anda mudah menemukan yang dibutuhkan</p>
                </div>

                <div className="module-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`module-tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="module-content active">
                    <div className="module-layout">
                        <div className="module-info">
                            <div className="module-badge">{currentModule.badge}</div>
                            <h3>{currentModule.title}</h3>
                            <p>{currentModule.desc}</p>
                            <ul className="module-features">
                                {currentModule.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <div className="feature-text">
                                            <strong>{feature.title}</strong>
                                            <span>{feature.sub}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="module-visual">
                            <div className="module-card">
                                <div
                                    className="module-card-header"
                                    style={currentModule.cardGradient ? { background: currentModule.cardGradient } : undefined}
                                >
                                    <h4>{currentModule.cardTitle}</h4>
                                    <p>{currentModule.cardSubtitle}</p>
                                </div>
                                <div className="module-card-body">
                                    <ul className="file-list">
                                        {currentModule.files.map((file, idx) => (
                                            <li className="file-item" key={idx}>
                                                <div className="file-info">
                                                    <h5>{file.name}</h5>
                                                    <span>{file.desc}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
