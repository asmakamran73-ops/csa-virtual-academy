import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cambridge Scholars Academy',
  description: 'O Level, A Level, IGCSE & IELTS coaching — Gujranwala & Online',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
