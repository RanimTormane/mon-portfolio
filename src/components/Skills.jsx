// src/components/Skills.jsx
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "JavaScript", "Python", "PHP", "Java", "HTML", "TypeScript",
    "React.js", "Angular", "Laravel", "Express.js", "Vue.js",
    "WordPress", "Flutter", "MySQL", "Oracle", "Power BI",
  ];

  return (
    <section id="skills" className="py-20 px-6 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Skills & <span className="text-gradient">Tools</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            whileHover={{ scale: 1.08, y: -3 }}
            className="px-5 py-3 glass rounded-full text-indigo-100 font-medium hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-500 hover:text-white hover:border-transparent transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
