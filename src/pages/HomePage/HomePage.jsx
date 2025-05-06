import "./HomePage.scss";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Images/wood-1.jpg";
import Image2 from "../../assets/Images/wood-2.jpg";
import Image3 from "../../assets/Images/wood-3.jpg";
import Image4 from "../../assets/Images/wood-4.jpg";
import Image5 from "../../assets/Images/wood-5.jpg";
import pinIcon from "../../assets/Icon/pin.png";
import emailIcon from "../../assets/Icon/email.png";
import telepohoneIcon from "../../assets/Icon/telephone.png";
import facebook from "../../assets/Icon/facebook.png";
import instagram from "../../assets/Icon/instagram.png";
import twitter from "../../assets/Icon/twitter.png";

function HomePage() {
  return (
    <section className="home">
      <article className="home__hero">
        <div className="home__hero-text">
          <h1 className="home__hero-title">
            New <br /> Collections
          </h1>
          <p className="home__hero-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
          <button className="home__hero-button">
            <Link to="/collection" className="home__hero-link">
              Latest Collections
            </Link>
          </button>
        </div>
        <figure className="home__hero-image">
          <img src={Image1} alt="wood collection" className="home__hero-img" />
        </figure>
      </article>

      <article className="home__gallery">
        <div className="home__gallery-card1">
          {/* <img className="home__gallery-image" src={Image2} alt="image" /> */}
          <p className="home__gallery-label">Collection</p>
        </div>
        <div className="home__gallery-card2">
        {/*   <img  className="home__gallery-image" src={Image3} alt="image" /> */}
          <p className="home__gallery-label">Product</p>
        </div>
        <div className="home__gallery-card3">
          {/* <img  className="home__gallery-image" src={Image4} alt="image" /> */}
          <p className="home__gallery-label">Contact Us</p>
        </div>
      </article>

      <article className="home__discount">
        <figure className="home__discount-image">
          <img
            src={Image5}
            alt="discount banner"
            className="home__discount-img"
          />
        </figure>
        <div className="home__discount-text">
          <h1 className="home__discount-title">10% Discount</h1>
          <p className="home__discount-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes. Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes.
          </p>
          <button className="home__discount-button">
            <Link to="/contact" className="home__discount-link">
              Get Your Member Card
            </Link>
          </button>
        </div>
      </article>

      <article className="home__contact">
        <section className="home__contact-info">
          <div className="home__contact-fence">
            <div className="home__contact-block">
              <div className="home__contact-label">
                <img
                  src={pinIcon}
                  alt="location icon"
                  className="home__contact-icon"
                />
                <p className="home__contact-heading">Address</p>
              </div>
              <p className="home__contact-text">300 Alamo Plaza</p>
              <p className="home__contact-text">San Antonio, TX 78205</p>
            </div>

            <div className="home__contact-block">
              <div className="home__contact-label">
                <img
                  src={telepohoneIcon}
                  alt="telephone icon"
                  className="home__contact-icon"
                />
                <p className="home__contact-heading">Phone</p>
              </div>
              <p className="home__contact-text">Phone: +1-123-456-7890</p>
              <p className="home__contact-text">Mobile: +1-123-456-6789</p>
            </div>

            <div className="home__contact-block">
              <div className="home__contact-label">
                <img
                  src={emailIcon}
                  alt="email icon"
                  className="home__contact-icon"
                />
                <p className="home__contact-heading">Contact</p>
              </div>
              <p className="home__contact-text">handmade@example.com</p>
              <p className="home__contact-text">
                Legal Notice | Privacy Policy
              </p>
            </div>
          </div>

          <div className="home__contact-socials">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="home__social-link"
            >
              <img
                src={facebook}
                alt="facebook"
                className="home__social-icon"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="home__social-link"
            >
              <img
                src={instagram}
                alt="instagram"
                className="home__social-icon"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="home__social-link"
            >
              <img src={twitter} alt="twitter" className="home__social-icon" />
            </a>
          </div>
        </section>
      </article>
    </section>
  );
}

export default HomePage;
