// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#0f172a] text-white">
      {/* Titre */}
      <h2 className="text-3xl font-bold mb-12 text-center text-white">
        Contact
      </h2>

      {/* Infos contact */}
      <div className="max-w-xl mx-auto text-center space-y-6 text-gray-300">
        <p>
          <span className="font-semibold text-white">Email :</span>{" "}
          <a
            href="mailto:ranemtormane@gmail.com"
            className="text-indigo-300 hover:text-indigo-400 transition-colors"
          >
            ranemtormane@gmail.com
          </a>
        </p>

        <p>
          <span className="font-semibold text-white">Téléphone :</span> +216 52
          610 070
        </p>

        <p>
          <span className="font-semibold text-white">LinkedIn :</span>{" "}
          <a
            href="https://linkedin.com/in/ranim-tormane-928741288"
            className="text-indigo-300 hover:text-indigo-400 transition-colors"
          >
            Ranim Tormane
          </a>
        </p>
      </div>
    </section>
  );
}
