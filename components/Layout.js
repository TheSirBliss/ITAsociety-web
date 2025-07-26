import React, { useEffect } from 'react';
import Head from 'next/head';
import { Header } from './Header'; // <-- IMPORT CORRETTO
import { Footer } from './Footer'; // <-- IMPORT CORRETTO

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
        <meta name="keywords" content="Intelligenza Artificiale, Sviluppo Software, Architettura Software, Problem Solving, Innovazione, ITAsociety, Automotive AI" />
        <meta name="author" content="ITAsociety" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itasociety.com/" />
        <meta property="og:title" content="ITAsociety | AI-Powered Problem Solving & Innovation" />
        <meta property="og:description" content="Il Futuro è una Sfida. Noi la Risolviamo." />
        <meta property="og:image" content="https://storage.googleapis.com/files.alkymi.cloud/itasociety_social_preview.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.itasociety.com/" />
        <meta property="twitter:title" content="ITAsociety | AI-Powered Problem Solving & Innovation" />
        <meta property="twitter:description" content="Il Futuro è una Sfida. Noi la Risolviamo." />
        <meta property="twitter:image" content="https://storage.googleapis.com/files.alkymi.cloud/itasociety_social_preview.png" />
      </Head>
      
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
