import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: {
    default: 'Mekatronis Router CNC | Fabricação de Routers CNC Industriais',
    template: '%s | Mekatronis Router CNC',
  },
  description: 'Há mais de 17 anos fabricando routers CNC industriais no Brasil. Máquinas robustas, precisas e 100% nacionais para marcenarias e indústrias.',
  keywords: ['Router CNC', 'CNC Brasil', 'CNC para marcenaria', 'Fresadora CNC', 'Mekatronis', 'Router CNC industrial', 'Máquina CNC madeira'],
  authors: [{ name: 'Mekatronis Router CNC' }],
  openGraph: {
    title: 'Mekatronis Router CNC | 17+ Anos de Tecnologia CNC',
    description: 'Routers CNC industriais com precisão, robustez e suporte completo. Fabricação 100% brasileira.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Mekatronis Router CNC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mekatronis Router CNC',
    description: 'Fabricação de routers CNC industriais há mais de 17 anos. 100% brasileiro.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main style={{ paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
