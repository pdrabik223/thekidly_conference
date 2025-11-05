import type React from 'react';



export const InfoCards: React.FC<{}> = () => {

  return <section id="features" className="feature-section">
    <div className="feature-container">
      {/* First feature - Image on left, text on right */}
      <div className="feature-item">
        <div className="feature-image">
          <img src="/public\AdobeStock_142215477-e1584628508970.jpeg" alt="Keynote Speakers" />
        </div>
        <div className="feature-content">
          <h2>Przesiewowe badania postawy</h2>
          <p>Projekt obejmuje badania realizowane przez fizjoterapeutów przy wsparciu systemów sztucznej inteligencji, umożliwiających wczesne wykrycie wad postawy.</p>
          <a href="https://thekidly.com/wp-content/uploads/2024/05/Zgoda-rodzica-na-badanie.pdf" className="feature-button">Poznaj projekt badań przesiewowych</a>
        </div>
      </div>

      {/* Second feature - Image on right, text on left */}
      <div className="feature-item reverse">
        <div className="feature-image">
          <img src="/public\9.webp" alt="Interactive Workshops" />
        </div>
        <div className="feature-content">
          <h2>Zajęcia artystyczne i sportowe dla dzieci</h2>
          <p>Celem nie jest wychowanie mistrza. Celem jest wychowanie ludzi kochających aktywne i kreatywne spędzanie czasu.</p>
          <a href="/workshops" className="feature-button">Zobacz warsztaty</a>
        </div>
      </div>

      {/* Third feature - Image on left, text on right */}
      <div className="feature-item">
        <div className="feature-image">
          <img src="/public/studio-300x200.jpg" alt="Networking Events" />
        </div>
        <div className="feature-content">
          <h2>Zajęcia 25 Frames studio</h2>
          <p>Nawiąż kontakty z rówieśnikami, mentorami i profesjonalistami z branży w naszych przestrzeniach do networkingu. Buduj relacje, które przetrwają konferencję.</p>
          <a href="/networking" className="feature-button">Czytaj więcej o zajęciach</a>
        </div>
      </div>
    </div>
  </section>;
};
