// components/ClientWrapper.tsx
'use client';
import { useEffect, PropsWithChildren } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ClientWrapper({ children }: PropsWithChildren) {
  useEffect(() => {
    // safe register only on client
    gsap.registerPlugin(ScrollTrigger);

    // any other client-only setup (smooth scrolling etc.)
    // example: gsap.to(window, { duration: 0.5, ease: 'power2.out' });

    return () => {
      // cleanup GSAP triggers on unmount
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <>{children}</>;
}
