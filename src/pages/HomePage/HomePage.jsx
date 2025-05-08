import "./HomePage.scss";
import { Link } from "react-router-dom";
import Image1 from "../../assets/Images/wood-1.jpg";
import Image5 from "../../assets/Images/wood-5.jpg";
import Contact from "../../Components/Contact/Contact";

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
          <p className="home__gallery-label">Collection</p>
        </div>
        <div className="home__gallery-card2">
          <p className="home__gallery-label">Product</p>
        </div>
        <div className="home__gallery-card3">
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
    </section>
  );
}

export default HomePage;
