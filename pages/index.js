import React from 'react';
import {
  HeroSection,
  ServicesSection,
  InnovationsSection, // <-- Assicurati che sia importato
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
      <InnovationsSection /> {/* <-- E che sia renderizzato qui */}
      <TeamSection />
      <ContactSection />
    </>
  );
}
