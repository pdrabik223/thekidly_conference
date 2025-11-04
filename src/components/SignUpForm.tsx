import React from 'react';
import './SignUpForm.css';

export const SignUpForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    school: '',
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
              <label>Uczelnia</label>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange} />
            </div>
            {/* <div className="form-group">
              <label className="required-field">Experience Level</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner (0-2 years)</option>
                <option value="intermediate">Intermediate (3-5 years)</option>
                <option value="advanced">Advanced (5-10 years)</option>
                <option value="expert">Expert (10+ years)</option>
              </select>
            </div> */}

          </div>
          <button type="submit" className="submit-button">
            Zarejestruj się
          </button>
        </form>
      </div>
    </section>
  );
};
