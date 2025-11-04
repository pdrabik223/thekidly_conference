import React from 'react';
import './MainCarousel.css';

export const MainCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
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
      title: "Konferencja Tech 2025",
      description: "Dołącz do nas na trzy dni innowacji, nauki i networkingu z liderami branży",
      buttonText: "Kup bilety",
      buttonLink: "/tickets"
    },
    {
      title: "Prelegenci światowej klasy",
      description: "Ucz się od ponad 50 międzynarodowych ekspertów dzielących się wiedzą i doświadczeniem",
      buttonText: "Zobacz prelegentów",
      buttonLink: "/speakers"
    },
    {
      title: "Warsztaty praktyczne",
      description: "Sesje praktyczne, które pomogą Ci opanować najnowsze technologie i frameworki",
      buttonText: "Zobacz program",
      buttonLink: "/schedule"
    }
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
