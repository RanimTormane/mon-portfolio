// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-400 text-sm border-t border-white/5">
      © {new Date().getFullYear()} <span className="text-white font-medium">Ranim Tormane</span>. Tous droits réservés.
    </footer>
  );
}
