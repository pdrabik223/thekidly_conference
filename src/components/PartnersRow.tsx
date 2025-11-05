import type React from 'react';
import './PartnersRow.css';





export const PartnersRow: React.FC = () => {
  const partners = [
    { name: "Kidstation", logo: "public\\logo-kidstation.webp", url: 'https://kidstation.pl/' },
    { name: "TheKIdly", logo: "public\\logo_the_kidly.png", url: 'https://thekidly.com/' },
    { name: "Decatlon", logo: "public\\decatlon.svg", url: 'https://www.decathlon.pl/' },
    // { name: "Future Systems", logo: "/partner3.png" },
    // { name: "Digital Solutions", logo: "/partner4.png" },
    // { name: "Cloud Services", logo: "/partner5.png" },
    // { name: "Dev Tools Inc", logo: "/partner6.png" },
    // { name: "AI Research", logo: "/partner7.png" },
    // { name: "Smart Tech", logo: "/partner8.png" }
  ];

  // Double the partners array to create seamless scrolling
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="partners-section">
      <div className="partners-header">
        <h2>Nasi partnerzy</h2>
        <p>Wspierają nas liderzy branży</p>
      </div>
      <div className="logo-scroll-container">
        <div className="logo-scroll">
          <div className="logo-scroll-inner">
            {doubledPartners.map((partner, index) => (
              <div key={index} className="partner-logo">
                {/* Fallback to showing partner name if image fails to load */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.textContent = partner.name;
                  }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
