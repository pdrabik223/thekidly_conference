import type React from 'react';
import './components/FeatureSection.css';
import { MainCarousel } from './components/MainCarousel';
import { PartnersRow } from './components/PartnersRow';
import { ScheduleSection } from './components/ScheduleSection';
import { SignUpForm } from './components/SignUpForm';
import { VenueSection } from './components/VenueSection';
import { InfoCards } from './components/InfoCards';
import { FullScreenOverlay } from './components/FullScreenOverlay';

export const MainPage: React.FC<{}> = () => {
  return (
    <main>

      <FullScreenOverlay show={false} >
        <div style={{ marginBottom: '0px', height: '200px', backgroundColor: 'red' }}>
          <h1 style={{ margin: 'none', textAlign: 'center' }}>Zaakceptuj rodo zanim wejdziesz</h1>
        </div>
      </FullScreenOverlay>

      <section id="home">
        <MainCarousel />
      </section>
      
      <h1 style={{ textAlign: 'center' }}>Podczas konferencji oferujemy możliwość zapisów na nasze darmowe programy</h1>
      <p style={{ textAlign: 'center' }}> Uczestnictwo w programach jest darmowe i dobrowolne, zapisy do programów możliwe są wyłącznie pod zas konferencji</p>
      <InfoCards />
      <VenueSection />
      <ScheduleSection />
      <SignUpForm />
      <PartnersRow />
    </main>
  );
};


