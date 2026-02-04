// src/components/Education.jsx
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
    <section id="education" className="py-20 px-6 bg-[#0f172a] text-white">
      {/* Titre */}
      <h2 className="text-3xl font-bold mb-12 text-center text-white">
        Formation
      </h2>

      {/* Grid des cartes */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group relative p-8 bg-[#1e293b] rounded-2xl border border-indigo-400
                       shadow-md hover:shadow-2xl
                       hover:-translate-y-2
                       transition-all duration-300"
          >
            {/* Diplôme */}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">
              {edu.degree}
            </h3>

            {/* École et période */}
            <p className="text-gray-300">
              {edu.school} • {edu.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
