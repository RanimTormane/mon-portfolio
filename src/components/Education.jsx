// src/components/Education.jsx
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Master en Internet of Things (IoT)",
      school: "Institut Supérieur des Études Technologiques (ISET) de Mahdia",
      period: "2025 – 2026",
    },
    {
      degree:
        "Licence en Informatique Appliquée à la Gestion – Business Intelligence",
      school: "Institut Supérieur de Gestion de Sousse",
      period: "2022 – 2025",
    },
    {
      degree: "Baccalauréat en Économie et Gestion",
      school: "Lycée Cité Riadh 2 – Ksar Hlel",
      period: "2022",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        <span className="text-gradient">Formation</span>
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative p-8 glass rounded-2xl shadow-md hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <span className="inline-block mb-3 text-xs font-semibold text-indigo-200 bg-indigo-500/10 border border-indigo-400/20 px-3 py-1 rounded-full">
              {edu.period}
            </span>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gradient transition-colors">
              {edu.degree}
            </h3>
            <p className="text-gray-300">{edu.school}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
