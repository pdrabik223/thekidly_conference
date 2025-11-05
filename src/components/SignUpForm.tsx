import React from 'react';
import './SignUpForm.css';

export const SignUpForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    institutionType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="register" className="signup-section">
      <div className="signup-container">
        <div className="signup-header">
          <h2>Zarejestruj się na konferencję</h2>
          <p>Zabezpiecz swoje miejsce na najbardziej oczekiwanej konferencji technicznej roku</p>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="required-field">Imię</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required />
            </div>
            <div className="form-group">
              <label className="required-field">Nazwisko</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required />
            </div>
            <div className="form-group">
              <label className="required-field">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required />
            </div>
            <div className="form-group">
              <label className="required-field">Adres placówki</label>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="required-field">Rodzaj placówki</label>
              <select
                name="institutionType"
                value={formData.institutionType}
                onChange={handleChange}
              >
                <option value="">Wybierz...</option>
                <option value="szkola">Szkoła</option>
                <option value="przedszkole">Przedszkole</option>
                <option value="oba">Oba</option>
              </select>
            </div>
           
          </div>
          <button type="submit" className="submit-button">
            Zarejestruj się
          </button>
        </form>
      </div>
    </section>
  );
};
