// src/components/Header.jsx
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export default function Header() {
  return (
    <section className="relative min-h-screen text-white flex items-center pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass text-sm text-indigo-200"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            I'm <span className="text-gradient">Ranim</span>
            <br />
            <span className="text-white">Business Intelligence</span>
            <br />& IoT Student
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-gray-300 max-w-xl text-lg"
          >
            Passionate about data analysis, web development, and the Internet of
            Things — I design intelligent solutions focused on data and
            innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all"
            >
              View My Projects
            </a>

            <a
              href="#about"
              className="px-6 py-3 glass rounded-full font-semibold hover:bg-white/10 transition"
            >
              About Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-80 h-80 bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 rounded-full blur-3xl" />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="relative w-72 h-72 rounded-full p-1 bg-gradient-to-br from-indigo-400 via-purple-400 to-cyan-400">
              <img
                src={process.env.PUBLIC_URL + "/profile.png"}
                alt="Ranim Tormane"
                className="w-full h-full object-cover rounded-full border-4 border-[#0b1020] shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white"
        aria-label="Scroll down"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
