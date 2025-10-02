import { Award, ExternalLink, CheckCircle } from "lucide-react";
import { useState } from "react";

const certifications = [
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2025",
    link: "https://www.freecodecamp.org/certification/eadarak/front-end-development-libraries",
    skills: ["React", "Bootstrap"],
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    link: "https://www.freecodecamp.org/certification/eadarak/javascript-algorithms-and-data-structures-v8",
    skills: ["JavaScript ES6+", "Structures de données"],
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2024",
    link: "https://www.credly.com/badges/78e553e0-2c65-4fe0-b855-cb2b61ed06de/linked_in_profile",
    skills: ["Sécurité réseau", "Bonnes pratiques"],
  },
];

// Fonction de tri (par année décroissante)
const sortCertifications = (data) =>
  [...data].sort((a, b) => parseInt(b.date) - parseInt(a.date));

function CertificationCard({ cert }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        backgroundColor: "var(--color-white)",
        boxShadow: hovered
          ? "0 20px 40px -10px rgba(212, 180, 131, 0.3), 0 0 0 2px var(--color-primary)"
          : "0 8px 20px -5px rgba(0, 0, 0, 0.1)",
        transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge en haut à droite */}
      <div
        className="absolute top-0 right-0 w-20 h-20 flex items-center justify-center transition-all duration-500"
        style={{
          background: hovered ? "var(--gradient)" : "var(--color-secondary)",
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
        }}
      >
        <Award
          className="absolute top-2 right-2 transition-transform duration-500"
          style={{
            width: 20,
            height: 20,
            color: hovered ? "var(--color-white)" : "var(--color-primary)",
            transform: hovered ? "rotate(15deg) scale(1.2)" : "rotate(0) scale(1)",
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="p-7 pt-14">
        <h3
          className="text-xl font-bold mb-3 transition-colors duration-300"
          style={{ color: hovered ? "var(--color-primary)" : "var(--color-dark)" }}
        >
          {cert.title}
        </h3>

        {/* Émetteur */}
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
          <p className="text-sm font-medium" style={{ color: "var(--color-gray)" }}>
            {cert.issuer}
          </p>
        </div>

        {/* Date */}
        <p className="text-xs mb-5" style={{ color: "var(--color-gray-light)" }}>
          Obtenu en {cert.date}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cert.skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-300"
              style={{
                backgroundColor: hovered ? "rgba(212, 180, 131, 0.15)" : "var(--color-secondary)",
                color: hovered ? "var(--color-primary-dark)" : "var(--color-gray)",
                border: `1.5px solid ${hovered ? "var(--color-primary)" : "transparent"}`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Lien */}
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold transition-all duration-300"
            style={{
              backgroundColor: hovered ? "var(--color-primary)" : "transparent",
              color: hovered ? "var(--color-white)" : "var(--color-primary)",
              border: "2px solid var(--color-primary)",
            }}
          >
            Voir la certification
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section className="py-20 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 hero-gradient-text">
          Certifications
        </h2>

        <p
          className="text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--color-gray-light)" }}
        >
          Certifications officielles validant mes{" "}
          <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>
            compétences techniques
          </span>{" "}
          et mon engagement dans l'apprentissage continu.
        </p>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortCertifications(certifications).map((cert, idx) => (
            <CertificationCard key={idx} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
