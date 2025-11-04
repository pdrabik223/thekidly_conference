import React from 'react';
import './NavBar.css';

export const NavBar: React.FC<{}> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand" onClick={scrollToSection('home')}>Konferencja Tech</a>
      <button 
        className="menu-button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={scrollToSection('home')}>Start</a>
        <a href="#schedule" onClick={scrollToSection('schedule')}>Program</a>
        <a href="#register" onClick={scrollToSection('register')}>Rejestracja</a>
      </div>
    </nav>
  );
};
