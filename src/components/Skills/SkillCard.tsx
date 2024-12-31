import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
  index: number;
}

export const SkillCard = ({ name, level, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-cyan-400">{level}%</span>
      </div>
      <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-sm opacity-50" />
        </motion.div>
      </div>
    </motion.div>
  );
};