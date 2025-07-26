import React, { useState, useEffect, useRef } from 'react';

export const Logo = () => (
    <a href="#" className="font-orbitron font-bold text-2xl tracking-tighter text-white">
        ITA<span style={{color: 'var(--primary-color)'}}>Society</span>
    </a>
);

export const CTAButton = ({ children, href = "#" }) => (
    <a href={href} className="cta-button">
        {children}
    </a>
);

export const useScrollReveal = () => {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                observer.unobserve(element);
            }
        }, { threshold: 0.1 });
        observer.observe(element);
        return () => { if (element) observer.unobserve(element); };
    }, []);
    const style = {
        opacity: '0',
        transform: 'translateY(50px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
    };
    return [ref, style];
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
            camera.position.z = 5;
            const renderer = new THREE.WebGLRenderer({ canvas: mountRef.current, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            const group = new THREE.Group();
            scene.add(group);

            const torusGeometry = new THREE.TorusGeometry(1.5, 0.4, 16, 100);
            const torusMaterial = new THREE.MeshStandardMaterial({ color: 0x915eff, roughness: 0.2, metalness: 0.8, wireframe: true });
            const mainTorus = new THREE.Mesh(torusGeometry, torusMaterial);
            group.add(mainTorus);

            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 5000;
            const posArray = new Float32Array(particlesCount * 3);
            for (let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 10;
            }
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particlesMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0x00f2ea });
            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            group.add(particlesMesh);

            const pointLight = new THREE.PointLight(0xffffff, 300, 100);
            pointLight.position.set(5, 5, 5);
            scene.add(pointLight);

            let scrollY = window.scrollY;
            const handleScroll = () => { scrollY = window.scrollY; };
            window.addEventListener('scroll', handleScroll);

            const clock = new THREE.Clock();
            const animate = () => {
                animationFrameId = requestAnimationFrame(animate);
                const elapsedTime = clock.getElapsedTime();
                group.rotation.y = .2 * elapsedTime;
                group.position.y = -scrollY * 0.002; // Il gruppo segue lo scroll
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
                window.removeEventListener('scroll', handleScroll);
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
    return <canvas ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};
