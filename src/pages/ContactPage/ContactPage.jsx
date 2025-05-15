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

  function handleSubject(event) {
    setSubject(event.target.value);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handlePhone(event) {
    setPhone(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleMessage(event) {
    setMessage(event.target.value);
  }

  const handleChange = (event) => {
    setCaptchaValue(event.target.value);
  };

  const refreshCaptcha = () => {
    const timestamp = new Date().getTime();
    setCaptchaImgUrl(`/captcha.png?${timestamp}`);
  };

  function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isPhoneValid(phone) {
    const regex = /^\+?[0-9\s\-()]{7,15}$/;
    return regex.test(phone);
  }

  function isFormValid() {
    return (
      subject && name && message && isEmailValid(email) && isPhoneValid(phone)
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isEmailValid(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!isPhoneValid(phone)) {
      alert("Please enter a valid phone number");
      return;
    }
    if (!captchaValue) {
      alert("Please enter the captcha value.");
      return;

      alert(`Entered Captcha: ${captchaValue}`);
    }
  }

  return (
    <section className="contact">
      <article className="contact__intro">
        <h1 className="contact__title">Our contact</h1>
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

      <article>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="subject"
              value={subject}
              placeholder="Subject"
              onChange={handleSubject}
              required
            />
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={handleName}
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="phone"
              value={phone}
              placeholder="Phone"
              onChange={handlePhone}
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleEmail}
              required
            />
          </div>
          <textarea
            name="message"
            value={message}
            type="text"
            onChange={handleMessage}
            required
          ></textarea>
          <div>
            <div>
              <label>
                <input type="checkbox" id="optInCheckbox" />
                <Link to="/policy">
                  I have read and understand the privacy policy.
                </Link>
              </label>
              <div>
                <input
                  type="text"
                  id="captcha"
                  value={captchaValue}
                  placeholder="Captcha"
                  onChange={handleChange}
                  required
                />
                <img src={Refresh} alt="refresh" />
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default ContactPage;
