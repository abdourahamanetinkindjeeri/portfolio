import { useState } from "react";
import { Search, Home, AlertTriangle, ArrowLeft, MapPin, Compass } from "lucide-react";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Fond décoratif */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 35%, var(--color-primary) 0%, transparent 50%),
                           radial-gradient(circle at 75% 65%, var(--color-primary) 0%, transparent 50%)`,
        }}
      />

      {/* Éléments flottants décoratifs */}
      <div
        className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20 blur-2xl"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Code 404 géant */}
        <div className="relative mb-8">
          <h1
            className="text-9xl md:text-[200px] font-black tracking-tight opacity-10"
            style={{ 
              color: 'var(--color-primary)',
              lineHeight: '1',
            }}
          >
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'var(--color-white)',
                boxShadow: '0 20px 60px rgba(212, 180, 131, 0.3)',
              }}
            >
              <MapPin
                style={{
                  width: '60px',
                  height: '60px',
                  color: 'var(--color-primary)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Badge d'erreur */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full mb-6"
          style={{
            backgroundColor: 'rgba(220, 53, 69, 0.1)',
            border: '2px solid var(--color-error)',
          }}
        >
          <AlertTriangle
            style={{
              width: '18px',
              height: '18px',
              color: 'var(--color-error)',
            }}
          />
          <span
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color: 'var(--color-error)' }}
          >
            Page introuvable
          </span>
        </div>

        {/* Titre */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: 'var(--color-dark)' }}
        >
          Oups ! Cette page n'existe pas
        </h2>

        {/* Description */}
        <p
          className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
          style={{ color: 'var(--color-gray-light)' }}
        >
          La page que vous recherchez a peut-être été déplacée, supprimée ou n'a jamais existé.
          Pas de panique, nous allons vous aider à retrouver votre chemin !
        </p>

        {/* Suggestions */}
        <div
          className="p-8 rounded-2xl mb-10 max-w-2xl mx-auto"
          style={{
            backgroundColor: 'var(--color-white)',
            boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Compass
              style={{
                width: '24px',
                height: '24px',
                color: 'var(--color-primary)',
              }}
            />
            <h3
              className="text-xl font-bold"
              style={{ color: 'var(--color-dark)' }}
            >
              Suggestions rapides
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3 text-left">
            {[
              { label: "Accueil", link: "/" },
              { label: "Projets", link: "/projets" },
              { label: "Compétences", link: "/skills" },
              { label: "Certifications", link: "/certifications" },
              { label: "À propos", link: "/about" },
              { label: "Contact", link: "/contact" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium text-decoration-none"
                style={{
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-gray)',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(212, 180, 131, 0.15)';
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                  e.currentTarget.style.color = 'var(--color-primary)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-gray)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-white)',
              border: '2px solid var(--color-primary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
              e.currentTarget.style.borderColor = 'var(--color-primary-hover)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 180, 131, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.borderColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Home style={{ width: '20px', height: '20px' }} />
            Retour à l'accueil
          </a>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300"
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
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(47, 47, 47, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-gray)';
              e.currentTarget.style.borderColor = 'var(--color-secondary)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ArrowLeft style={{ width: '20px', height: '20px' }} />
            Page précédente
          </button>
        </div>
      </div>
    </div>
  );
}