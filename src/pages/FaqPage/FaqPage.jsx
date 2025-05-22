import "./FaqPage.scss";
import { Link } from "react-router-dom";
import { Plus, X } from "lucide-react";
import { useState } from "react";

function FaqPage() {
  const [activeFurniture, setActiveFuniture] = useState(null);
  const [activePayment, setActivePayment] = useState(null);
  const [activeGeneral, setActiveGeneral] = useState(null);

  const furnitureQuestions = [
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
  ];

  const paymentQuestions = [
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
  ];

  const generalQuestions = [
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
    {
      title: "Headline",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam.",
    },
  ];

 /*  function toggleSection(index, activeIndex, setActiveIndex) {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  } */

  return (
    <section className="faq">
      <article className="faq__intro">
        <h1 className="faq__title">Any questions?</h1>
        <div className="faq__breadcrumbs">
          <Link to="/" className="faq__link">
            Home
          </Link>
          <strong className="faq__separator"> / </strong>
          <a href="#faq" className="faq__link faq__link--active">
            faq
          </a>
        </div>
      </article>

      {/* Furniture Section */}
      <article className="faq__section">
        <h2 className="faq__section-title">Furniture Information</h2>
        {furnitureQuestions.map((item, index) => {
          const isOpen = index === activeFurniture;
          return (
            <div key={index} className="faq__item">
              <div
                className="faq__header"
                onClick={() =>
                  setActiveFuniture(activeFurniture === index ? null : index)
                }
              >
                <h3 className="faq__question">{item.title}</h3>
                <span className="faq__icon">{isOpen ? <X /> : <Plus />}</span>
              </div>
              {isOpen && (
                <div className="faq__content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </article>

      {/* Payment Section */}
      <article className="faq__section">
        <h2 className="faq__section-title">Payment, Order & Return Policy</h2>
        {paymentQuestions.map((item, index) => {
          const isOpen = index === activePayment;
          return (
            <div key={index} className="faq__item">
              <div
                className="faq__header"
                onClick={() =>
                  setActivePayment(activePayment === index ? null : index)
                }
              >
                <h3 className="faq__question">{item.title}</h3>
                <span className="faq__icon">{isOpen ? <X /> : <Plus />}</span>
              </div>
              {isOpen && (
                <div className="faq__content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </article>

      {/* General Info Section */}
      <article className="faq__section">
        <h2 className="faq__section-title">General Information</h2>
        {generalQuestions.map((item, index) => {
          const isOpen = index === activeGeneral;
          return (
            <div key={index} className="faq__item">
              <div
                className="faq__header"
                onClick={() =>
                 setActiveGeneral(activeGeneral === index ? null : index)
                }
              >
                <h3 className="faq__question">{item.title}</h3>
                <span className="faq__icon">{isOpen ? <X /> : <Plus />}</span>
              </div>
              {isOpen && (
                <div className="faq__content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </article>

      {/* Contact Section */}
      <article className="faq__footer">
        <div className="faq__footer-container">
          <h3 className="faq__footer-title">
            Can’t find what you’re looking for?
          </h3>
          <div className="faq__footer-links">
            <Link to="/contact" className="faq__footer-link">
              Contact us now!
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}

export default FaqPage;
