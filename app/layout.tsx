import type { Metadata } from 'next';
import { Instrument_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Polaris',
  description: 'Browse the web like it has a horizon.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${plexMono.variable}`}>
      <body className="font-sans bg-[#071522] text-[#eefaff] m-0 min-h-[100svh] overflow-x-hidden overflow-y-auto" suppressHydrationWarning>{children}</body>
    </html>
  );
}
