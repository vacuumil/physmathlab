// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] }); // Добавили кириллицу

export const metadata: Metadata = {
  title: 'PhysMathLab - Интерактивная лаборатория по физике и математике',
  description: 'Визуализируй знания для школы и ЕГЭ. Интерактивные симуляции, конспекты и тесты.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}