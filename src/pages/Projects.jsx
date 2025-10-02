import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaChevronLeft, FaChevronRight, FaInfoCircle } from "react-icons/fa";
import defaultCover from '../assets/default.jpg'

// Fonction utilitaire pour fallback d'image
function getImageOrDefault(image) {
  return image && image.trim() !== "" ? image : defaultCover;
}

// Liste des projets
const projects = [
  {
    title: "API – Gestion des Apprenants",
    description: "API RESTful développée en TypeScript avec Express, Prisma, Zod et MySQL pour gérer apprenants, promotions, profils, compétences, référentiels, tags et niveaux dans un projet de gestion de formation. L’objectif est de proposer une API maintenable, modulaire et extensible.",
    image: "",
    tech: ["TypeScript", "Express", "Prisma", "Zod", "MySQL"],
    architecture: "RESTful, modulaire",
    github: "",
    demo: "",
    detailsLink: "",
  },
  
  {
    title: "Gestion de Paiements Multi-tenant",
    description: "Application web de gestion des salaires et paiements multi-entreprises (architecture multi-tenant). Backend Node.js/Express & PostgreSQL, frontend React.js & Tailwind CSS.",
    image: "",
    tech: ["Node.js", "Express", "PostgreSQL", "React.js", "Tailwind CSS"],
    github: "",
    demo: "",
    detailsLink: "",
  },
  {
    title: "Mini-projet E-commerce (Premier projet React)",
    description: "Ce projet est basé sur Create React App.\nFonctionnalités principales :\n- Affichage d'une liste de produits/articles avec leurs détails.\n- Chaque carte d'article propose un bouton Show pour afficher le contenu (description, stock, prix, etc.).\n- Une fois le contenu affiché, un bouton Reduce permet de le masquer.\n- Gestion du stock et du statut 'like' sur chaque produit.\n- Composants réutilisables (Button, ProductCard, ArticleCard...).",
    image: "",
    tech: ["React.js", "HTML", "CSS"],
    architecture: "SPA (Create React App)",
    github: "",
    demo: "",
    detailsLink: "",
  },
  {
    title: "MAXITSA",
    description: "Application web permettant aux clients de gérer des comptes principaux et secondaires, consulter leurs soldes, effectuer des transferts et paiements, et suivre leurs transactions. Le service commercial peut rechercher des comptes par numéro de téléphone pour consulter soldes et transactions. Utilisation d'APP_DAF pour récupérer les clients via le CIN et intégration de woyofall_SN API pour la simulation de paiement d'électricité.",
    image: "",
    tech: ["PHP", "HTML", "CSS"],
    architecture: "Clean (MVC)",
    github: "",
    demo: "",
    detailsLink: "",
  },
  {
    title: "woyofall_SN API",
    description: "API pour la simulation de paiement d'électricité.",
    image: "",
    tech: ["API REST","PHP POO","PostgreSQL" , "MariaDB","Docker","Pattern MVC"],
    architecture: "-",
    github: "",
    demo: "",
    detailsLink: "",
  },
  
  {
    title: "API REST Gestion de Cours et Étudiants",
    description: "API REST avec Spring Boot pour la gestion des cours et étudiants. Optimisation des performances et sécurisation des endpoints.",
    image: "",
    tech: ["Spring Boot", "Java", "API REST", "PostgreSQL","Websocket"],
    github: "",
    demo: "",
    detailsLink: "",
  },
  {
    title: "Application Gestion de Formations",
    description: "Application web pour la gestion des formations. Backend Spring Boot, frontend avec React.",
    image: "",
    tech: ["Spring Boot", "React","MariaDB"],
    github: "",
    demo: "",
    detailsLink: "",
  },
  {
    title: "GestionEvent",
    description: "Plateforme permettant de gérer l'organisation d'un événement via le recrutement de prestataires ou autres services.",
    image: "",
    tech: ["Spring Boot", "React.js", "MySQL"],
    architecture: "Pattern MVC",
    github: "",
    demo: "",
    detailsLink: "",
  },
  
  {
    title: "Gestion Transactions Financières",
    description: "Gestion des transactions financières (Wave, Orange Money) et support client.",
    image: "",
    tech: ["Spring Boot", "PostgreSQL"],
    github: "",
    demo: "",
    detailsLink: "",
  },
];

const PROJECTS_PER_PAGE = 6;

function ProjectCard({ project, animationDelay }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation d'entrée avec délai
  useState(() => {
    setTimeout(() => setIsVisible(true), animationDelay);
  }, [animationDelay]);

  return (
    <div
      className="group relative rounded-3xl overflow-hidden transition-all duration-700"
      style={{ 
        backgroundColor: 'var(--color-white)',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(212, 180, 131, 0.4), 0 0 0 2px var(--color-primary)'
          : '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'translateY(-12px) scale(1.02)' : isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        opacity: isVisible ? 1 : 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image avec overlay dynamique */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={getImageOrDefault(project.image)}
          alt={project.title}
          className="h-full w-full object-cover transition-all duration-700"
          style={{
            transform: isHovered ? 'scale(1.2) rotate(2deg)' : 'scale(1)',
            filter: isHovered ? 'brightness(0.7) saturate(1.2)' : 'brightness(1)',
          }}
        />
        <div 
          className="absolute inset-0 transition-all duration-500"
          style={{ 
            background: isHovered 
              ? 'linear-gradient(135deg, rgba(212, 180, 131, 0.4) 0%, rgba(160, 116, 74, 0.6) 100%)'
              : 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
        
        {/* Overlay avec liens rapides */}
        <div 
          className="absolute inset-0 flex items-center justify-center gap-5 transition-all duration-500"
          style={{ 
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1)' : 'scale(0.8)',
          }}
        >
          <a
            href={project.detailsLink}
            className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              color: 'var(--color-primary)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.color = 'var(--color-white)';
              e.currentTarget.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.color = 'var(--color-primary)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FaInfoCircle className="text-2xl" />
          </a>
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: 'var(--color-primary)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-white)';
                e.currentTarget.style.transform = 'scale(1.2) rotate(10deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.color = 'var(--color-primary)';
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <FaGithub className="text-2xl" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: 'var(--color-primary)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-white)';
                e.currentTarget.style.transform = 'scale(1.2) rotate(-10deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.color = 'var(--color-primary)';
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <FaExternalLinkAlt className="text-xl" />
            </a>
          )}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-7">
        <h3 
          className="text-2xl font-bold mb-3 transition-colors duration-300"
          style={{ color: isHovered ? 'var(--color-primary)' : 'var(--color-dark)' }}
        >
          {project.title}
        </h3>
        
        <p 
          className="mb-6 text-sm leading-relaxed"
          style={{ 
            color: 'var(--color-gray-light)',
            minHeight: '75px',
          }}
        >
          {project.description}
        </p>

        {/* Technologies avec design amélioré */}
        <div className="flex flex-wrap gap-2 mb-6 min-h-[70px]">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-4 py-2 rounded-full font-medium transition-all duration-300"
              style={{ 
                backgroundColor: isHovered ? 'rgba(212, 180, 131, 0.2)' : 'var(--color-secondary)',
                color: isHovered ? 'var(--color-primary-dark)' : 'var(--color-gray)',
                border: `1.5px solid ${isHovered ? 'var(--color-primary)' : 'transparent'}`,
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Boutons d'action redessinés */}
        <div className="flex gap-3 pt-5" style={{ borderTop: '2px solid var(--color-secondary)' }}>
          <a
            href={project.detailsLink}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 text-decoration-none"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-white)',
              border: '2px solid var(--color-primary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
              e.currentTarget.style.borderColor = 'var(--color-primary-hover)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 180, 131, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.borderColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FaInfoCircle /> Détails
          </a>
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{ 
                backgroundColor: 'transparent',
                color: 'var(--color-gray)',
                border: '2px solid var(--color-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-dark)';
                e.currentTarget.style.color = 'var(--color-white)';
                e.currentTarget.style.borderColor = 'var(--color-dark)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(47, 47, 47, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-gray)';
                e.currentTarget.style.borderColor = 'var(--color-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaCode />
            </a>
          )}
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{ 
                backgroundColor: 'transparent',
                color: 'var(--color-gray)',
                border: '2px solid var(--color-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-success)';
                e.currentTarget.style.color = 'var(--color-white)';
                e.currentTarget.style.borderColor = 'var(--color-success)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-gray)';
                e.currentTarget.style.borderColor = 'var(--color-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaRocket />
            </a>
          )}
        </div>
      </div>

      {/* Barre décorative en bas avec animation */}
      <div 
        className="h-1.5 transition-all duration-500"
        style={{ 
          background: isHovered ? 'var(--gradient)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(212, 180, 131, 0.5)' : 'none',
        }}
      />
    </div>
  );
}

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      {/* En-tête avec design amélioré */}
      <div className="text-center mb-20">
        <div className="inline-block relative">
          {/* Accent décoratif animé */}
          <div 
            className="absolute -top-6 left-1/2 w-20 h-1.5 rounded-full transition-all duration-500"
            style={{ 
              background: 'var(--gradient)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 20px rgba(212, 180, 131, 0.5)',
            }}
          />
          
          <h2 
            className="text-5xl md:text-6xl font-bold mb-4 relative"
            style={{ color: 'var(--color-dark)' }}
          >
            Mes Projets
            <div 
              className="absolute -bottom-3 left-0 right-0 h-2 rounded-full"
              style={{ background: 'var(--gradient)', opacity: 0.7 }}
            />
          </h2>
        </div>
        
        <p 
          className="max-w-2xl mx-auto mt-8 text-lg leading-relaxed"
          style={{ color: 'var(--color-gray-light)' }}
        >
          Découvrez une sélection de mes réalisations en développement web et logiciel. 
          <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}> Chaque projet</span> reflète 
          mon engagement pour des solutions innovantes et performantes.
        </p>

        {/* Indicateur de page */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentPage === index ? '32px' : '10px',
                height: '10px',
                backgroundColor: currentPage === index ? 'var(--color-primary)' : 'var(--color-secondary)',
                border: currentPage === index ? '2px solid var(--color-primary)' : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Grille des projets */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {currentProjects.map((project, index) => (
          <ProjectCard 
            key={startIndex + index} 
            project={project} 
            index={startIndex + index}
            animationDelay={index * 100}
          />
        ))}
      </div>

      {/* Navigation pagination */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          style={{
            backgroundColor: currentPage === 0 ? 'var(--color-secondary)' : 'var(--color-primary)',
            color: currentPage === 0 ? 'var(--color-gray-light)' : 'var(--color-white)',
            border: `2px solid ${currentPage === 0 ? 'var(--color-secondary)' : 'var(--color-primary)'}`,
            cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
            opacity: currentPage === 0 ? 0.5 : 1,
          }}
          onMouseEnter={(e) => {
            if (currentPage !== 0) {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
              e.currentTarget.style.transform = 'translateX(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 180, 131, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== 0) {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          <FaChevronLeft /> Précédent
        </button>

        <div className="text-lg font-semibold" style={{ color: 'var(--color-dark)' }}>
          <span style={{ color: 'var(--color-primary)' }}>{currentPage + 1}</span> / {totalPages}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          style={{
            backgroundColor: currentPage === totalPages - 1 ? 'var(--color-secondary)' : 'var(--color-primary)',
            color: currentPage === totalPages - 1 ? 'var(--color-gray-light)' : 'var(--color-white)',
            border: `2px solid ${currentPage === totalPages - 1 ? 'var(--color-secondary)' : 'var(--color-primary)'}`,
            cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
            opacity: currentPage === totalPages - 1 ? 0.5 : 1,
          }}
          onMouseEnter={(e) => {
            if (currentPage !== totalPages - 1) {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
              e.currentTarget.style.transform = 'translateX(5px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 180, 131, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== totalPages - 1) {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          Suivant <FaChevronRight />
        </button>
      </div>
    </section>
  );
}