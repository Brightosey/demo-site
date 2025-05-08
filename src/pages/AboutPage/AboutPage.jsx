import "./AboutPage.scss";
import couch from "../../assets/Images/wood-7.jpg";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function AboutPage() {
  const statsData = [
    { label: "PROJECTS", value: 138 },
    { label: "HOURS WORKED", value: 678 },
    { label: "HAPPY CLIENTS", value: 247 },
    { label: "AWARDS", value: 48 },
    { label: "CUSTOMERS", value: 426 },
    { label: "PARTNERS", value: 26 },
  ];

  const staff = [
    { name: "JOHN SMITH", position: "CEO & Designer" },
    { name: "RITA TURNER", position: "Office Management" },
    { name: "ROGER FITZ", position: "Designer" },
    { name: "LAURA DAVIS", position: "Marketing" },
    { name: "MATT WARD", position: "Constructor" },
    { name: "HANNAH LEE", position: "Marketing" },
  ];

  return (
    <section className="about">
      <article className="about__intro">
        <h1 className="about__title">About Handmade</h1>
        <div className="about__breadcrumbs">
          <Link to="/" className="about__link">Home</Link>
          <strong> / </strong>
          <a href="#about" className="about__link about__link--about">About Us</a>
        </div>
      </article>

      <article className="about__overview">
        <div id="about" className="about__text">
          <h2 className="about__subtitle">We create sustainable furniture</h2>
          <p className="about__description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
        </div>
        <figure className="about__image-wrapper">
          <img src={couch} alt="couch" className="about__image" />
        </figure>
      </article>

      <article className="about__stats">
        {statsData.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.3,
          });

          return (
            <div ref={ref} key={index} className="about__stat">
              {inView && (
                <CountUp
                  className="about__count"
                  start={0}
                  end={item.value}
                  duration={1}
                  delay={0.2}
                />
              )}
              <p className="about__label">{item.label}</p>
            </div>
          );
        })}
      </article>

      <article className="about__team">
        {staff.map((item, index) => (
          <div key={index} className={`about__member about__member-${index}`}>
            <div className="about__container">
            <p className="about__member-name">{item.name}</p>
            <p className="about__member-role">{item.position}</p>
            </div>
          </div>
        ))}
      </article>

      <article className="about__cta">
        <div className="about__cta-container">
        <h3 className="about__cta-heading">
          Can’t find what you’re looking for?
        </h3>
        <div className="about__cta-links">
        <Link to="/contact" className="about__cta-link">
          Contact us now!
        </Link>
        </div>
        </div>
      </article>
    </section>
  );
}

export default AboutPage;
