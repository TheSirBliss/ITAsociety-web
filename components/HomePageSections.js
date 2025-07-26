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
        { 
            category: "Sviluppo e Piattaforme AI", 
            services: [
                { title: "AI Wizard", description: "Crea siti web dinamici e personalizzati in pochi istanti, utilizzando la nostra intelligenza artificiale avanzata." },
                { title: "Agent Nexus", description: "Accedi a una rete di agenti AI autonomi per automatizzare task complesse e ottimizzare i processi aziendali." },
                { title: "Prompt Virtuoso Automator", description: "Genera e ottimizza prompt per modelli linguistici, massimizzando l’efficacia delle tue interazioni AI." },
            ]
        },
        { 
            category: "Sicurezza e Analisi Dati", 
            services: [
                { title: "Sentinel Cyber Nexus AI", description: "Soluzioni di cybersecurity potenziate dall’AI per la protezione proattiva delle tue infrastrutture digitali." },
                { title: "PenTest AI Portal", description: "Simula attacchi informatici per identificare e correggere le vulnerabilità dei tuoi sistemi prima che vengano sfruttate." },
                { title: "MedTrack Analyzer", description: "Piattaforma avanzata per l’analisi di dati medici, supportando la ricerca e la diagnostica con insight basati sull’AI." },
            ]
        },
        { 
            category: "Soluzioni Business e Utility", 
            services: [
                { title: "Business Nexus", description: "Un ecosistema di strumenti intelligenti per la gestione, l’analisi e la crescita del tuo business." },
                { title: "Smart Delivery Routes", description: "Ottimizza i percorsi di consegna con algoritmi intelligenti per ridurre costi, tempi ed emissioni." },
                { title: "SomaSynth", description: "Il tuo medico e psicoterapeuta AI, che mantiene memoria delle conversazioni per risposte complete e personalizzate." },
                { title: "Discord Ultimate Bot", description: "Potenzia il tuo server Discord con pulsanti interattivi e funzionalità avanzate per migliorare l’engagement." },
            ]
        },
    ];
    return (
        <section id="servizi" className="py-20 sm:py-28 bg-gray-900/50">
            <div className="container mx-auto px-4">
                <SectionTitle subtitle="Ecosistema Tecnologico" title="Soluzioni AI per Ogni Settore" description="Non vendiamo solo servizi, ma soluzioni definitive. Ogni progetto è un ecosistema completo, nato per risolvere problemi specifici e testimoniare la nostra capacità di innovare."/>
                <div ref={ref} style={style} className="mt-16 space-y-16">
                    {serviceCategories.map((cat) => (
                        <div key={cat.category}>
                            <h3 className="text-2xl font-bold font-orbitron text-green-400 mb-8">{cat.category}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {cat.services.map(service => (
                                    <GlassCard key={service.title}>
                                        <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                                        <p className="text-gray-400">{service.description}</p>
                                    </GlassCard>
                                ))}
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
        <section id="innovazioni" className="py-20 sm:py-28">
            <div className="container mx-auto px-4">
                <SectionTitle subtitle="Ricerca e Sviluppo" title="Guardiamo Oltre l'Orizzonte" description="La nostra divisione R&D esplora le frontiere della tecnologia per trasformare la fantascienza in realtà aziendale."/>
                <div ref={ref} style={style} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <GlassCard>
                        <h3 className="text-2xl font-bold gradient-text mb-2">Dream Recorder</h3>
                        <p className="text-gray-400">In collaborazione con ricercatori del MIT, stiamo sviluppando una tecnologia rivoluzionaria per visualizzare e analizzare l'attività cerebrale durante le fasi oniriche, ipnotiche e meditative, aprendo nuovi scenari per la ricerca neuroscientifica e il benessere.</p>
                    </GlassCard>
                    <GlassCard>
                        <h3 className="text-2xl font-bold gradient-text mb-2">Holo Revolution</h3>
                        <p className="text-gray-400">La nostra ricerca si concentra sullo sviluppo di proiezioni olografiche interattive di nuova generazione. L'obiettivo è creare esperienze immersive per la prototipazione virtuale nel settore automotive, la formazione medica e la collaborazione remota.</p>
                    </GlassCard>
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
        { name: "Senior Medical Doctor & Healthcare Innovation", role: "Innovatore della Salute", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop" },
        { name: "Healthcare Technology & Digital Health Specialist", role: "Specialista della Salute Digitale", img: "https://images.unsplash.com/photo-1579684385127-6ab18a5d7814?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Sales Director & Customer Success Expert", role: "Architetto delle Relazioni", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior UX/UI Designer & Product Design Lead", role: "Designer di Esperienze", img: "https://images.unsplash.com/photo-1581391623493-713d2f7517a6?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Automotive Engineer & Innovation Expert", role: "Ingegnere della Rivoluzione", img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=200&auto=format&fit=crop" },
        { name: "Senior Innovation Strategist & R&D Expert", role: "Catalizzatore di Breakthrough", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200&auto=format&fit=crop" },
    ];
    return (
        <section id="chisiamo" className="py-20 sm:py-28">
            <div className="container mx-auto px-4">
                <SectionTitle subtitle="Team" title="Le Menti Dietro la Rivoluzione" description="L'innovazione richiede un'alchimia di competenze. Il nostro team è composto da veterani del settore tecnologico e strateghi di mercato, uniti per un unico scopo: risolvere la tua prossima grande sfida."/>
                <div ref={ref} style={style} className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map(member => (
                        <GlassCard key={member.name} className="text-center">
                            <img className="mx-auto h-28 w-28 rounded-full border-2 border-green-400 object-cover" src={member.img} alt={`Foto di ${member.name}`} />
                            <h3 className="mt-6 text-md font-semibold leading-tight text-white">{member.name}</h3>
                            <p className="text-sm leading-6 text-green-400 font-semibold">{member.role}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
