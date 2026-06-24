// src/components/Background.jsx
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0b1020]">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-15%] left-[20%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
