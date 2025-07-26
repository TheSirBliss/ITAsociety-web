import React, { useEffect } from 'react';
import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';

// NOTA STRATEGICA: ThreeJSBackground è stato rimosso da qui.
// L'animazione 3D verrà gestita direttamente all'interno delle sezioni
// pertinenti (come la HeroSection) per creare un'esperienza più
// integrata e visivamente coesa, risolvendo il problema della
// disconnessione tra sfondo e contenuto.

export const Layout = ({ children }) => {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = "https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700&family=Orbitron:wght@500;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    return () => {
      if (document.head.contains(fontLink)) {
        document.head.removeChild(fontLink);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" /> 
        <title>ITAsociety | AI-Powered Problem Solving & Innovation</title>
        <meta name="description" content="Trasformiamo problemi complessi in vantaggi competitivi attraverso AI e architetture software d'avanguardia. L'intelligenza artificiale al servizio dell'uomo." />
        <meta name="keywords" content="Intelligenza Artificiale, Sviluppo Software, Architettura Software, Problem Solving, Innovazione, ITAsociety, Automotive AI, Realtà Virtuale, VR" />
        <meta name="author" content="ITAsociety" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://it-asociety-web.vercel.app/" />
        <meta property="og:title" content="ITAsociety | Il Futuro è una Sfida. Noi la Risolviamo." />
        <meta property="og:description" content="Siamo un collettivo di problem solver con un'ossessione per l'innovazione. Trasformiamo problemi complessi in vantaggi competitivi attraverso AI, VR e architetture software d'avanguardia." />
        <meta property="og:image" content="https://storage.googleapis.com/files.alkymi.cloud/itasociety_social_preview.png" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://it-asociety-web.vercel.app/" />
        <meta property="twitter:title" content="ITAsociety | Il Futuro è una Sfida. Noi la Risolviamo." />
        <meta property="twitter:description" content="Siamo un collettivo di problem solver con un'ossessione per l'innovazione. Trasformiamo problemi complessi in vantaggi competitivi attraverso AI, VR e architetture software d'avanguardia." />
        <meta property="twitter:image" content="https://storage.googleapis.com/files.alkymi.cloud/itasociety_social_preview.png" />
      </Head>
      
      {/* Il wrapper non è più necessario perché lo sfondo non è più globale */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
