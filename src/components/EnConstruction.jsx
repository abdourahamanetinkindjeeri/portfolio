import { useState, useEffect } from "react";
import { Construction, Hammer, AlertCircle, Home, ArrowLeft } from "lucide-react";

export default function UnderConstruction() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Fond décoratif animé */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, var(--color-primary) 0%, transparent 50%),
                           radial-gradient(circle at 70% 60%, var(--color-primary) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Icône principale animée */}
        <div className="flex justify-center mb-8">
          <div
            className="relative"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <Construction
              style={{
                width: '120px',
                height: '120px',
                color: 'var(--color-primary)',
                filter: 'drop-shadow(0 10px 30px rgba(212, 180, 131, 0.4))',
              }}
            />
          </div>
        </div>

        {/* Badge "En construction" */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full mb-6"
          style={{
            backgroundColor: 'rgba(212, 180, 131, 0.15)',
            border: '2px solid var(--color-primary)',
          }}
        >
          <Hammer
            style={{
              width: '18px',
              height: '18px',
              color: 'var(--color-primary)',
            }}
          />
          <span
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color: 'var(--color-primary)' }}
          >
            En construction
          </span>
        </div>

        {/* Titre */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ color: 'var(--color-dark)' }}
        >
          Page en cours de développement
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto"
          style={{ color: 'var(--color-gray-light)' }}
        >
          Cette page est actuellement en construction. Notre équipe travaille
          activement pour vous offrir une{" "}
          <span style={{ color: 'var(--color-primary)', fontWeight: '700' }}>
            expérience exceptionnelle
          </span>.
        </p>

        {/* Info supplémentaire */}
        <div
          className="flex items-start gap-3 p-6 rounded-2xl mb-10 max-w-xl mx-auto"
          style={{
            backgroundColor: 'var(--color-white)',
            boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <AlertCircle
            style={{
              width: '24px',
              height: '24px',
              color: 'var(--color-primary)',
              flexShrink: 0,
              marginTop: '2px',
            }}
          />
          <div className="text-left">
            <h3
              className="font-bold mb-2"
              style={{ color: 'var(--color-dark)' }}
            >
              Que se passe-t-il ?
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-gray)' }}
            >
              Nous mettons en place de nouvelles fonctionnalités. 
              Cette page sera bientôt disponible avec du contenu de qualité.
            </p>
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