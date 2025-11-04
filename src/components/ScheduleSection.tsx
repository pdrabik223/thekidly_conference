import type React from 'react';
import './ScheduleSection.css';

export const ScheduleSection: React.FC = () => {
  const scheduleItems = [
    {
      time: "9:00",
      title: "Rejestracja i śniadanie",
      description: "Zarejestruj się i skorzystaj z bezpłatnego śniadania"
    },
    {
      time: "10:00",
      title: "Wykład otwierający",
      description: "Przemówienie powitalne i wykład"
    },
    {
      time: "11:30",
      title: "Sesje techniczne",
      description: "Równoległe ścieżki obejmujące różne tematy"
    },
    {
      time: "13:00",
      title: "Przerwa na lunch",
      description: "Przerwa na lunch i networking"
    },
    {
      time: "14:00",
      title: "Warsztaty",
      description: "Warsztaty praktyczne w różnych obszarach technologicznych"
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
