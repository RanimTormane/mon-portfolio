// src/components/Projects.jsx
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Système de Contrôle d'Accès par Détection de Casque IoT",
      tech: "Python · TensorFlow/Keras · Flask · Raspberry Pi",
      description:
        "IoT system for helmet detection using Deep Learning and Computer Vision. Built with 3 Python modules: AI webcam inference, Raspberry Pi hardware control (motor L293D, LCD, buzzer), and a Flask/Chart.js dashboard. Communication via VSPE (COM7↔COM8) and REST API.",
    },

    {
      title: "Perfometrics – Dashboard Marketing",
      tech: "Laravel · Angular · APIs",
      description:
        "Web platform for analyzing and tracking marketing performance with Google Analytics and Instagram API integration.",
    },
    {
      title: "Web Development MERN (Training & Internship)",
      tech: "React · Node · Express · MongoDB",
      description:
        "Dynamic web applications developed during a MERN training and internship, including API design, MongoDB database management, and React interface development for Designet Web Agency.",
    },
    {
      title: "Android Mobile Application",
      tech: "Android · Java",
      description:
        "Interactive mobile application with dynamic data management and advanced features.",
    },
    {
      title: "Personal WordPress Blog",
      tech: "WordPress",
      description: "Creation of a static website for a personal blog.",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        My <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative p-8 glass rounded-2xl shadow-md hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
          >
            <span className="inline-block mb-4 text-sm font-medium text-cyan-200 bg-cyan-500/10 border border-cyan-400/20 px-4 py-1 rounded-full">
              {project.tech}
            </span>

            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gradient transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
