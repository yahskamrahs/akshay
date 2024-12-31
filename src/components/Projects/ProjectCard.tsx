import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-300">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80" />
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-cyan-500/20 opacity-0 transition-opacity duration-300"
          >
            <span className="text-white text-lg font-semibold">View Details</span>
          </motion.div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800/50 text-white hover:text-cyan-400 px-4 py-2 rounded-lg transition-colors"
            >
              <Github size={20} />
              <span>Code</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 px-4 py-2 rounded-lg transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};