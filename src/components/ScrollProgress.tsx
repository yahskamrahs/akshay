import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 w-1 h-40 bg-gray-800 rounded-full z-50 hidden lg:block"
      style={{
        scaleY: scrollYProgress,
        background: useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          ['linear-gradient(to bottom, #06b6d4, #3b82f6)', 'linear-gradient(to bottom, #3b82f6, #8b5cf6)', 'linear-gradient(to bottom, #8b5cf6, #06b6d4)']
        )
      }}
    />
  );
};