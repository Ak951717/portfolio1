'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Users, Heart, Target, Camera, Plane, Coffee, Star } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: Users,
      title: '125K+ Followers',
      description: 'Engaged community across all platforms',
    },
    {
      icon: Award,
      title: '50+ Brand Partners',
      description: 'Successful collaborations with top brands',
    },
    {
      icon: Heart,
      title: '4.2% Engagement',
      description: 'Above industry average engagement rate',
    },
    {
      icon: Target,
      title: '2.8M Monthly Reach',
      description: 'Consistent high-quality content reach',
    },
  ];

  const brandLogos = [
    'Glow Beauty', 'EcoStyle', 'Wanderlust Co.', 'Urban Chic', 'Pure Beauty', 
    'Ocean Breeze', 'Zen Wellness', 'Cozy Living', 'Fresh Face', 'Style Maven'
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'Every piece of content comes from genuine experiences and honest opinions.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building meaningful connections with my audience and fellow creators.',
    },
    {
      icon: Target,
      title: 'Quality',
      description: 'Delivering high-quality content that adds value to both brands and followers.',
    },
    {
      icon: Star,
      title: 'Growth',
      description: 'Continuously learning and evolving in the ever-changing digital landscape.',
    },
  ];

  const funFacts = [
    { icon: Camera, fact: 'Taken over 50K photos this year' },
    { icon: Plane, fact: 'Visited 15 countries for content' },
    { icon: Coffee, fact: 'Fueled by 3 cups of coffee daily' },
    { icon: Star, fact: 'Started with just 100 followers' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="font-playfair text-gray-900">About</span>
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> Me</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Hi! I'm Sarah, a lifestyle and travel content creator passionate about 
                sharing authentic experiences and helping brands connect with their audience 
                through genuine storytelling.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">Content Creator</Badge>
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Travel Enthusiast</Badge>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Brand Partner</Badge>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Storyteller</Badge>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                Let's Connect
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-2xl blur-3xl opacity-30"></div>
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Sarah Lee - About Me"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Achievements</h2>
            <p className="text-xl text-gray-600">Milestones that define my journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Story</h2>
            <p className="text-xl text-gray-600">The journey that led me here</p>
          </div>
          
          <Tabs defaultValue="journey" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="journey">My Journey</TabsTrigger>
              <TabsTrigger value="mission">My Mission</TabsTrigger>
              <TabsTrigger value="values">My Values</TabsTrigger>
            </TabsList>
            
            <TabsContent value="journey" className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  My journey into content creation began three years ago when I started sharing my daily life 
                  and travel experiences on Instagram. What started as a personal hobby quickly grew into 
                  something much bigger as I discovered the power of authentic storytelling.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I remember my first brand collaboration—a small local skincare brand that believed in my 
                  vision. That partnership taught me the importance of maintaining authenticity while creating 
                  value for both brands and my audience. From there, I've had the privilege of working with 
                  amazing brands across beauty, travel, fashion, and lifestyle sectors.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, I'm proud to have built a community of over 125K engaged followers who trust my 
                  recommendations and enjoy following along on my adventures. Every day brings new opportunities 
                  to create, connect, and inspire.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="mission" className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  My mission is to create content that truly matters—content that inspires, educates, and 
                  brings value to people's lives. I believe in the power of authentic storytelling to build 
                  genuine connections between brands and consumers.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I work exclusively with brands that align with my values and that I genuinely believe in. 
                  This approach ensures that every recommendation I make is honest and that my audience can 
                  trust the content I create.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through my platform, I aim to inspire others to live authentically, explore the world, 
                  and make conscious choices about the products and experiences they invest in.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="values" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Amazing Brands</h2>
            <p className="text-xl text-gray-600">Some of the incredible brands I've had the pleasure to work with</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {brandLogos.map((brand, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gray-700 font-medium text-sm">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fun Facts</h2>
            <p className="text-xl text-gray-600">A few interesting things about me</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <fact.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{fact.fact}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Want to Work Together?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate with brands that share my values and vision. 
            Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-6">
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-6">
              View My Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}