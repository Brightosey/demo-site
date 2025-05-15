import "./ContactPage.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Refresh from "../../assets/Icon/refresh.png";

function ContactPage() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaImgUrl, setCaptchaImgUrl] = useState("/captcha.png");

  function handleSubmit(event) {
    event.preventDefault();

    if (!isEmailValid(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isPhoneValid(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (!captchaValue) {
      alert("Please enter the captcha.");
      return;
    }

    alert("Form submitted successfully!");
  }

  const refreshCaptcha = () => {
    const timestamp = new Date().getTime();
    setCaptchaImgUrl(`/captcha.png?${timestamp}`);
  };

  function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isPhoneValid(phone) {
    return /^\+?[0-9\s\-()]{7,15}$/.test(phone);
  }

  return (
    <section className="contact">
      <article className="contact__intro">
        <h1 className="contact__title">Our Contact</h1>
        <div className="contact__breadcrumbs">
          <Link to="/" className="contact__link">
            Home
          </Link>
          <strong className="contact__separator"> / </strong>
          <a href="#contact" className="contact__link contact__link--active">
            contact
          </a>
        </div>
      </article>

      <article className="contact__form-wrapper">
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__row">
            <input
              className="contact__input"
              type="text"
              name="subject"
              value={subject}
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <input
              className="contact__input"
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="contact__row">
            <input
              className="contact__input"
              type="text"
              name="phone"
              value={phone}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              className="contact__input"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <textarea
            className="contact__textarea"
            name="message"
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <div className="contact__row">
            <div className="contact__captcha-row">
            <label className="contact__checkbox">
              <input type="checkbox" required />
              <span>
                I have read and understand the{" "}
                <Link to="/policy">privacy policy</Link>.
              </span>
            </label>

            <div className="contact__captcha">
              <input
                type="text"
                placeholder="Captcha"
                value={captchaValue}
                onChange={(e) => setCaptchaValue(e.target.value)}
                required
                className="contact__input1"
              />
              <img
                src={Refresh}
                alt="captcha"
                onClick={refreshCaptcha}
                className="contact__refresh"
                title="Click to refresh"
              />
            </div>
            </div>

            <button type="submit" className="contact__submit">
              Submit
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default ContactPage;
