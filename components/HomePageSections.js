export const HeroSection = () => {
    const sectionRef = useScrollReveal();
    return (
        <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
            <HeroCanvas />
            <div className="relative z-10 container mx-auto px-4">
                <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
                    Il Futuro è una Sfida.<br />
                    <span className="hero-gradient-text">Noi la Risolviamo.</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-text-muted">
                    Siamo un'azienda di problem solving con un focus ossessivo su innovazione, intelligenza artificiale e architetture software. Trasformiamo problemi complessi in vantaggi competitivi.
                </p>
                <div className="mt-10">
                    <CTAButton href="#contatti">Portaci la tua Sfida</CTAButton>
                </div>
            </div>
        </section>
    );
};

export const ServicesSection = () => {
    const sectionRef = useScrollReveal();
    const services = [
        {
            title: "AI Wizard & Agent Nexus",
            problem: "Le aziende necessitano di una presenza online rapida e di automazioni complesse, ma i processi tradizionali sono lenti e costosi.",
            solution: "Un ecosistema integrato. AI Wizard genera siti web performanti in pochi istanti, mentre Agent Nexus fornisce una rete di agenti AI autonomi per automatizzare task complessi, dalla gestione clienti all'analisi dati.",
            image: "https://placehold.co/600x400/050816/00f2ea?text=AI+Wizard",
        },
        {
            title: "Sentinel Cyber Nexus AI",
            problem: "Le minacce informatiche sono sempre più sofisticate e le difese tradizionali reattive, non proattive.",
            solution: "Una piattaforma di cybersecurity che non aspetta l'attacco. Sentinel usa l'AI per analizzare costantemente le minacce, simulare attacchi (PenTest AI) e identificare le vulnerabilità prima che possano essere sfruttate.",
            image: "https://placehold.co/600x400/050816/915eff?text=Sentinel+AI",
        },
    ];
    return (
        <section id="servizi" ref={sectionRef} className="py-20 sm:py-28">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Progetti di Punta</h2>
                <p className="section-subtitle">Questi non sono semplici servizi, ma ecosistemi completi, nati per risolvere problemi specifici del settore. Ogni progetto è una testimonianza della nostra capacità di innovare.</p>
                <div className="mt-16 space-y-20">
                    {services.map((service, index) => (
                        <div key={service.title} className="project-card">
                            <div className={`project-image ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <img src={service.image} alt={`Immagine di ${service.title}`} />
                            </div>
                            <div className="project-details">
                                <h3>{service.title}</h3>
                                <p><strong>Problema:</strong> {service.problem}</p>
                                <p><strong>Soluzione:</strong> {service.solution}</p>
                                <CTAButton href="#">Esplora &rarr;</CTAButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
