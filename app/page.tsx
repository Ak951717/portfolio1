// "use client";

// import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Navigation } from '@/components/Navigation';
import ClientWrapper from '@/components/sections/ClientWrapper';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

export default function Home() {
  // const mainRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // Initialize smooth scrolling
  //   gsap.to(window, {
  //     duration: 0.5,
  //     ease: "power2.out"
  //   });

  //   // Cleanup function
  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);

  return (
    <>
    <div className="relative">
      <ClientWrapper>

      <Navigation />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      </ClientWrapper>
    </div>
    </>
  );
}