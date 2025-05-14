import "./FaqPage.scss";
import { Link } from "react-router-dom";
import { Plus, X } from "lucide-react";
import { useState } from "react";

function FaqPage() {
const [activeFurniture, setActiveFuniture] = useState(null);
const [activePayment, setActivePayment] = useState(null);
const [activeGeneral, setActiveGeneral] = useState(null);

  const furnitureQuestions = [
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
  ];

  const paymentQuestions = [
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
  ];

  const generalQuestions = [
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
    { title: "Headline", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsum repellat minus nihil. Labore, delectus, nam dignissimos ea repudiandae minima voluptatum magni pariatur possimus quia accusamus harum facilis corporis animi nisi. Enim, pariatur, impedit quia repellat harum ipsam laboriosam voluptas dicta illum nisi obcaecati reprehenderit quis placeat recusandae tenetur aperiam." },
  ];

  function toggleSection (index, activeIndex, setActiveIndex) {
    if (index === activeIndex) {
        setActiveIndex(null);
    } else {
        setActiveIndex(index);
    }
  }

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

      <article>
        <h2>Furniture Information</h2>
        {furnitureQuestions.map((item,index) => {
            const isOpen = index === activeFurniture;

            return (
                <div key={index}>
                    <div onClick={() => toggleSection(index,activeFurniture, setActiveFuniture)}>
                        <h3>{item.title}</h3>
                        <p>{isOpen ? <X/> : <Plus/>}</p>
                    </div>
                    {isOpen && (
                        <div>
                            <p>{item.content}</p>
                        </div>
                    )};
                </div>
            );
        })}
        <div onClick={() => toggleSection(index, activeFurniture, setActiveFuniture)}></div>
      </article>

      <article>
        <h2>Payment, Order & Return Policy</h2>
      </article>

     
    </section>
  );
}

export default FaqPage;
