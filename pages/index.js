import React, { useState, useEffect, useRef } from 'react';

// --- LIBRERIA PER ANIMAZIONI ---
// In un progetto reale, installeremmo questa libreria (es. npm install framer-motion)
// Qui simuliamo la sua presenza per le animazioni.
const motion = {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
};

// --- DATI DI CONFIGURAZIONE ---
const NAV_LINKS = [
    { href: 'home', label: 'Home' },
    { href: 'servizi', label: 'Servizi' },
    { href: 'innovazioni', label: 'Innovazioni' },
    { href: 'chisiamo', label: 'Chi Siamo' },
    { href: 'contatti', label: 'Contatti' },
];

// --- COMPONENTI ATOMICI E DI UTILITÀ ---

// Hook per animazioni on-scroll
const useScrollReveal = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    
    // Simula il comportamento di framer-motion
    const style = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
    };

    return [ref, style];
};


const ThreeJSBackground = () => {
    const mountRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        let animationFrameId;
        let scene, camera, group, clock;
        let mouseX = 0;

        const initializeScene = (THREE) => {
            if (!mountRef.current) return;

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            const renderer = new THREE.WebGLRenderer({
                canvas: mountRef.current,
                alpha: true
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            rendererRef.current = renderer;

            group = new THREE.Group();
            scene.add(group);

            const torusGeometry = new THREE.TorusGeometry(1.8, 0.5, 16, 100);
            const torusMaterial = new THREE.MeshStandardMaterial({
                color: 0x915eff, // Viola come nel design precedente
                roughness: 0.2,
                metalness: 0.8,
                wireframe: true,
                transparent: true,
                opacity: 0.3
            });
            const mainTorus = new THREE.Mesh(torusGeometry, torusMaterial);
            group.add(mainTorus);

            const pointLight = new THREE.PointLight(0xffffff, 300, 100);
            pointLight.position.set(5, 5, 5);
            scene.add(pointLight);
            
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
            scene.add(ambientLight);

            clock = new THREE.Clock();
            animate();
        };

        const onMouseMove = (event) => { mouseX = event.clientX - window.innerWidth / 2; };
        document.addEventListener('mousemove', onMouseMove);

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            if (group && clock && rendererRef.current && scene && camera) {
                const elapsedTime = clock.getElapsedTime();
                group.rotation.y = .1 * elapsedTime + (mouseX * 0.0005);
                rendererRef.current.render(scene, camera);
            }
        };

        const onResize = () => {
            if (camera && rendererRef.current) {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                rendererRef.current.setSize(window.innerWidth, window.innerHeight);
            }
        };
        window.addEventListener('resize', onResize);

        // --- GESTIONE CARICAMENTO SCRIPT ---
        if (window.THREE) {
            initializeScene(window.THREE);
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
            script.async = true;
            script.onload = () => {
                if (window.THREE) {
                    initializeScene(window.THREE);
                } else {
                    console.error("Three.js loaded but window.THREE is not available.");
                }
            };
            script.onerror = () => {
                console.error("Error loading Three.js script.");
            };
            document.body.appendChild(script);
            
            return () => { // Cleanup script tag if component unmounts before loading
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            };
        }

        return () => {
            window.removeEventListener('resize', onResize);
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return <canvas ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};


const Logo = () => (
    <a href="#" className="font-bold text-2xl tracking-tighter">
        <span className="text-green-500">ITA</span>
        <span className="text-white">S</span>
        <span className="text-red-500">ociety</span>
    </a>
);

const GlassCard = ({ children, className }) => (
    <div className={`glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ subtitle, title, description }) => {
    const [ref, style] = useScrollReveal();
    return (
        <div ref={ref} style={style} className="text-center max-w-3xl mx-auto">
            <h2 className="text-base font-semibold leading-7 text-green-400 font-mono">{subtitle}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-orbitron">{title}</p>
            <p className="mt-6 text-lg leading-8 text-gray-400">{description}</p>
        </div>
    );
};

// --- COMPONENTI DI LAYOUT ---

const Header = ({ setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (page) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div onClick={() => handleNavClick('home')} className="cursor-pointer"><Logo /></div>
                    <nav className="hidden md:flex md:space-x-8">
                        {NAV_LINKS.map(link => (
                             <a key={link.href} href={`#${link.href}`} onClick={() => handleNavClick(link.href)} className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm font-medium uppercase tracking-wider">{link.label}</a>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                        <a href="#contatti" onClick={() => handleNavClick('contatti')} className="cta-button">
                            Portaci la tua Sfida
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-black/90">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         {NAV_LINKS.map(link => (
                             <a key={link.href} href={`#${link.href}`} onClick={() => handleNavClick(link.href)} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{link.label}</a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

const Footer = () => (
    <footer id="contatti" className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Contenuto del footer qui, se necessario */}
            <div className="mt-8 pt-8 text-center">
                <p className="text-gray-400">import &#123; <span className="text-green-400">Future</span> &#125; from <span className="text-red-500">ITAsociety</span>;</p>
                <p className="text-xs text-gray-500 mt-4">&copy; 2025 ITAsociety. We solve what others can't.</p>
            </div>
        </div>
    </footer>
);

// --- SEZIONI DELLA HOMEPAGE ---

const HeroSection = ({ setCurrentPage }) => (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <ThreeJSBackground />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
                Il Futuro è una Sfida.<br/> <span className="gradient-text">Noi la Risolviamo.</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
                Siamo un collettivo di problem solver con un'ossessione per l'innovazione. Trasformiamo problemi complessi in vantaggi competitivi attraverso AI e architetture software d'avanguardia.
            </p>
            <p className="mt-4 text-green-400 font-mono text-sm">L'intelligenza artificiale al servizio dell'uomo.</p>
            <div className="mt-10">
                <a href="#servizi" onClick={() => setCurrentPage('servizi')} className="cta-button">
                    Esplora le Soluzioni
                </a>
            </div>
        </div>
    </section>
);

const ServicesSection = ({setCurrentPage}) => {
    const [ref, style] = useScrollReveal();
    const serviceCategories = [
        { title: "AI Wizard & Agent Nexus", description: "Un ecosistema integrato. AI Wizard genera siti web performanti in pochi istanti, mentre Agent Nexus fornisce una rete di agenti AI autonomi per automatizzare task complessi.", image: "https://placehold.co/600x400/050816/4ade80?text=AI+Wizard" },
        { title: "Sentinel Cyber Nexus AI", description: "Una piattaforma di cybersecurity che non aspetta l'attacco. Sentinel usa l'AI per analizzare costantemente le minacce, simulare attacchi (PenTest AI) e identificare le vulnerabilità.", image: "https://placehold.co/600x400/050816/ef4444?text=Sentinel+AI" },
        { title: "Creamio Business Nexus", description: "Un hub di strumenti intelligenti che unifica analisi, gestione e crescita. Ottimizza ogni aspetto del business, dalla logistica con Smart Delivery Routes al benessere dei dipendenti.", image: "https://placehold.co/600x400/050816/ffffff?text=Creamio" },
    ];
    return (
        <section id="servizi" className="py-20 sm:py-28 bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle subtitle="Mission" title="AI-Powered Problem Solving" description="Non vendiamo solo servizi, ma soluzioni definitive. Ogni progetto è un ecosistema completo, nato per risolvere problemi specifici e testimoniare la nostra capacità di innovare."/>
                <div ref={ref} style={style} className="mt-16 space-y-16">
                    {serviceCategories.map((service, index) => (
                         <div key={service.title} className="project-card grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className={`project-image ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <img src={service.image} alt={`Immagine di ${service.title}`} className="rounded-lg shadow-2xl" />
                            </div>
                            <div className="project-details">
                                <h3 className="text-2xl font-bold font-orbitron text-green-400 mb-4">{service.title}</h3>
                                <p className="text-gray-400 mb-6">{service.description}</p>
                                <button onClick={() => setCurrentPage('servizi')} className="font-semibold text-white hover:text-green-400 transition-colors">
                                    Scopri di più &rarr;
                                </button>
                            </div>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TeamSection = () => {
    const [ref, style] = useScrollReveal();
    const teamMembers = [
        { name: "Senior Full-Stack Developer & Software Architect", role: "Architetto del Futuro Digitale", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3" },
        { name: "Senior AI/ML Engineer & Research Scientist", role: "Pioniere dell'Intelligenza", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3" },
        { name: "Senior Business Strategist & C-Level Advisor", role: "Costruttore di Imperi Digitali", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3" },
        { name: "Senior Automotive & Innovation Expert", role: "Ingegnere della Rivoluzione", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3" },
    ];
    return (
        <section id="chisiamo" className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

// Pagina placeholder per i dettagli di un servizio
const ServicePage = ({ setCurrentPage }) => (
    <div className="py-40 container mx-auto px-4 text-center min-h-screen flex flex-col items-center justify-center">
        <SectionTitle 
            subtitle="Dettaglio Servizio"
            title="Piattaforme e Sviluppo AI"
            description="Questa è una pagina di esempio per un servizio. In un'applicazione reale, qui troveresti informazioni dettagliate, casi d'uso, specifiche tecniche e un modulo di contatto dedicato."
        />
        <button onClick={() => setCurrentPage('home')} className="mt-8 cta-button">
            Torna alla Home
        </button>
    </div>
);


// --- COMPONENTE PRINCIPALE DELL'APP (ROUTER) ---

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        document.body.style.fontFamily = "'Inter', 'Exo 2', sans-serif";
        document.body.style.backgroundColor = '#050816';
        document.body.style.color = '#e0e0e0';
        document.body.classList.add('antialiased');
        
        const style = document.createElement('style');
        style.innerHTML = `
            .font-orbitron { font-family: 'Orbitron', sans-serif; }
            .glass-card { background: rgba(21, 16, 48, 0.7); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(0, 242, 234, 0.2); }
            .gradient-text { background: linear-gradient(90deg, #4ade80, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .cta-button { display: inline-block; padding: 12px 30px; background: linear-gradient(90deg, #4ade80, #3b82f6); color: #fff; font-weight: 700; text-decoration: none; border-radius: 50px; transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 0 20px rgba(74, 222, 128, 0.4); border: none; cursor: pointer; }
            .cta-button:hover { transform: scale(1.05); box-shadow: 0 0 35px rgba(74, 222, 128, 0.6); }
        `;
        document.head.appendChild(style);
        
        // Carica Google Fonts
        const fontLink = document.createElement('link');
        fontLink.href = "https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700&family=Orbitron:wght@500;700&display=swap";
        fontLink.rel = "stylesheet";
        document.head.appendChild(fontLink);

        return () => { 
            if(document.head.contains(style)) document.head.removeChild(style);
            if(document.head.contains(fontLink)) document.head.removeChild(fontLink);
        };
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'servizi': return <ServicePage setCurrentPage={setCurrentPage} />;
            case 'home':
            default: return (
                <>
                    <HeroSection setCurrentPage={setCurrentPage} />
                    <ServicesSection setCurrentPage={setCurrentPage} />
                    <TeamSection />
                </>
            );
        }
    };

    return (
        <>
            <Header setCurrentPage={setCurrentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </>
    );
}
