// src/components/Certifications.jsx
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

export default function Certifications() {
  const certifications = [
    {
      title: "Certification de Formation – Développement Web MERN Stack",
      issuer: "Designet Web Agency",
      date: "Juil. – Août 2025",
      badge: "🎓",
      color: "from-indigo-500 to-cyan-500",
    },
    {
      title: "Attestation de Participation – START'APII Mahdia",
      issuer: "Agence de Promotion de l'Industrie et de l'Innovation (APII)",
      date: "Janv. 2026",
      badge: "🚀",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "شهادة مشاركة – مهارات العرض والخطابة «New Elite»",
      issuer: "El Ons Training Center",
      date: "Oct. 2024",
      badge: "🎤",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        My <span className="text-gradient">Certifications</span>
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/10 transition-all duration-300"
          >
            {/* Icon */}
            <span
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${cert.color} text-2xl`}
            >
              {cert.badge}
            </span>

            {/* Content */}
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-white leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-cyan-300">{cert.issuer}</p>
              <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
            </div>

            {/* Badge */}
            <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 px-3 py-1 rounded-full w-fit">
              <FiAward size={12} />
              Certifiée
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
