import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

// export const metadata: Metadata = {
//   title: 'Agentic Dev - Professional Web Development Services',
//   description: 'Expert web developer specializing in modern React, Next.js, and full-stack solutions. Transform your ideas into powerful digital experiences.',
//   keywords: ['web development', 'react', 'nextjs', 'full-stack', 'portfolio'],
//   authors: [{ name: 'Agentic Dev' }],
//   creator: 'Agentic Dev',
// };

// export const metadata:Metadata = {
//   title: "Muhammad Ahmed Khan | Full Stack Developer",
//   description: "Creating modern, powerful, AI-driven web apps for global clients in USA, UK, Canada, Dubai.",
//   keywords: [
//     "Full Stack Developer",
//     "Web Developer",
//     "Agentic developer",
//     "Ai developer",
//     "Next.js Portfolio",
//     "Frontend Developer",
//     "React Developer",
//     "Muhammad Ahmed Portfolio"
//   ],
//   openGraph: {
//     title: "Muhammad Ahmed Khan | Full Stack Developer",
//     description: "Static portfolio site built with Next.js 15 and TailwindCSS, optimized for $5k–$10k international clients.",
//     url: "https://agenticdev.site",
//     siteName: "Agentic Dev",
//     images: [
//       {
//         url: "https://agenticdev.site/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Agentic Dev Portfolio",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-gray-950 text-white`}>
        {children}
      </body>
    </html>
  );
}