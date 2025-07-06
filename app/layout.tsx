import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sarah Lee | Lifestyle & Travel Creator',
  description: 'Professional lifestyle and travel content creator helping brands tell their story through creative visual content. Available for brand collaborations and partnerships.',
  keywords: ['lifestyle creator', 'travel influencer', 'brand partnerships', 'content creator', 'Instagram creator', 'social media influencer'],
  authors: [{ name: 'Sarah Lee' }],
  creator: 'Sarah Lee',
  publisher: 'Sarah Lee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sarah Lee | Lifestyle & Travel Creator',
    description: 'Professional lifestyle and travel content creator helping brands tell their story through creative visual content.',
    url: 'http://localhost:3000',
    siteName: 'Sarah Lee',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sarah Lee - Lifestyle & Travel Creator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarah Lee | Lifestyle & Travel Creator',
    description: 'Professional lifestyle and travel content creator helping brands tell their story through creative visual content.',
    images: ['/og-image.jpg'],
    creator: '@sarahlee',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ABC123DEF456GHI789',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sarah Lee',
              jobTitle: 'Lifestyle & Travel Content Creator',
              description: 'Professional lifestyle and travel content creator helping brands tell their story through creative visual content.',
              url: 'https://sarahlee.com',
              image: 'https://sarahlee.com/og-image.jpg',
              sameAs: [
                'https://instagram.com/sarahlee',
                'https://tiktok.com/@sarahlee',
                'https://youtube.com/@sarahlee',
                'https://linkedin.com/in/sarahlee',
              ],
              knowsAbout: ['Content Creation', 'Brand Partnerships', 'Lifestyle Photography', 'Travel Content', 'Social Media Marketing'],
              hasOccupation: {
                '@type': 'Occupation',
                name: 'Content Creator',
                occupationLocation: {
                  '@type': 'Place',
                  name: 'United States',
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}