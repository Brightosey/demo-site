import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import facebook from "../../assets/Icon/facebook.png";
import instagram from "../../assets/Icon/instagram.png";
import twitter from "../../assets/Icon/twitter.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="header" id="header">
      <div className="header__logo">
        <Link to="/" className="header__Link">
          <h1 className="header__title">HANDMADE</h1>
        </Link>
      </div>

      <div className="header__menu-container">
        <button className="header__menu-toggle" onClick={toggleMenu}>
          {isOpen ? (
            <X className="header__icon" />
          ) : (
            <Menu className="header__icon" />
          )}
        </button>

        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
          <ul className="header__list">
            {[
              "/",
              "/about",
              "/collection",
              "/production",
              "/faq",
              "/contact",
            ].map((route, i) => (
              <li key={i} onClick={() => setIsOpen(false)}>
                <NavLink to={route} className="header__item">
                  {route === "/"
                    ? "HOME"
                    : route.replace("/", "").toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isOpen && <div className="header__overlay"></div>}

      <div className="header__socials">
        <a href="https://www.facebook.com" target="_blank">
          <img src={facebook} alt="facebook" className="header__socials-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img
            src={instagram}
            alt="instagram"
            className="header__socials-icon"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <img src={twitter} alt="twitter" className="header__socials-icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
