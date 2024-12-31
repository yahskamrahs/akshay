import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "mailto:sharmaakshay0355@gmail.com", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <motion.a 
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
          >
            Akshay;
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-gray-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};