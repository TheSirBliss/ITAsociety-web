import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head'; // Importiamo Head per la SEO

export const ContactSection = () => {
    const [ref, style] = useScrollReveal();
    return (
        <section id="contatti" className="py-20 sm:py-28">
            <div ref={ref} style={style} className="container mx-auto px-4">
                <div className="contact-layout max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl">
                    <div className="contact-info text-center md:text-left">
                        <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">Hai una sfida per noi?</h3>
                        <p className="text-gray-400 leading-relaxed">
                            I progetti standard non ci bastano. Siamo specializzati in soluzioni su misura per problemi non convenzionali. Se hai un'idea ambiziosa o una sfida tecnologica che altri non sanno come affrontare, siamo il partner che stai cercando.
                        </p>
                    </div>
                    <div className="contact-form">
                        {/* Sostituisci l'URL con il tuo endpoint di Formspree */}
                        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                            <input className="w-full p-3 mb-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500" type="text" name="name" placeholder="Il tuo nome" required />
                            <input className="w-full p-3 mb-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500" type="email" name="email" placeholder="La tua email" required />
                            <textarea className="w-full p-3 mb-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500" name="message" rows="4" placeholder="Descrivi la tua sfida..." required></textarea>
                            <button type="submit" className="cta-button w-full">Invia la Richiesta</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
