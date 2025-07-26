import React from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';

/**
 * File principale dell'applicazione Next.js.
 * - Importa gli stili globali da `globals.css`.
 * - Utilizza un componente `Layout` per avvolgere tutte le pagine,
 * garantendo che Header e Footer siano presenti ovunque.
 * @param {object} props - Le props fornite da Next.js.
 * @param {React.Component} props.Component - Il componente della pagina attiva.
 * @param {object} props.pageProps - Le props iniziali per la pagina.
 */
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
