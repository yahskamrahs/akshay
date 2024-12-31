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
      className="relative group bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};