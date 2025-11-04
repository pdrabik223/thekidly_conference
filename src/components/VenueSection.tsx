import type React from 'react';
import './VenueSection.css';

export const VenueSection: React.FC = () => {
    return (
        <section className="venue-section">
            <div className="venue-container">
                <div className="venue-info">
                            <h2>Miejsce konferencji</h2>
                    <div className="venue-details">
                        <div className="venue-detail-item">
                            <div className="venue-icon">📍</div>
                            <div className="venue-text">
                                        <h3>Gdzie?</h3>
                                        <p>Some fancy place</p>
                                        <p>123 Innovation Avenue</p>
                                        <p>Silicon Valley, CA 94025</p>
                            </div>
                        </div>
                        <div className="venue-detail-item">
                            <div className="venue-icon">🕒</div>
                            <div className="venue-text">
                                        <h3>Kiedy?</h3>
                                        <p>15–17 grudnia 2025</p>
                                        <p>16:00 - 18:00 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="venue-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6661457390284!2d-122.08374688469227!3d37.42199987982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x29cdf01a44fc687f!2sGooglePlex!5e0!3m2!1sen!2sus!4v1666666666666!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokalizacja miejsca konferencji"
                    />
                </div>
            </div>
        </section>
    );
};