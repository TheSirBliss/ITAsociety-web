import React, { useState, useEffect, useRef } from 'react';

export const Logo = () => (
    <a href="#" className="font-orbitron font-bold text-2xl tracking-tighter text-white">
        ITA<span className="text-primary">Society</span>
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
        const reveal = async () => {
            const sr = (await import('scrollreveal')).default;
            if (ref.current) {
                sr().reveal(ref.current, {
                    origin: 'bottom',
                    distance: '50px',
                    duration: 800,
                    easing: 'ease-in-out',
                    reset: false
                });
            }
        };
        reveal();
    }, []);
    return ref;
};
