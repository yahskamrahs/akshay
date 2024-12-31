import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Mail } from 'lucide-react';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleContactClick = () => {
    window.location.href = `mailto:sharmaakshay0355@gmail.com`;
  };

  return (
    <header id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 py-20 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateX: 45 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 floating perspective-1000"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Akshaykumar
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8">
            Let's Create Solutions That Excel, and Ideas That Bring Peace.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <motion.a
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' 
              }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto hover:opacity-90 transition-all transform-gpu"
            >
              <Rocket className="animate-pulse" size={20} />
              View Projects
            </motion.a>
            <motion.button
              onClick={handleContactClick}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -5,
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="glass text-cyan-400 px-8 py-3 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto border border-cyan-500/20 hover:border-cyan-500/40 transition-all transform-gpu"
            >
              <Mail className="animate-pulse" size={20} />
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* 3D Decorative elements */}
      <motion.div
        animate={{ 
          rotateZ: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear" 
        }}
        className="absolute top-1/4 -left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          rotateZ: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear" 
        }}
        className="absolute bottom-1/4 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl"
      />
    </header>
  );
};