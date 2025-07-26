import React from 'react';
import {
  HeroSection,
  ServicesSection,
  InnovationsSection, // <-- Aggiunta la sezione mancante
  TeamSection,
} from '../components/HomePageSections';
import { ContactSection } from '../components/ContactSection';

/**
 * Componente per la pagina principale (Homepage).
 * Assembla le varie sezioni importate per costruire la pagina.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <InnovationsSection /> {/* <-- Aggiunta la sezione mancante */}
      <TeamSection />
      <ContactSection />
    </>
  );
}
