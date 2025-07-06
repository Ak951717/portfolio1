import Link from 'next/link';
import { Instagram, Youtube, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SL</span>
              </div>
              <span className="font-playfair text-xl font-bold">
                Sarah Lee
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating authentic, engaging content that tells your brand's story. 
              Available for collaborations worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 3.5H7.5C5.01 3.5 3 5.51 3 8v8c0 2.49 2.01 4.5 4.5 4.5h9c2.49 0 4.5-2.01 4.5-4.5V8c0-2.49-2.01-4.5-4.5-4.5z"/>
                  <path d="M12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/>
                </svg>
              </Link>
              <Link href="mailto:hello@sarahlee.com" className="text-gray-400 hover:text-green-500 transition-colors">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Brand Partnerships</span></li>
              <li><span className="text-gray-400">Content Creation</span></li>
              <li><span className="text-gray-400">Social Media</span></li>
              <li><span className="text-gray-400">Photography</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sarah Lee. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-pink-500" />
            <span>for creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
}