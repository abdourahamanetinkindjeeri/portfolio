import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";

import  defaultCover from '../assets/default.jpg'

const featuredProjects = [
  {
    title: "Gestion des locations étudiantes – CampusLoc",
    description:
      "Projet de fin de Master 1 : Application web (Spring Boot, ReactJS, PostgreSQL) facilitant l’accès au logement étudiant via une plateforme centralisée d’offres.",
    link: "/projets/campusloc",
    tags: ["React", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Inscriptions pédagogiques",
    description:
      "Développement d’une application de gestion des inscriptions avec Java & Swing, simplifiant et automatisant le parcours étudiant.",
    link: "/projets/inscriptions",
    tags: ["Java", "Swing"],
  },
  {
    title: "API de réservation",
    description:
      "Conception d'une API REST pour la gestion des ressources informatiques, permettant la réservation et le suivi (Spring Boot).",
    link: "/projets/api-reservation",
    cover: defaultCover,
    tags: ["Spring Boot", "REST API"],
  },
];


export default function FeaturedProjects() {
  return (
    <section className="py-6 px-6 lg:px-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8 hero-gradient-text">
            Projets en Vedette
          </h2>
          <p className="text-sm lg:text-base text-[var(--color-text)] opacity-80 max-w-xl mx-auto">
            Une sélection de mes réalisations les plus significatives
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-[var(--color-white)] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <img
                  src={project.cover || defaultCover}
                  alt={`Couverture de ${project.title}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="bg-white text-[var(--color-dark)] p-3 rounded-full shadow-lg hover:bg-[var(--color-primary)] hover:text-white transform hover:scale-110 transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="bg-white text-[var(--color-dark)] p-3 rounded-full shadow-lg hover:bg-[var(--color-primary)] hover:text-white transform hover:scale-110 transition-all duration-300">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-gray-light)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--color-text)] mb-3 flex-1 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-[var(--color-gray)] bg-[var(--color-primary-light)] px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="group/link inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all duration-300 text-sm"
                >
                  Voir le projet
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/projets"
            className="group inline-flex items-center gap-3 btn-primary inline-block mt-6 px-6 py-3 rounded-lg font-semibold text-decoration-none"
          >
            Voir mes projets
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
          </a>
          <p className="mt-4 text-[var(--color-text)] opacity-70 text-sm">
            Plus de 10 projets disponibles dans mon portfolio complet
          </p>
        </div>
      </div>
    </section>
  );
}
