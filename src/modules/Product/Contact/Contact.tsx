import React from "react";

import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <h1 className="title">Свяжитесь с нами</h1>
      <p className="description">
        Если у вас есть какие-либо вопросы, не стесняйтесь обращаться к нам, используя форму ниже:
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="label">ФИО:</label>
          <input type="text" id="name" name="name" className="input" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">Email:</label>
          <input type="email" id="email" name="email" className="input" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">Сообщение:</label>
          <textarea id="message" name="message" className="input" rows={4} required></textarea>
        </div>
        <button type="submit" className="submit-button">Отправить</button>
      </form>
    </div>
  );
}

export default Contact;
