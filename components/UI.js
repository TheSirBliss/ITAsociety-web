import React, { useState, useEffect, useRef } from 'react';

// --- COMPONENTI UI E UTILS ---

export const Logo = () => (
    <a href="#" className="font-bold text-2xl tracking-tighter">
        <span className="text-green-500">IT</span>
        <span className="text-white">A</span>
        <span className="text-red-500">Society</span>
    </a>
);

// --- CORREZIONE: Aggiunto il componente CTAButton mancante ---
export const CTAButton = ({ children, href = "#" }) => (
    <a href={href} className="cta-button">
        {children}
    </a>
);

export const GlassCard = ({ children, className }) => (
    <div className={`glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 ${className}`}>
        {children}
    </div>
);

export const useScrollReveal = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);
    const style = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
    };
    return [ref, style];
};

export const SectionTitle = ({ subtitle, title, description }) => {
    const [ref, style] = useScrollReveal();
    return (
        <div ref={ref} style={style} className="text-center max-w-3xl mx-auto">
            <h2 className="text-base font-semibold leading-7 text-green-400 font-mono">{subtitle}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-orbitron">{title}</p>
            <p className="mt-6 text-lg leading-8 text-gray-400">{description}</p>
        </div>
    );
};

export const ThreeJSBackground = () => {
    const mountRef = useRef(null);
    useEffect(() => {
        let THREE;
        let animationFrameId;
        const initializeScene = () => {
            if (!mountRef.current || !THREE) return;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            // --- MODIFICA: Camera più vicina per un effetto più grande ---
            camera.position.z = 4.5;
            
            const renderer = new THREE.WebGLRenderer({ canvas: mountRef.current, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            
            const group = new THREE.Group();
            scene.add(group);
            
            // --- MODIFICA: Toroidale più grande e con l'effetto "cavo" (wireframe) che ti piaceva ---
            const torusGeometry = new THREE.TorusGeometry(2.2, 0.7, 24, 128);
            const torusMaterial = new THREE.MeshStandardMaterial({ 
                color: 0x915eff, // Viola
                roughness: 0.2,
                metalness: 0.8,
                wireframe: true, // <-- L'effetto "cavo"
                transparent: true,
                opacity: 0.35 // Leggermente più visibile
            });
            const mainTorus = new THREE.Mesh(torusGeometry, torusMaterial);
            group.add(mainTorus);

            // --- MODIFICA: Più particelle e più sparse per un look più ricco ---
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 7000;
            const posArray = new Float32Array(particlesCount * 3);
            for (let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 15;
            }
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.008,
                color: 0x00f2ea // Ciano
            });
            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            group.add(particlesMesh);

            const pointLight = new THREE.PointLight(0xffffff, 300, 100);
            pointLight.position.set(5, 5, 5);
            scene.add(pointLight);
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
            scene.add(ambientLight);

            let mouseX = 0;
            const onMouseMove = (event) => { mouseX = event.clientX; };
            document.addEventListener('mousemove', onMouseMove);

            const clock = new THREE.Clock();
            const animate = () => {
                animationFrameId = requestAnimationFrame(animate);
                if(!group || !renderer) return;
                const elapsedTime = clock.getElapsedTime();
                group.rotation.y = .2 * elapsedTime;
                group.rotation.y += .5 * (mouseX / window.innerWidth - 0.5); // Animazione con il mouse
                renderer.render(scene, camera);
            };
            animate();

            const onResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };
            window.addEventListener('resize', onResize);

            return () => {
                window.removeEventListener('resize', onResize);
                document.removeEventListener('mousemove', onMouseMove);
                cancelAnimationFrame(animationFrameId);
            };
        };

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.async = true;
        script.onload = () => { THREE = window.THREE; initializeScene(); };
        document.body.appendChild(script);
        return () => { if (script.parentNode) document.body.removeChild(script); };
    }, []);
    return <canvas ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};
