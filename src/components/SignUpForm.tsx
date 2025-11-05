import React from 'react';
import './SignUpForm.css';

async function subscribeToNewsletter(email: string) {
  const apiUrl = "https://api.buttondown.email/v1/subscribers";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        // ❗ Replace YOUR_API_KEY below with your actual Buttondown API key

        "Authorization": "Token YOUR_API_KEY"
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Subscription failed:", errorData);
      alert("Subscription failed: " + (errorData.detail || "Unknown error"));
      return;
    }

    const data = await response.json();
    console.log("Successfully subscribed:", data);
    alert("🎉 Thanks for subscribing!");

  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong. Please try again later.");
  }
}

export const SignUpForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    institutionType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (name: string, value: string) => {
    // const { name, value } = e.target;
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
        <form className="signup-form"
          action="https://buttondown.com/api/emails/embed-subscribe/thekidly_conference"
          method="post"

        >
          <div className="form-grid">
            <div className="form-group">
              <label className="required-field">Imię</label>
              <input
                type="text"
                name="metadata__first-firstName"
                value={formData.firstName}
                onChange={(v) => handleChange('firstName', v.target.value)}
                required />
            </div>
            <div className="form-group">
              <label className="required-field">Nazwisko</label>
              <input
                type="text"
                name="metadata__last-lastName"
                value={formData.lastName}
                onChange={(v) => handleChange('lastName', v.target.value)}
                required />
            </div>
            <div className="form-group">
              <label className="required-field">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(v) => handleChange('email', v.target.value)}
                required />
            </div>
            <div className="form-group">
              <label className="required-field">Adres placówki</label>
              <input
                type="text"
                name="metadata__address-address"
                value={formData.address}
                onChange={(v) => handleChange('address', v.target.value)} />
            </div>
            <div className="form-group">
              <label className="required-field">Rodzaj placówki</label>
              <select
                name="metadata__institution-institutionType"
                value={formData.institutionType}
                onChange={(v) => handleChange('institutionType', v.target.value)}
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
