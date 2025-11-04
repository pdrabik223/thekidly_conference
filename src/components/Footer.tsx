import type React from 'react';
import './Footer.css';

export const Footer: React.FC<{}> = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>O nas</h3>
          <p>Wiodąca konferencja technologiczna łącząca innowatorów, programistów i liderów branży.</p>
        </div>
        <div className="footer-section">
          <h3>Przydatne linki</h3>
          <p><a href="/schedule">Program konferencji</a></p>
          <p><a href="/speakers">Prelegenci</a></p>
          <p><a href="/venue">Informacje o miejscu</a></p>
          <p><a href="/faq">FAQ</a></p>
        </div>
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>E-mail: info@conference.com</p>
          <p>Telefon: +1 (555) 123-4567</p>
          <p>Adres: 123 Tech Street</p>
          <p>Miasto, ST 12345</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Konferencja Tech. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};
