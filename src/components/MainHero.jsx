import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
} from "lucide-react";
import Typewriter from "typewriter-effect";

import jeeri from "../assets/00.jpg";
import "../styles/mainhero.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function MainHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="main-hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-20 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div
            className={`space-y-6 text-center lg:text-left ${
              isVisible ? "fade-in-up" : ""
            }`}
          >
            <p className="text-base sm:text-lg lg:text-xl font-medium text-[var(--color-gray-light)]">
              Bonjour, je suis
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold hero-gradient-text leading-snug">
              Abdourahamane DIALLO
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl font-medium flex justify-center lg:justify-start items-center gap-2">
              <span>Développeur</span>
              <span className="hero-gradient-text">
                <Typewriter
                  options={{
                    strings: [
                      "Java",
                      "ReactJS",
                      "Angular",
                      "Python",
                      "Spring Boot",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--color-gray-light)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Je construis des applications modernes et robustes avec une
              approche centrée sur l'utilisateur. Passionné par les technologies
              de pointe, je transforme vos idées en solutions digitales
              performantes.
            </p>

            {/* Projet mis en avant */}
            <div className="bg-white/80 rounded-xl shadow p-4 mt-4 border-l-4 border-[var(--color-primary)]">
              <div className="font-bold text-lg text-[var(--color-primary)] mb-1">Gestion Transactions Financières</div>
              <div className="text-[var(--color-dark)] mb-1">Gestion des transactions financières (Wave, Orange Money) et support client.</div>
              <div className="text-sm text-[var(--color-text)] mb-1">
                <strong>Technologies :</strong> Spring Boot
              </div>
              <div className="text-sm text-[var(--color-text)]">
                <strong>Architecture :</strong> Multi-tenant
              </div>
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/projets"
                className="btn-primary flex items-center gap-2 text-decoration-none "
              >
                Voir mes projets <ExternalLink className="w-4 h-4" />
              </Link>
              <a
                href="/cv.pdf"
                download="CV_Abdourahamane_DIALLO.pdf"
                className="btn-secondary flex items-center gap-2 text-decoration-none"
              >
                <Download className="w-4 h-4" /> Télécharger CV
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-4">
              <span className="text-sm font-medium text-[var(--color-gray-light)]">
                Me suivre :
              </span>
              <div className="flex gap-3">
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

                <a
                  href="mailto:abdourahamanetinkindjeeri99@gmail.com"
                  className="social-btn"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`flex justify-center lg:justify-end ${
              isVisible ? "fade-in-up" : ""
            }`}
          >
            <div className="relative">
              <div
                className="w-32 h-32 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden p-1"
                style={{ background: "var(--gradient)" }}
              >
                <LazyLoadImage
                  src={jeeri}
                  alt="Photo de profil"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Décorations */}
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[var(--color-primary)]"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[var(--color-primary-hover)]"></div>
              <div className="absolute top-1/4 -left-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--color-primary-light)]"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
