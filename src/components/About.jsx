// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-8 text-white">About Me</h2>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200 text-gray-800">
          <p className="text-lg leading-relaxed">
            Graduate student in{" "}
            <span className="font-semibold text-indigo-600">
              Applied Computer Science – Business Intelligence
            </span>{" "}
            at the Higher Institute of Management of Sousse, and currently{" "}
            <span className="font-semibold text-indigo-600">
              pursuing a Master’s in Internet of Things (IoT)
            </span>{" "}
            at ISET of Mahdia.
            <br />
            <br />I combine{" "}
            <span className="font-medium">
              analytical rigor and technological curiosity
            </span>{" "}
            with <span className="font-medium">technical creativity</span> to
            design innovative solutions in the fields of{" "}
            <span className="font-medium">
              web development, Business Intelligence, and IoT
            </span>
            .
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-indigo-500 mx-auto my-8 rounded-full"></div>

          {/* Mini tagline */}
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Data • Web • IoT
          </p>
        </div>
      </div>
    </section>
  );
}
