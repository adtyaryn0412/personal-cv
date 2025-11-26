import React from 'react';
import { Heart, Instagram, Facebook, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer({ fullName, socialLinks }) {
  const links = socialLinks || {};

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Social Media</h3>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <a href={links.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors group">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-pink-50 dark:group-hover:bg-pink-900/30 transition-colors">
                    <Instagram size={20} />
                </div>
                <span className="font-medium">Instagram</span>
              </a>
              
              <a href={links.twitter} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <Twitter size={20} />
                </div>
                <span className="font-medium">X (Twitter)</span>
              </a>

              <a href={links.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                    <Facebook size={20} />
                </div>
                <span className="font-medium">Facebook</span>
              </a>

              <a href={links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors group">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                    <Linkedin size={20} />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Contact Me</h3>
            <div className="flex flex-col gap-4 items-center md:items-end">
              <p className="text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed mb-2 transition-colors duration-300">
                Tertarik untuk berkolaborasi atau punya pertanyaan seputar Network Engineering? Hubungi saya via email.
              </p>
              <a 
                href={links.email}
                className="flex items-center gap-3 text-gray-900 dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-gray-50 dark:bg-gray-800 px-6 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-gray-600"
              >
                <Mail size={20} />
                {links.email ? links.email.replace('mailto:', '') : 'email@address.com'}
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 dark:border-gray-800"></div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div>
                &copy; {new Date().getFullYear()} <span className="font-bold text-gray-900 dark:text-white">adtyaryn</span>. All rights reserved.
            </div>
            <div className="flex items-center gap-1">
                Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> using React + Vite
            </div>
        </div>
      </div>
    </footer>
  );
}