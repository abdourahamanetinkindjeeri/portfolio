import { Github, Linkedin, Mail } from "lucide-react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Nom */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-3">
            MonPortfolio
          </h2>
          <p className="text-sm text-gray-400">
            Développeur Fullstack passionné, je construis des applications
            modernes et robustes avec Java, React, Angular, Python & Spring
            Boot.
          </p>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-col space-y-2 liens">
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <a href="/" className="hover:text-[var(--color-primary)] transition">
            Accueil
          </a>
          <a
            href="/about"
            className="hover:text-[var(--color-primary)] transition"
          >
            À propos
          </a>
          <a
            href="/projets"
            className="hover:text-[var(--color-primary)] transition"
          >
            Projets
          </a>
          <a
            href="/contact"
            className="hover:text-[var(--color-primary)] transition"
          >
            Contact
          </a>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-3">Me suivre</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/abdourahamanetinkindjeeri"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/abdourahamane-diallo-3075b428a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a href="mailto:abdourahamanetinkindjeeri99@gmail.com" className="social-btn">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-gray-300 mt-8 py-4">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MonPortfolio. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
