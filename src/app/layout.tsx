import './globals.css';

export const metadata = {
  title: 'TemplateBumdes - By Natadesa',
  description: 'Kumpulan template Excel, PDF, dan Canva yang sudah terbukti sukses di 50+ desa wisata binaan Natadesa. Tinggal pakai, langsung jalan.',
  keywords: 'desa wisata, template desa, BUMDes, UMKM desa, pemberdayaan desa, natadesa',
  openGraph: {
    title: 'TemplateBumdes - By Natadesa',
    description: 'Kumpulan template Excel, PDF, dan Canva yang sudah terbukti sukses di 50+ desa wisata binaan Natadesa.',
    type: 'website',
  },
  icons: {
    icon: '/NDICO.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
