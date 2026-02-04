// src/components/Header.jsx
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="relative min-h-screen bg-[#0f172a] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-indigo-400 font-medium mb-4"
          >
            Hello 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            I’m <span className="text-indigo-400">Ranim</span> <br />
            <span className="text-white">Business Intelligence</span> <br />&
            IoT Student
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 text-gray-300 max-w-xl"
          >
            Passionate about data analysis, web development, and the Internet of
            Things, I design intelligent solutions focused on data and
            innovation
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-500 rounded-full font-semibold
               hover:bg-indigo-600 transition"
            >
              View My Projects
            </a>

            <a
              href="#about"
              className="px-6 py-3 border border-indigo-400 rounded-full
               hover:bg-indigo-400 hover:text-[#0f172a] transition"
            >
              About Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Circle background */}
          <div className="absolute w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

          {/* Image */}
          <img
            src="/me.jpeg" // 👉 mets ton image ici
            alt="Ranim Tormane"
            className="relative w-72 h-72 object-cover rounded-full border-4 border-indigo-400 shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
