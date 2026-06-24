// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  const items = [
    {
      icon: <FiMail size={20} />,
      label: "Email",
      value: "ranimtormane23@gmail.com",
      href: "mailto:ranimtormane23@gmail.com",
    },
    {
      icon: <FiPhone size={20} />,
      label: "Téléphone",
      value: "+216 52 610 070",
      href: "tel:+21652610070",
    },
    {
      icon: <FiLinkedin size={20} />,
      label: "LinkedIn",
      value: "Ranim Tormane",
      href: "https://linkedin.com/in/ranim-tormane-928741288",
    },
    {
      icon: <FiGithub size={20} />,
      label: "GitHub",
      value: "Ranim Tormane",
      href: "https://github.com/RanimTormane",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Get in <span className="text-gradient">Touch</span>
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:bg-white/10 transition-colors"
          >
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white">
              {item.icon}
            </span>
            <span className="text-sm text-gray-400">{item.label}</span>
            <span className="font-medium text-white break-all">
              {item.value}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
