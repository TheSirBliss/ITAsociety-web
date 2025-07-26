import React from 'react';
import { useScrollReveal, ThreeJSBackground, CTAButton } from './UI';

export const HeroSection = () => {
    const [ref, style] = useScrollReveal();
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
            <ThreeJSBackground />
            <div ref={ref} style={style} className="relative z-10 container mx-auto px-4">
                <h1 className="font-orbitron font-bold text-5xl md:text-7xl text-white leading-tight">
                    Il Futuro è una Sfida.<br />
                    <span className="hero-gradient-text">Noi la Risolviamo.</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-text-muted-color">
                    Siamo un'azienda di problem solving con un focus ossessivo su innovazione, intelligenza artificiale e architetture software. Trasformiamo problemi complessi in vantaggi competitivi.
                </p>
                <div className="mt-10">
                    <CTAButton href="#contatti">Portaci la tua Sfida</CTAButton>
                </div>
            </div>
        </section>
    );
};

export const MissionSection = () => {
    const [ref, style] = useScrollReveal();
    return (
        <section id="mission" ref={ref} style={style} className="py-20 sm:py-28">
            <div className="container mx-auto px-4">
                <h2 className="section-title">AI-Powered Problem Solving</h2>
                <p className="section-subtitle">
                    Non vendiamo solo servizi, ma soluzioni definitive. Il nostro approccio combina consulenza strategica e sviluppo tecnologico per affrontare ogni sfida alla radice. Analizziamo, progettiamo e costruiamo sistemi intelligenti che non solo funzionano, ma evolvono.
                </p>
            </div>
        </section>
    );
};

export const ServicesSection = () => {
    const [ref, style] = useScrollReveal();
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
        {
            title: "Creamio Business Nexus",
            problem: "Le aziende possiedono enormi quantità di dati, ma faticano a trasformarli in decisioni strategiche e crescita reale.",
            solution: "Un hub di strumenti intelligenti che unifica analisi, gestione e crescita. Trasformiamo i dati in efficienza e profitto.",
            image: "https://placehold.co/600x400/050816/FFFFFF?text=Creamio+Nexus",
        },
    ];
    return (
        <section id="servizi" ref={ref} style={style} className="py-20 sm:py-28">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Progetti di Punta</h2>
                <p className="section-subtitle">Questi non sono semplici servizi, ma ecosistemi completi, nati per risolvere problemi specifici del settore. Ogni progetto è una testimonianza della nostra capacità di innovare.</p>
                <div className="mt-16 space-y-20">
                    {services.map((service, index) => (
                        <div key={service.title} className="project-card grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center glass-card rounded-2xl p-8">
                            <div className={`project-image ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <img src={service.image} alt={`Immagine di ${service.title}`} className="rounded-lg" />
                            </div>
                            <div className="project-details">
                                <h3 className="font-orbitron text-3xl font-bold mb-4" style={{color: 'var(--primary-color)'}}>{service.title}</h3>
                                <p className="mb-4 text-text-muted-color"><strong className="text-white">Problema:</strong> {service.problem}</p>
                                <p className="mb-6 text-text-muted-color"><strong className="text-white">Soluzione:</strong> {service.solution}</p>
                                <a href="#" className="font-semibold text-white hover:text-primary transition-colors">Esplora la Piattaforma &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const InnovationsSection = () => {
    const [ref, style] = useScrollReveal();
    return (
        <section id="innovazioni" ref={ref} style={style} className="py-20 sm:py-28">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Guardiamo Oltre l'Orizzonte</h2>
                <p className="section-subtitle">La nostra divisione R&D esplora le frontiere della tecnologia per trasformare la fantascienza in realtà aziendale.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-card rounded-2xl p-8">
                        <h3 className="font-orbitron text-3xl font-bold mb-4 hero-gradient-text">Dream Recorder</h3>
                        <p className="text-text-muted-color">In collaborazione con ricercatori del MIT, stiamo sviluppando una tecnologia rivoluzionaria per visualizzare e analizzare l'attività cerebrale durante le fasi oniriche, ipnotiche e meditative.</p>
                    </div>
                    <div className="glass-card rounded-2xl p-8">
                        <h3 className="font-orbitron text-3xl font-bold mb-4 hero-gradient-text">Holo Revolution</h3>
                        <p className="text-text-muted-color">La nostra ricerca si concentra sullo sviluppo di proiezioni olografiche interattive di nuova generazione per la prototipazione virtuale nel settore automotive, la formazione medica e la collaborazione remota.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const TeamSection = () => {
    const [ref, style] = useScrollReveal();
    const teamMembers = [
        { name: "Senior Full-Stack Developer & Software Architect", role: "Architetto del Futuro Digitale", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior DevOps Engineer & Cloud Architect", role: "Ingegnere della Scalabilità", img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior AI/ML Engineer & Research Scientist", role: "Pioniere dell'Intelligenza", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Data Scientist & Analytics Expert", role: "Traduttore di Dati", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Business Strategist & C-Level Advisor", role: "Costruttore di Imperi Digitali", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Clinical Psychologist & Behavioral Expert", role: "Esperto Comportamentale", img: "https://images.unsplash.com/photo-1581090122119-e33814e3b3d5?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Marketing Director & Brand Strategist", role: "Stratega del Brand", img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Sales Director & Customer Success Expert", role: "Architetto delle Relazioni", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior UX/UI Designer & Product Design Lead", role: "Designer di Esperienze", img: "https://images.unsplash.com/photo-1581391623493-713d2f7517a6?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Automotive Engineer & Innovation Expert", role: "Ingegnere della Rivoluzione", img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Game Designer & Unreal Engine Specialist", role: "Creatore di Mondi Virtuali", img: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=200&auto=format&fit=crop" },
        { name: "3D Artist & MetaHuman Specialist", role: "Artista del Digitale", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Innovation Strategist & R&D Expert", role: "Catalizzatore di Breakthrough", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200&auto=format&fit=crop" },
    ];
    return (
        <section id="team" ref={ref} style={style} className="py-20 sm:py-28">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Le Menti Dietro la Rivoluzione</h2>
                <p className="section-subtitle">L'innovazione richiede un'alchimia di competenze. Il nostro team è composto da veterani del settore tecnologico e strateghi di mercato, uniti per un unico scopo: risolvere la tua prossima grande sfida.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map(member => (
                        <div key={member.name} className="team-card text-center glass-card rounded-2xl p-6 transition-all duration-300 hover:border-primary hover:-translate-y-2">
                           <img className="mx-auto h-28 w-28 rounded-full border-2 border-primary object-cover mb-4" src={member.img} alt={`Foto di ${member.name}`} />
                            <h3 className="text-lg font-bold text-white">{member.name}</h3>
                            <p className="font-semibold text-primary">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
