export default function Experiences() {
    const experiences = [
        {
            periode: "Sept. – Oct. 2025",
            titre: "Développeur Full Stack – Projet de Gestion de Paiements (Multi-tenant)",
            entreprise: "Programme ODC",
            description: [
                "Conception et développement d’une application web de gestion des salaires et paiements multi-entreprises (architecture multi-tenant).",
                "Développement backend avec Node.js/Express et PostgreSQL (séparation des données par entreprise, gestion des rôles : Super Admin, Admin Entreprise, Employés).",
                "Développement frontend avec React.js et Tailwind CSS pour une interface moderne et responsive."
            ]
        },
        {
            periode: "Mars – Juin 2024",
            titre: "Stagiaire Développeur Logiciel",
            entreprise: "Programme L2I",
            description: [
                "Conception et développement d’API REST avec Spring Boot pour la gestion des cours et étudiants.",
                "Optimisation des performances et sécurisation des endpoints."
            ]
        },
        {
            periode: "Février – Mars 2024",
            titre: "Stagiaire Développeur d’Applications",
            entreprise: "CNFZ",
            description: [
                "Création d’une application web pour la gestion des formations.",
                "Backend avec Spring Boot et frontend avec Thymeleaf."
            ]
        },
        {
            periode: "Août – Oct. 2022",
            titre: "Agent de Distribution",
            entreprise: "Master Ba et Frère",
            description: [
                "Gestion des transactions financières (Wave, Orange Money) et support client."
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-[var(--color-bg)] px-6 lg:px-20 py-16 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent text-center">
                    Expérience Professionnelle
                </h1>
                <div className="space-y-10">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <span className="text-[var(--color-primary)] font-semibold text-lg">{exp.titre}</span>
                                <span className="text-sm text-[var(--color-gray)]">{exp.periode}</span>
                            </div>
                            <div className="text-[var(--color-dark)] font-medium mb-2">{exp.entreprise}</div>
                            <ul className="list-disc pl-6 text-[var(--color-text)] space-y-1">
                                {exp.description.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
  