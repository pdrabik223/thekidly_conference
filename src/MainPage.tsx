import type React from 'react';
import './components/FeatureSection.css';
import { MainCarousel } from './components/MainCarousel';
import { PartnersRow } from './components/PartnersRow';
import { ScheduleSection } from './components/ScheduleSection';
import { SignUpForm } from './components/SignUpForm';
import { VenueSection } from './components/VenueSection';
import { InfoCards } from './components/InfoCards';

export const MainPage: React.FC<{}> = () => {
  return (
    <main>
      <section id="home">
        <MainCarousel />
      </section>
      <InfoCards/>
      <VenueSection />
      <ScheduleSection />
      <SignUpForm />
      <PartnersRow />
    </main>
  );
};


