// src/components/Projects.jsx
export default function Projects() {
  const projects = [
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
    <section id="projects" className="py-20 px-6 bg-[#0f172a] text-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-8 bg-[#1e293b] rounded-2xl border border-indigo-400
                       shadow-md hover:shadow-2xl
                       hover:-translate-y-2
                       transition-all duration-300"
          >
            {/* Badge techno */}
            <span className="inline-block mb-4 text-sm font-medium text-indigo-100 bg-indigo-500/20 px-4 py-1 rounded-full">
              {project.tech}
            </span>

            {/* Titre */}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
