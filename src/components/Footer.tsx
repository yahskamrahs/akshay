import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-center gap-6">
          <a href="https://github.com/yahskamrahs" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/akshaykumar-sharma-b803a6264/" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/yahska_amrahs" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2Fyahskaamrahs" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}