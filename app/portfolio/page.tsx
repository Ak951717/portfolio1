'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, MessageCircle, Share2, Play, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Summer Skincare Routine',
      brand: 'Glow Beauty',
      category: 'beauty',
      type: 'Reel',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: '2.8K',
      comments: '156',
      description: 'A comprehensive morning skincare routine featuring Glow Beauty\'s new summer collection.',
      date: '2024-03-15',
      engagement: '4.2%',
    },
    {
      id: 2,
      title: 'Bali Adventure Series',
      brand: 'Wanderlust Co.',
      category: 'travel',
      type: 'Carousel',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: '5.2K',
      comments: '289',
      description: 'A 10-day journey through Bali\'s hidden gems, showcasing sustainable travel practices.',
      date: '2024-03-10',
      engagement: '5.8%',
    },
    {
      id: 3,
      title: 'Sustainable Fashion Haul',
      brand: 'EcoStyle',
      category: 'fashion',
      type: 'Post',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: '3.1K',
      comments: '198',
      description: 'Showcasing EcoStyle\'s latest sustainable fashion collection with styling tips.',
      date: '2024-03-05',
      engagement: '3.9%',
    },
    {
      id: 4,
      title: 'Morning Wellness Routine',
      brand: 'Zen Wellness',
      category: 'lifestyle',
      type: 'Reel',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: '4.5K',
      comments: '234',
      description: 'A peaceful morning routine featuring meditation, yoga, and healthy breakfast ideas.',
      date: '2024-03-01',
      engagement: '4.7%',
    },
    {
      id: 5,
      title: 'City Style Guide',
      brand: 'Urban Chic',
      category: 'fashion',
      type: 'Carousel',
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: '3.8K',
      comments: '167',
      description: 'Street style looks perfect for city adventures, featuring Urban Chic\'s versatile pieces.',
      date: '2024-02-28',
      engagement: '4.1%',
    },
    {
      id: 6,
      title: 'Minimalist Makeup Look',
      brand: 'Pure Beauty',
      category: 'beauty',
      type: 'Reel',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: '6.2K',
      comments: '342',
      description: 'A quick and easy everyday makeup routine using Pure Beauty\'s minimalist collection.',
      date: '2024-02-25',
      engagement: '6.1%',
    },
    {
      id: 7,
      title: 'Coastal Getaway',
      brand: 'Ocean Breeze Resort',
      category: 'travel',
      type: 'Post',
      image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: '4.7K',
      comments: '203',
      description: 'A relaxing weekend at Ocean Breeze Resort showcasing their eco-friendly accommodations.',
      date: '2024-02-20',
      engagement: '4.3%',
    },
    {
      id: 8,
      title: 'Home Decor Inspiration',
      brand: 'Cozy Living',
      category: 'lifestyle',
      type: 'Carousel',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: '3.4K',
      comments: '156',
      description: 'Creating a cozy and stylish living space with Cozy Living\'s home decor collection.',
      date: '2024-02-15',
      engagement: '3.7%',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Work', count: portfolioItems.length },
    { id: 'beauty', name: 'Beauty', count: portfolioItems.filter(item => item.category === 'beauty').length },
    { id: 'travel', name: 'Travel', count: portfolioItems.filter(item => item.category === 'travel').length },
    { id: 'fashion', name: 'Fashion', count: portfolioItems.filter(item => item.category === 'fashion').length },
    { id: 'lifestyle', name: 'Lifestyle', count: portfolioItems.filter(item => item.category === 'lifestyle').length },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="font-playfair text-gray-900">My</span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A collection of my favorite brand collaborations and creative projects. 
            Each piece tells a unique story and showcases authentic connections with amazing brands.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white" 
                  : "border-purple-200 hover:bg-purple-50"
                }
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {item.type}
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white capitalize">
                          {item.category}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200 mb-3">{item.brand}</p>
                      <p className="text-xs text-gray-300 mb-4 line-clamp-2">{item.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{item.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{item.comments}</span>
                          </div>
                        </div>
                        <div className="text-sm font-medium">
                          {item.engagement} engagement
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Type indicator */}
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-2 text-white">
                    {item.type === 'Reel' && <Play className="h-4 w-4" />}
                    {item.type === 'Carousel' && <ExternalLink className="h-4 w-4" />}
                    {item.type === 'Post' && <Share2 className="h-4 w-4" />}
                  </div>
                </div>
                
                {/* Card Content */}
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <p className="text-purple-600 font-medium mb-3">{item.brand}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{item.comments}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-purple-600 border-purple-200">
                      {item.engagement}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Love What You See?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. I'm always excited to work with new brands and explore creative opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-6">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-6">
              Download Media Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}