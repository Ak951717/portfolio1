import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Muhammad Ahmed Khan | Full Stack Developer | Agentic Developer | Agentic Dev | AgenticDev " ,
  description: "Creating modern, powerful, AI-driven, Agentic web apps for global clients in USA, UK, Canada, Dubai.",
  keywords: [
    "Agentic Dev",
    "AgenticDev",
    "Agentic webapp",
    "Agentic website",
    "Ai Agentic Dev",
    "AiAgenticDev",
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
    title: "Muhammad Ahmed Khan | Full Stack Developer | Agentic Developer | Agentic Dev | AgenticDev",
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
      <title>Muhammad Ahmed Khan | Full Stack Developer | Agentic Developer | Agentic Dev | AgenticDev</title>
      <meta name="description" content="I build high-end Ai Agentic web apps for international clients using Next.js, AI, LangChain, Langgraph, Openai, Gemini, TailwindCSS. USA, UK, Canada, Dubai clients welcome." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Muhammad Ahmed Khan" />
      <link rel="canonical" href="https://agenticdev.site" />
      <link rel="icon" href="/favicon.ico" />

      {/* OG Meta Tags */}
      <meta property="og:title" content="Muhammad Ahmed Khan | Full Stack Web Developer | Agentic Developer | Agentic Dev | AgenticDev" />
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
            "@type": "Person",
            name: "Muhammad Ahmed Khan",
            url: "https://agenticdev.site",
            image: "https://agenticdev.site/profile.jpg", // Make sure this exists!
            jobTitle: "Full Stack Web Developer",
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
