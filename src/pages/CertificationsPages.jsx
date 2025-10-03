import defaultCertImg from "../assets/default.jpg";
import reactImg from "../assets/react.svg";
import nodeImg from "../assets/node_js.png";
import { useState } from "react";
import { Award, ExternalLink, CheckCircle } from "lucide-react";
import SolidImag from "../assets/solid.png";
import archiImg from "../assets/clean.png";
 const certifications = [
	{
		title: "React de A à Z (Hooks, Redux, Contexte)",
		issuer: "Udemy (Formateur : Enzo Ustariz, Web School)",
		date: "24 Sept. 2025",
		link: "",
		skills: [
			"React.js",
			"Hooks",
			"Redux",
			"Context API",
			"Meilleures pratiques",
		],
		category: "Développement Frontend",
		image: reactImg,
	},
	{
		title: "Clean Code : principes et pratiques",
		issuer: "Udemy",
		date: "Août 2025",
		link: "",
		skills: ["Refactorisation", "Design patterns", "Code maintenable"],
		category: "Qualité logicielle",
		image: archiImg,
	},
	{
		title: "Principes SOLID en PHP",
		issuer: "Udemy",
		date: "Août 2025",
		link: "",
		skills: ["SOLID", "POO", "PHP"],
		category: "Programmation orientée objet",
		image: SolidImag,
	},
	{
		title: "Apprendre  Node.js & Créer une API REST de A à Z",
		issuer: "Udemy",
		date: "20 Septembre 2025",
		link: "",
		skills: ["Node.js", "Documentation Swagger", "API REST"],
		category: "Programmation orientée objet",
		image: nodeImg,
	},
];

function CertificationCard({ cert }) {
	const [hovered, setHovered] = useState(false);
	const [showModal, setShowModal] = useState(false);

	// Image illustrative (photo du certificat si présente)
	const certImg = cert.image || defaultCertImg;

	return (
		<>
			<div
				className={`relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between shadow-lg transition-all duration-300 ${
					hovered ? "scale-105 shadow-2xl" : ""
				}`}
				style={{ backgroundColor: "var(--color-white)" }}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				{/* Image illustrative de la certification */}
				{/* <div className="w-full flex justify-center mb-4">
					<img
						src={certImg}
						alt="Certification illustration"
						className="w-24 h-24 object-cover rounded-xl shadow"
					/>
				</div> */}
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

				{/* Catégorie */}
				<div className="text-xs font-bold uppercase mb-2 text-[var(--color-primary)]">
					{cert.category}
				</div>

				{/* Titre */}
				<h3
					className={`text-lg font-semibold mb-3 transition-colors ${
						hovered ? "text-[var(--color-primary)]" : "text-[var(--color-dark)]"
					}`}
				>
					{cert.title}
				</h3>

				{/* Issuer & date */}
				<div className="flex items-center gap-2 mb-4 text-sm text-[var(--color-gray)]">
					<CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
					<span>{cert.issuer}</span>
					<span className="ml-auto">Obtenu en {cert.date}</span>
				</div>

				{/* Skills */}
				<div className="flex flex-wrap gap-2 mb-4">
					{cert.skills.map((skill, idx) => (
						<span
							key={idx}
							className={`text-xs px-2 py-1 rounded-full border border-transparent transition-all duration-300 ${
								hovered
									? "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] border-[var(--color-primary)]"
									: "bg-[var(--color-secondary)] text-[var(--color-gray)]"
							}`}
						>
							{skill}
						</span>
					))}
				</div>

				{/* Bouton */}
				<div className="flex gap-2 mt-auto">
					<button
						type="button"
						onClick={() => setShowModal(true)}
						className={`flex items-center justify-center gap-2 py-2 rounded-lg font-semibold text-sm transition-all duration-300 border-2 ${
							hovered
								? "bg-[var(--color-secondary)] text-white border-[var(--color-secondary)] shadow-md"
								: "bg-transparent text-[var(--color-secondary)] border-[var(--color-secondary)]"
						}`}
					>
						Voir
						<ExternalLink className="w-4 h-4" />
					</button>
				</div>
			</div>
			{/* Modale d'affichage de la photo */}
			{showModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
					<div className="bg-white rounded-lg p-4 max-w-lg w-full relative">
						<button
							className="absolute top-2 right-2 text-xl font-bold"
							onClick={() => setShowModal(false)}
							aria-label="Fermer"
						>
							×
						</button>
						<img
							src={certImg}
							alt="Photo du certificat"
							className="w-full h-auto rounded shadow"
							style={{ maxHeight: "70vh", objectFit: "contain" }}
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default function CertificationsPage() {
	return (
		<section
			className="py-20 px-6 lg:px-20"
			style={{ backgroundColor: "var(--color-bg)" }}
		>
			<div className="max-w-7xl mx-auto text-center mb-16">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-dark)]">
					Mes Certifications
				</h2>
				<p className="text-base md:text-lg text-[var(--color-gray-light)] max-w-3xl mx-auto">
					Voir mes certifications et formations attestant de mes compétences
					techniques et de mon engagement dans l'apprentissage continu.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{certifications.map((cert, idx) => (
					<CertificationCard key={idx} cert={cert} />
				))}
			</div>
		</section>
	);
}
