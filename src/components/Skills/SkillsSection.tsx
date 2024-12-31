import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';

const skills = {
  "Frontend": [
    { name: "HTML", level: 97 },
    { name: "CSS", level: 92 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 82 }
  ],
  "Backend": [
    { name: "Node.js", level: 80 },
    { name: "Python", level: 84 },
    { name: "PHP", level: 88 },
    { name: "C++", level: 77 }
  ],
  "Database": [
    { name: "SQL", level: 90 },
    { name: "MySQL", level: 87 },
    { name: "MongoDB", level: 80 },
    { name: "SQLite", level: 78 }
  ]
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-gray-700 group-hover:border-cyan-500/30 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-6 text-cyan-400">{category}</h3>
                <div className="space-y-6">
                  {categorySkills.map((skill, index) => (
                    <SkillCard key={skill.name} {...skill} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};