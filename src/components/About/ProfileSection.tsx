import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Mail, Download } from 'lucide-react';

export const ProfileSection = () => {
  const handleContactClick = () => {
    window.location.href = `mailto:sharmaakshay0355@gmail.com?subject=Let's Connect&body=Hi, I'd like to connect with you!`;
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="relative group max-w-sm mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <img
                src="public/profile.jpg"
                alt="Profile"
                className="relative z-10 w-full aspect-square object-cover rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Profile Info */}
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-5" />
            <div className="relative">
              <p className="text-gray-400 mb-8 leading-relaxed">
              Passionate about learning and creating, with expertise in Web3 and web development, dedicated to building innovative and user-focused solutions with emerging technologies.</p>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 group"
                >
                  <span className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Briefcase className="text-cyan-400" size={20} />
                  </span>
                  <span>Web Developer at Global Web World</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 group"
                >
                  <span className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <MapPin className="text-cyan-400" size={20} />
                  </span>
                  <span>Chh.Sambhajinager (MH), INDIA</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 group"
                >
                  <span className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Calendar className="text-cyan-400" size={20} />
                  </span>
                  <span>Learning & Creative</span>
                </motion.div>
                <motion.button
                  onClick={handleContactClick}
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 text-gray-300 group w-full"
                >
                  <span className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="text-cyan-400" size={20} />
                  </span>
                  <span className="group-hover:text-cyan-400 transition-colors">sharmaakshay0355@gmail.com</span>
                </motion.button>
                
                {/* Download Resume Button */}
                <motion.a
                  href="../../../Assets/MyCV.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:opacity-90 transition-opacity"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};