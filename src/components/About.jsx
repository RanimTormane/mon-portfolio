// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-10"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass rounded-3xl shadow-xl p-10 text-gray-200"
        >
          <p className="text-lg leading-relaxed">
            Graduate student in{" "}
            <span className="font-semibold text-indigo-300">
              Applied Computer Science – Business Intelligence
            </span>{" "}
            at the Higher Institute of Management of Sousse, and currently{" "}
            <span className="font-semibold text-indigo-300">
              pursuing a Master's in Internet of Things (IoT)
            </span>{" "}
            at ISET of Mahdia.
            <br />
            <br />I combine{" "}
            <span className="font-medium text-white">
              analytical rigor and technological curiosity
            </span>{" "}
            with <span className="font-medium text-white">technical creativity</span> to
            design innovative solutions in the fields of{" "}
            <span className="font-medium text-white">
              web development, Business Intelligence, and IoT
            </span>
            .
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 mx-auto my-8 rounded-full" />

          <p className="text-sm uppercase tracking-widest text-gray-400">
            Data • Web • IoT
          </p>
        </motion.div>
      </div>
    </section>
  );
}
