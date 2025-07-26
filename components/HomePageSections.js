import React from 'react';
import { useScrollReveal, CTAButton } from './UI';

export const HeroSection = () => {
    const [ref, style] = useScrollReveal();
    return (
        <section id="hero" ref={ref} style={style} className="relative min-h-screen flex items-center justify-center text-center">
            <div className="relative z-10 container mx-auto px-4">
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
        <section id="mission" ref={ref} style={style} className="py-20 sm:py-28 bg-bg-color/80 backdrop-blur-sm">
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
            solution: "Un ecosistema integrato. AI Wizard genera siti web performanti in pochi istanti, mentre Agent Nexus fornisce una rete di agenti AI autonomi per automatizzare task complessi.",
            image: "https://placehold.co/600x400/050816/00f2ea?text=AI+Wizard",
        },
        {
            title: "Sentinel Cyber Nexus AI",
            problem: "Le minacce informatiche sono sempre più sofisticate e le difese tradizionali reattive, non proattive.",
            solution: "Una piattaforma di cybersecurity che non aspetta l'attacco. Sentinel usa l'AI per analizzare costantemente le minacce e identificare le vulnerabilità.",
            image: "https://placehold.co/600x400/050816/915eff?text=Sentinel+AI",
        },
    ];
    return (
        <section id="servizi" ref={ref} style={style} className="py-20 sm:py-28 bg-bg-color/80 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Progetti di Punta</h2>
                <p className="section-subtitle">Questi non sono semplici servizi, ma ecosistemi completi, nati per risolvere problemi specifici del settore.</p>
                <div className="mt-16 space-y-20">
                    {services.map((service, index) => (
                        <div key={service.title} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center glass-card rounded-2xl p-8">
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
        <section id="innovazioni" ref={ref} style={style} className="py-20 sm:py-28 bg-bg-color/80 backdrop-blur-sm">
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
        { name: "Senior Full-Stack Developer", role: "Architetto del Futuro", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior AI/ML Engineer", role: "Pioniere dell'Intelligenza", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Business Strategist", role: "Costruttore di Imperi", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior UX/UI Designer", role: "Designer di Esperienze", img: "https://images.unsplash.com/photo-1581391623493-713d2f7517a6?q=80&w=200&auto=format&fit=crop" },
    ];
    return (
        <section id="team" ref={ref} style={style} className="py-20 sm:py-28 bg-transparent">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Le Menti Dietro la Rivoluzione</h2>
                <p className="section-subtitle">L'innovazione richiede un'alchimia di competenze. Il nostro team è unito per risolvere la tua prossima grande sfida.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {teamMembers.map(member => (
                        <div key={member.name} className="team-card text-center glass-card rounded-2xl p-4 transition-all duration-300 hover:border-primary hover:-translate-y-2">
                           <img className="mx-auto h-24 w-24 rounded-full border-2 border-primary object-cover mb-4" src={member.img} alt={`Foto di ${member.name}`} />
                            <h3 className="text-md font-bold text-white">{member.name}</h3>
                            <p className="font-semibold text-sm" style={{color: 'var(--primary-color)'}}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
