import React from 'react';
import './MainCarousel.css';

export const MainCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + 3) % 3);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % 3);
  };

  const slides = [
    {
      title: "Zdrowe dzieci - Zdrowa przyszłość",
      description: "Tematyka konferencji obejmuje zagrożenia zdrowotne oraz choroby cywilizacyjne, które dotyczą dzieci w wieku przedszkolnym i szkolnym",
      backgroundImagePath: "public/baner strona modułowa nabieraMYodwagi.jpg.webp",
      buttonText: "Więcej informacji",
      buttonLink: "https://www.umw.edu.pl/pl/nabieramy-odwagi"
    },
    {
      title: "Darmowe badania przesiewowe",
      description: "Szkoły i przedszkola uczestniczące w konferencji  będą miały możliwość zapisania się do programu badań przesiewowych wad postawy, przeprowadzanych przez fizjoterapeutów w zgłoszonych placówkach",
      backgroundImagePath: null,
      buttonText: "Więcej informacji",
      buttonLink: "https://thekidly.com/wp-content/uploads/2024/05/Zgoda-rodzica-na-badanie.pdf"
    },
    {
      title: "Współpraca z firmami",
      description: "Podczas wydarzenia zaprezentowane zostaną również innowacyjne rozwiązania wspierające rodziców w samodzielnym monitorowaniu rozwoju i stanu zdrowia dziecka",
      backgroundImagePath: "public/baner strona modułowa nabieraMYodwagi.jpg.webp",
      buttonText: "Więcej informacji",
      buttonLink: "https://thekidly.com/"
    },


  ];

  return (
    <div className="carousel">
      <button
        className="carousel-arrow prev"
        onClick={handlePrevSlide}
        aria-label="Poprzedni slajd" />
      <button
        className="carousel-arrow next"
        onClick={handleNextSlide}
        aria-label="Następny slajd" />
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide slide${index + 1}`}
          style={{ transform: `translateX(${(index - activeSlide) * 100}%)` }}
        >
          {/* {slide.backgroundImagePath != null ? <img
            src={slide.backgroundImagePath} alt="BackgroundImg"

          ></img> : undefined} */}
          <div className="carousel-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button onClick={() => window.location.href = slide.buttonLink}>
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)} />
        ))}
      </div>
    </div>
  );
};
