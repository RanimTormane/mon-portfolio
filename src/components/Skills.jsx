// src/components/Skills.jsx
export default function Skills() {
  const skills = [
    "JavaScript",
    "Python",
    "PHP",
    "Java",
    "HTML",
    "TypeScript",
    "React.js",
    "Angular",
    "Laravel",
    "Express.js",
    "Vue.js",
    "WordPress",
    "Flutter",
    "MySQL",
    "Oracle",
    "Power BI",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#0f172a] text-white">
      {/* Skills in the middle */}
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-5 py-3 bg-indigo-500/20 border border-indigo-400 rounded-full text-indigo-100 font-medium hover:bg-indigo-500 hover:text-white transition shadow-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
