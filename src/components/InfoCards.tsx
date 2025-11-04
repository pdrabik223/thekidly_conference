import type React from 'react';



export const InfoCards: React.FC<{}> = () => {

  return <section id="features" className="feature-section">
    <div className="feature-container">
      {/* First feature - Image on left, text on right */}
      <div className="feature-item">
        <div className="feature-image">
          <img src="/placeholder1.jpg" alt="Keynote Speakers" />
        </div>
        <div className="feature-content">
          <h2>Prelegenci światowej klasy</h2>
          <p>Zainspiruj się liderami branży i wizjonerami, którzy kształtują przyszłość technologii. Nasi prelegenci dzielą się unikalnymi spostrzeżeniami i doświadczeniem.</p>
          <a href="/speakers" className="feature-button">Poznaj prelegentów</a>
        </div>
      </div>

      {/* Second feature - Image on right, text on left */}
      <div className="feature-item reverse">
        <div className="feature-image">
          <img src="/placeholder2.jpg" alt="Interactive Workshops" />
        </div>
        <div className="feature-content">
          <h2>Warsztaty praktyczne</h2>
          <p>Weź udział w praktycznych sesjach, podczas których zdobędziesz nowe umiejętności, przetestujesz nowoczesne technologie i będziesz współpracować z innymi deweloperami.</p>
          <a href="/workshops" className="feature-button">Zobacz warsztaty</a>
        </div>
      </div>

      {/* Third feature - Image on left, text on right */}
      <div className="feature-item">
        <div className="feature-image">
          <img src="/placeholder3.jpg" alt="Networking Events" />
        </div>
        <div className="feature-content">
          <h2>Możliwości networkingu</h2>
          <p>Nawiąż kontakty z rówieśnikami, mentorami i profesjonalistami z branży w naszych przestrzeniach do networkingu. Buduj relacje, które przetrwają konferencję.</p>
          <a href="/networking" className="feature-button">Zobacz wydarzenia</a>
        </div>
      </div>
    </div>
  </section>;
};
