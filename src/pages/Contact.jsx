export default function Contact() {
    return (
        <main className="min-h-screen bg-[var(--color-bg)] px-6 lg:px-20 py-16 flex items-center justify-center">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-4xl font-bold mb-6 text-[var(--color-primary)] text-center">Contactez-moi</h1>
                <p className="text-center text-[var(--color-text)] mb-8">
                    Vous souhaitez discuter d’un projet, d’une opportunité ou simplement échanger ? N’hésitez pas à me contacter via ce formulaire ou directement par email.
                </p>
                <form className="space-y-6" action="mailto:abdourahamanetinkindjeeri99@gmail.com" method="POST" encType="text/plain">
                    <div>
                        <label className="block mb-2 font-semibold text-[var(--color-dark)]">Nom</label>
                        <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" placeholder="Votre nom" />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-[var(--color-dark)]">Email</label>
                        <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" placeholder="Votre email" />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-[var(--color-dark)]">Message</label>
                        <textarea name="message" required rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" placeholder="Votre message..."></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 rounded-lg bg-[var(--color-primary)] text-white font-bold text-lg hover:bg-[var(--color-primary-hover)] transition-colors">Envoyer</button>
                </form>
                <div className="mt-10 text-center text-[var(--color-dark)]">
                    <div className="mb-2">Ou contactez-moi directement :</div>
                    <div className="flex flex-col gap-2 items-center">
                        <a href="mailto:abdourahamanetinkindjeeri99@gmail.com" className="text-[var(--color-primary)] underline">abdourahamanetinkindjeeri99@gmail.com</a>
                        <a href="tel:+221772707050" className="text-[var(--color-primary)] underline">+221 77 270 70 50</a>
                        <a href="https://github.com/abdourahamanetinkindjeeri" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline">GitHub</a>
                        <a href="https://www.linkedin.com/in/abdourahamane-diallo-3075b428a" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline">LinkedIn</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
  