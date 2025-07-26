import React from 'react';
import {
  HeroSection,
  ServicesSection,
  TeamSection,
} from '../components/HomePageSections';
import { ContactSection } from '../components/ContactSection'; // <-- IMPORT AGGIORNATO

/**
 * Componente per la pagina principale (Homepage).
 * Assembla le varie sezioni importate per costruire la pagina.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
