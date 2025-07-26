import React from 'react';
import {
  HeroSection,
  MissionSection,
  ServicesSection,
  InnovationsSection,
  TeamSection,
} from '../components/HomePageSections';
import { ContactSection } from '../components/ContactSection';

/**
 * Componente per la pagina principale (Homepage).
 * Assembla tutte le sezioni importate per costruire la pagina completa.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <InnovationsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
