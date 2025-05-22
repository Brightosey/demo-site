import "./CollectionPage.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import livingroom1 from "../../assets/Images/livingroom1.jpg";
import livingroom2 from "../../assets/Images/livingroom2.jpg";
import livingroom3 from "../../assets/Images/livingroom3.jpg";
import livingroom4 from "../../assets/Images/livingroom4.jpg";
import kitchen1 from "../../assets/Images/kitchen1.jpg";
import kitchen2 from "../../assets/Images/kitchen2.jpg";
import kitchen3 from "../../assets/Images/kitchen3.jpg";
import kitchen4 from "../../assets/Images/kitchen4.jpg";
import decoration1 from "../../assets/Images/decoration1.jpg";
import decoration2 from "../../assets/Images/decoration2.jpg";
import decoration3 from "../../assets/Images/decoration3.jpg";
import decoration4 from "../../assets/Images/decoration4.jpg";

function CollectionPage() {
  const sections = [
    {
      name: "Best of",
      images: [
        livingroom1,
        kitchen4,
        decoration3,
        kitchen3,
        livingroom2,
        decoration2,
        kitchen1,
        livingroom4,
      ],
    },
    {
      name: "Living room",
      images: [livingroom1, livingroom2, livingroom3, livingroom4],
    },
    {
      name: "Kitchen",
      images: [kitchen1, kitchen2, kitchen3, kitchen4],
    },
    {
      name: "Decoration",
      images: [decoration1, decoration2, decoration3, decoration4],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <section className="collection">
      <article className="collection__intro">
        <h1 className="collection__title">Our Collection</h1>
        <div className="collection__breadcrumbs">
          <Link to="/" className="collection__link">
            Home
          </Link>
          <span className="collection__separator"> / </span>
          <a
            href="#collection"
            className="collection__link collection__link--active"
          >
            Collection
          </a>
        </div>
      </article>

      <article className="collection__content">
        <div className="collection__tabs">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(activeIndex === index ? null : index);
                setShowAnimation(!showAnimation);
              }}
              className={`collection__tab ${
                index === activeIndex ? "collection__tab--active" : ""
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>

        <div className="collection__images">
          {activeIndex !== null &&
            sections[activeIndex]?.images.map((img, idx) => (
              <img
                src={img}
                alt={`collection-${idx}`}
                key={idx}
                className="collection__image"
              />
            ))}
        </div>
      </article>
    </section>
  );
}

export default CollectionPage;
