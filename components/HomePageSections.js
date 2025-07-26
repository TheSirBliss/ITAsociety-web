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
