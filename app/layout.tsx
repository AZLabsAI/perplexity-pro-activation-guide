import type { Metadata } from 'next';
import { Google_Sans_Flex, Roboto, Share_Tech_Mono } from 'next/font/google';
import { defaultMetadata } from './lib/seo';
import './globals.css';

const googleSansFlex = Google_Sans_Flex({
  variable: '--font-google-sans',
  subsets: ['latin'],
  display: 'swap',
});

const shareTechMono = Share_Tech_Mono({
  variable: '--font-share-tech-mono',
  subsets: ['latin'],
  weight: '400',
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${googleSansFlex.variable} ${shareTechMono.variable} ${roboto.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
