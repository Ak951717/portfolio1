'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Instagram, Youtube, Mail, ExternalLink, Play, Heart, MessageCircle, Share2 } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioHighlights = [
    {
      id: 1,
      title: 'Summer Skincare Campaign',
      brand: 'Glow Beauty',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=500',
      engagement: '2.8K',
      type: 'Reel',
    },
    {
      id: 2,
      title: 'Bali Travel Series',
      brand: 'Wanderlust Co.',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=500',
      engagement: '5.2K',
      type: 'Carousel',
    },
    {
      id: 3,
      title: 'Sustainable Fashion',
      brand: 'EcoStyle',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500',
      engagement: '3.1K',
      type: 'Post',
    },
    {
      id: 4,
      title: 'Morning Routine',
      brand: 'Wellness Co.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      engagement: '4.5K',
      type: 'Reel',
    },
  ];

  const quickLinks = [
    { title: 'Watch My Latest Reel', url: '#', icon: Play },
    { title: 'Shop My Look', url: '#', icon: ExternalLink },
    { title: 'Join My Newsletter', url: '#', icon: Mail },
    { title: 'Brand Collaborations', url: '/contact', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Hero Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Available for collaborations</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="font-playfair text-gray-900">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Sarah Lee
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl">
                Lifestyle & Travel Creator helping brands tell their story through 
                <span className="font-semibold text-purple-600"> creative visual content</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Let's Work Together
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-purple-200 hover:bg-purple-50 px-8 py-6 text-lg">
                  View My Portfolio
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 3.5H7.5C5.01 3.5 3 5.51 3 8v8c0 2.49 2.01 4.5 4.5 4.5h9c2.49 0 4.5-2.01 4.5-4.5V8c0-2.49-2.01-4.5-4.5-4.5z"/>
                    <path d="M12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Sarah Lee - Lifestyle & Travel Creator"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">125K</div>
              <div className="text-gray-600">Instagram Followers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">2.8M</div>
              <div className="text-gray-600">Monthly Reach</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Brand Partners</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">4.2%</div>
              <div className="text-gray-600">Engagement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                    <link.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {link.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent <span className="text-purple-600">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out some of my latest brand collaborations and creative projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {portfolioHighlights.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <Badge variant="secondary" className="mb-2">
                        {item.type}
                      </Badge>
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs opacity-90">{item.brand}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1 text-xs">
                      <Heart className="h-3 w-3" />
                      <span>{item.engagement}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-2 border-purple-200 hover:bg-purple-50">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your brand's story to life through authentic, engaging content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-6 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-6 text-lg">
              View My Media Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}