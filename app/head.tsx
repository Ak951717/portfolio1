import { Metadata } from "next";

export const metadata:Metadata = {
  title: "AgenticDev | Agentic Dev | Agentic Developer | Muhammad Ahmed Khan | Full Stack Developer " ,
  description: "Creating modern, powerful, AI-driven, Agentic web apps for global clients in USA, UK, Canada, Dubai.",
  keywords: [
    "AgenticDev",
    "Agentic Dev",
    "Agentic webapp",
    "Agentic website",
    "AiAgenticDev",
    "Ai Agentic Dev",
    "Ai Agentic webapp",
    "Ai Agentic website",
    "Full Stack Developer",
    "Web Developer",
    "Agentic developer",
    "Ai Agentic developer",
    "Ai developer",
    "Next.js Portfolio",
    "Frontend Developer",
    "React Developer",
    "Muhammad Ahmed Portfolio"
  ],
  openGraph: {
    title: "AgenticDev | Agentic Dev | Agentic Developer | Muhammad Ahmed Khan | Full Stack Developer ",
    description: "Ai Agentic Webapp built with Next.js 15, Openai, Gemini, Groq, LangChain, Langgraph and TailwindCSS, optimized for $5k–$10k international clients.",
    url: "https://agenticdev.site",
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
  alternates: {
    canonical: "https://agenticdev.site",
  },
};


export default function Head() {
  return (
    <>
      <title>AgenticDev | Agentic Dev | Agentic Developer |  Muhammad Ahmed Khan | Full Stack Developer  </title>
      <meta name="description" content="I build high-end Ai Agentic web apps for international clients using Next.js, AI, LangChain, Langgraph, Openai, Gemini, TailwindCSS. USA, UK, Canada, Dubai clients welcome." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Muhammad Ahmed Khan" />
      <link rel="canonical" href="https://agenticdev.site" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
                  
        {/* Favicon & App Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
            
      {/* OG Meta Tags */}
      <meta property="og:title" content=" AgenticDev | Agentic Dev | Muhammad Ahmed Khan | Full Stack Web Developer | Agentic Developer   " />
      <meta property="og:description" content="Ai Agentic web apps of a $5k-$10k web app specialist using Next.js, LangChain, Langgraph, Openai, Gemini & TailwindCSS." />
      <meta property="og:image" content="https://agenticdev.site/og-image.jpg" />
      <meta property="og:url" content="https://agenticdev.site" />
      <meta property="og:type" content="website" />
      
       {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AgenticDev",
            url: "https://agenticdev.site",
            image: "https://agenticdev.site/profile.jpg", // Make sure this exists!
            jobTitle: "Ai Agentic Full Stack Web Developer",
            sameAs: [
              "https://github.com/YOUR_USERNAME",
              "https://linkedin.com/in/YOUR_PROFILE",
            ],
          }),
        }}
      />

    </>
  );
}
