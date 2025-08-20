"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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
          }
        }
      );

      // Skills animation
      const skillCards = skillsRef.current?.children;
      if (skillCards) {
        gsap.fromTo(skillCards, 
          { opacity: 0, y: 50, rotationY: -15 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 85%",
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "DevOps",
      skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx"],
      color: "from-purple-500 to-pink-500"
    },
    {
  title: "AI & Agentic",
  skills: [
    "LangChain",
    "LangGraph",
    "OpenAI API",
    "Gemini",
    "AI Agents",
    "Vector Databases (Weaviate, Pinecone)"
  ],
  color: "from-orange-500 to-red-500"
}

  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        
        <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect hover-glow border-gray-700 group overflow-hidden">
              <CardContent className="p-6">
                <div className={`w-full h-1 bg-gradient-to-r ${category.color} mb-6 rounded-full`} />
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}