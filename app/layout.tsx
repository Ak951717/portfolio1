import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "AgenticDev | Full Stack AI Agentic Developer - Muhammad Ahmed Khan",
  description: "Building high-end AI Agentic web apps with Next.js, LangChain & OpenAI. Helping USA, UK, Canada & Dubai businesses with $5k–$10k solutions.",
  authors: [{ name: "Muhammad Ahmed Khan" }],
  keywords: ["AI Agentic Web Apps", "Full Stack Developer", "Next.js AI Developer", "LangChain Developer", "OpenAI Developer", "USA UK Dubai Web Apps"],
  robots: "index, follow",
  
  alternates: {
    canonical: "https://agenticdev.site/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ]
  },
  manifest: "/site.webmanifest",
 
  openGraph: {
    title: "AgenticDev | Premium AI Agentic Web Apps by Muhammad Ahmed Khan",
    description: "AgenticDev – Premium AI Web Apps | Next.js, LangChain, OpenAI",
    url: "https://agenticdev.site/",
    siteName: "Agentic Dev",
    images: [
      {
        url: "https://agenticdev.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agentic Dev Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      
           {/* <title>AgenticDev | Agentic Dev | Agentic Developer |  Muhammad Ahmed Khan | Full Stack Developer  </title>
      <meta name="description" content="I build high-end Ai Agentic web apps for international clients using Next.js, AI, LangChain, Langgraph, Openai, Gemini, TailwindCSS. USA, UK, Canada, Dubai clients welcome." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Muhammad Ahmed Khan" /> */}
      {/* <link rel="canonical" href="https://agenticdev.site" /> */}
      {/* <link rel="icon" href="/favicon.ico" /> */}
                  
        {/* Favicon & App Icons */}
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" /> */}
            
      {/* OG Meta Tags */}
      {/* <meta property="og:title" content=" AgenticDev | Agentic Dev | Muhammad Ahmed Khan | Full Stack Web Developer | Agentic Developer   " />
      <meta property="og:description" content="Ai Agentic web apps of a $5k-$10k web app specialist using Next.js, LangChain, Langgraph, Openai, Gemini & TailwindCSS." />
      <meta property="og:image" content="https://agenticdev.site/og-image.jpg" />
      <meta property="og:url" content="https://agenticdev.site" />
      <meta property="og:type" content="website" />  */}
      
       {/* Structured Data */}
      <Script
        id="jsonld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "AgenticDev",
            url: "https://agenticdev.site/",
            image: "https://agenticdev.site/profile.jpg", // Make sure this exists!
            jobTitle: "Ai Agentic Full Stack Web Developer",
            sameAs: [
              "https://github.com/YOUR_USERNAME",
              "https://linkedin.com/in/YOUR_PROFILE",
            ],
          }),
        }}
      />
     
      <body className={`${inter.variable} font-sans antialiased bg-gray-950 text-white`}>
        {children}
      </body>
    </html>
  );
}