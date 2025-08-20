"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Zap, Users, Trophy } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 20%",
          }
        }
      );

      // Text animation
      gsap.fromTo(textRef.current, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "bottom 20%",
          }
        }
      );

      // Cards animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(cards, 
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              end: "bottom 20%",
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following industry best practices."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Performance",
      description: "Optimizing applications for lightning-fast load times and smooth user experiences."
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Collaboration",
      description: "Working seamlessly with teams and stakeholders to deliver exceptional results."
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple-400" />,
      title: "Excellence",
      description: "Committed to delivering high-quality solutions that exceed expectations."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div ref={textRef} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
  I'm Muhammad Ahmed Khan, a passionate <strong>Full-Stack Developer</strong> and 
  <strong> AI Agentic web app specialist</strong> with over 5 years of experience 
  building high-end solutions for <strong>international clients</strong>.  
  My journey began with curiosity for web technologies and evolved into a 
  dedication to crafting <strong>Next.js, React, and AI-powered applications </strong> 
   that deliver real impact.
</p>

          <p className="text-lg text-gray-300 leading-relaxed">
  I specialize in <strong>Next.js, React, TypeScript, and TailwindCSS</strong> for 
  frontend, with <strong>Python, FastApi, LangChain, LangGraph, OpenAI, and Gemini</strong> for 
  <strong> AI integrations</strong>. I work with modern cloud platforms and agile 
  methodologies to deliver robust solutions. When I'm not coding, I explore emerging 
  technologies, contribute to open-source, and mentor aspiring developers.
</p>

        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="glass-effect hover-glow border-gray-700 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}