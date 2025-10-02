import { FaJava, FaReact, FaAngular, FaPython, FaDocker } from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiJavascript,
} from "react-icons/si";
import { Link } from "react-router-dom";

const stacks = [
  { icon: <FaJava className="w-12 h-12 text-[#f89820]" />, name: "Java" },
  {
    icon: <SiSpringboot className="w-12 h-12 text-green-500" />,
    name: "Spring Boot",
  },
  { icon: <FaReact className="w-12 h-12 text-blue-400" />, name: "React" },
  { icon: <FaAngular className="w-12 h-12 text-red-500" />, name: "Angular" },
  { icon: <FaPython className="w-12 h-12 text-yellow-400" />, name: "Python" },
  { icon: <SiMysql className="w-12 h-12 text-sky-600" />, name: "MySQL" },
  { icon: <SiOracle className="w-12 h-12 text-red-600" />, name: "Oracle" },
  {
    icon: <SiJavascript className="w-12 h-12 text-yellow-500" />,
    name: "JavaScript",
  },
];

export default function Stack() {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-3xl font-bold mb-8 hero-gradient-text">
          Les stacks que j’utilise
        </h2>

        {/* Texte d'intro */}
        <p className="text-[var(--color-gray-light)] max-w-2xl mx-auto mb-12">
          Voici un aperçu des technologies que j’utilise au quotidien pour
          concevoir des applications modernes et performantes. La liste complète
          est disponible dans la section{" "}
          <span className="text-[var(--color-primary)] font-semibold">
            Compétences
          </span>
          .
        </p>

        {/* Liste des stacks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-10">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl bg-white/5 
             hover:bg-white/10 hover:scale-105 
             transition-transform duration-300 shadow-md cursor-pointer"
            >
              {stack.icon}
              <span className="mt-3 text-lg font-medium text-[var(--color-gray-light)]">
                {stack.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bouton vers compétences */}
        <Link
          to="/competences"
          className="btn-primary inline-block mt-6 px-6 py-3 rounded-lg font-semibold text-decoration-none"
        >
          Voir mes compétences
        </Link>
      </div>
    </section>
  );
}
