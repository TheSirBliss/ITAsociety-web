import React from 'react';
import { GlassCard, SectionTitle, useScrollReveal, ThreeJSBackground } from './UI';

export const HeroSection = () => (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <ThreeJSBackground />
        <div className="relative z-10 container mx-auto px-4">
            <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
                Il Futuro è una Sfida.<br/> <span className="gradient-text">Noi la Risolviamo.</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
                Siamo un collettivo di problem solver con un'ossessione per l'innovazione. Trasformiamo problemi complessi in vantaggi competitivi attraverso AI e architetture software d'avanguardia.
            </p>
            <p className="mt-4 text-green-400 font-mono text-sm">L'intelligenza artificiale al servizio dell'uomo.</p>
            <div className="mt-10">
                <a href="#servizi" className="cta-button">Esplora le Soluzioni</a>
            </div>
        </div>
    </section>
);

export const ServicesSection = () => {
    const [ref, style] = useScrollReveal();
    const serviceCategories = [
        { title: "AI Wizard & Agent Nexus", description: "Un ecosistema integrato. AI Wizard genera siti web performanti in pochi istanti, mentre Agent Nexus fornisce una rete di agenti AI autonomi per automatizzare task complessi.", image: "https://placehold.co/600x400/050816/4ade80?text=AI+Wizard" },
        { title: "Sentinel Cyber Nexus AI", description: "Una piattaforma di cybersecurity che non aspetta l'attacco. Sentinel usa l'AI per analizzare costantemente le minacce, simulare attacchi (PenTest AI) e identificare le vulnerabilità.", image: "https://placehold.co/600x400/050816/ef4444?text=Sentinel+AI" },
        { title: "Creamio Business Nexus", description: "Un hub di strumenti intelligenti che unifica analisi, gestione e crescita. Ottimizza ogni aspetto del business, dalla logistica con Smart Delivery Routes al benessere dei dipendenti.", image: "https://placehold.co/600x400/050816/ffffff?text=Creamio" },
    ];
    return (
        <section id="servizi" className="py-20 sm:py-28 bg-gray-900/50">
            <div className="container mx-auto px-4">
                <SectionTitle subtitle="Mission" title="AI-Powered Problem Solving" description="Non vendiamo solo servizi, ma soluzioni definitive. Ogni progetto è un ecosistema completo, nato per risolvere problemi specifici e testimoniare la nostra capacità di innovare."/>
                <div ref={ref} style={style} className="mt-16 space-y-16">
                    {serviceCategories.map((service, index) => (
                         <div key={service.title} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className={`project-image ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <img src={service.image} alt={`Immagine di ${service.title}`} className="rounded-lg shadow-2xl" />
                            </div>
                            <div className="project-details">
                                <h3 className="text-2xl font-bold font-orbitron text-green-400 mb-4">{service.title}</h3>
                                <p className="text-gray-400 mb-6">{service.description}</p>
                                <a href="#" className="font-semibold text-white hover:text-green-400 transition-colors">Scopri di più &rarr;</a>
                            </div>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const TeamSection = () => {
    const [ref, style] = useScrollReveal();
    const teamMembers = [
        { name: "Senior Full-Stack Developer & Software Architect", role: "Architetto del Futuro Digitale", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3" },
        { name: "Senior AI/ML Engineer & Research Scientist", role: "Pioniere dell'Intelligenza", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3" },
        { name: "Senior Business Strategist & C-Level Advisor", role: "Costruttore di Imperi Digitali", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3" },
        { name: "Senior Automotive & Innovation Expert", role: "Ingegnere della Rivoluzione", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3" },
    ];
    return (
        <section id="chisiamo" className="py-20 sm:py-28">
            <div className="container mx-auto px-4">
                <SectionTitle subtitle="Team" title="Le Menti Dietro la Rivoluzione" description="L'innovazione richiede un'alchimia di competenze. Il nostro team è composto da veterani del settore tecnologico e strateghi di mercato, uniti per un unico scopo: risolvere la tua prossima grande sfida."/>
                <div ref={ref} style={style} className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map(member => (
                        <GlassCard key={member.name} className="text-center">
                            <img className="mx-auto h-28 w-28 rounded-full border-2 border-green-400" src={member.img} alt={`Foto di ${member.name}`} />
                            <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-white">{member.name}</h3>
                            <p className="text-sm leading-6 text-green-400 font-semibold">{member.role}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
