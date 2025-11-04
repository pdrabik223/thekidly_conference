import type React from 'react';
import './ScheduleSection.css';

export const ScheduleSection: React.FC = () => {
  const scheduleItems = [
    {
      time: "16:00",
      title: "Otwarcie konferencji",
      description: "Przywitanie gości oraz zakreślenie skali problemu"
    },
    {
      time: "16:30",
      title: "Oficjalne ogłoszenie współpracy",
      description: "Podpisanie listu intencjonalnego"
    },
    {
      time: "17:00",
      title: "Jak technologia może leczyć dzieci",
      description: "Przedstawienie rozwiązań wspierających szkołę i rodzica w monitorowaniu rozwoju dzieci"
    },
    {
      time: "17:30",
      title: "Przedstawienie projektu XX",
      description: "Zakres działań oraz współpracy między TheKidly a placówkami"
    },
    {
      time: "18:00",
      title: "Sekcja QaA oraz zapisy do projektu",
      description: "Warsztaty praktyczne w różnych obszarach technologicznych"
    },
    {
      time: "18:30",
      title: "Zakończenie konferencji",
      description: "Podziękowanie za uwagę i obecność"
    }

  ];

  return (
    <section id="schedule" className="schedule-section">
      <div className="schedule-container">
        <h2>Program konferencji</h2>
        <p className="schedule-intro">Dołącz do nas na pełen wydarzeń dzień nauki i networkingu</p>
        <div className="schedule-grid">
          {scheduleItems.map((item, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-time">{item.time}</div>
              <div className="schedule-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
