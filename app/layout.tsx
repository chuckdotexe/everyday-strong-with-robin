import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chuckdotexe.github.io/everyday-strong-with-robin/'),
  title: 'Everyday Strong with Robin | Private Fitness Coaching',
  description: 'Private in-home fitness coaching in Northern Virginia, nearby locations by request, and virtual coaching wherever you are.',
  openGraph: {
    title: 'Everyday Strong with Robin | Private Fitness Coaching',
    description: 'Private in-home fitness coaching in Northern Virginia and virtual coaching wherever you are.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Everyday Strong with Robin | Private Fitness Coaching',
    description: 'Private in-home fitness coaching in Northern Virginia and virtual coaching wherever you are.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
