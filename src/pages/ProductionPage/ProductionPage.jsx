import "./ProductionPage.scss";
import { Link } from "react-router-dom";
import carpenter1 from "../../assets/Images/carpenter1.jpg";
import carpenter2 from "../../assets/Images/carpenter2.jpg";

function ProductionPage() {
  return (
    <section className="production">
      <article className="production__intro">
        <h1 className="production__title">Our production</h1>
        <div className="production__breadcrumbs">
          <Link to="/" className="production__link">
            Home
          </Link>
          <strong className="production__separator"> / </strong>
          <a
            href="#production"
            className="production__link production__link--active"
          >
            production
          </a>
        </div>
      </article>

      <article className="production__description">
        <p className="production__paragraph">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu.
        </p>
      </article>

      <article>
        <div className="production__block">
          <div className="production__text">
            <h1 className="production__heading">10% Discount</h1>
            <p className="production__paragraph1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
              eos, voluptatem, et sequi distinctio adipisci omnis in error quas
              fuga tempore fugit incidunt quos.
            </p>
            <ul className="production__list">
              <li className="production__item">
                Atque, debitis architecto ducimus eligendi dignissimos
              </li>
              <li className="production__item">
                Atque, debitis architecto ducimus eligendi dignissimos
              </li>
              <li className="production__item">
                Fugit sit atque eaque dolorum autem reprehenderit
              </li>
              <li className="production__item">
                Porro omnis obcaecati laborum obcaecati
              </li>
              <li className="production__item">
                Laboriosam deserunt harum libero a voluptatem
              </li>
            </ul>
          </div>
          <figure className="production__figure">
            <img
              src={carpenter1}
              alt="carpenter"
              className="production__image"
            />
          </figure>
        </div>

        <div className="production__block">
          <div className="production__text">
            <h1 className="production__heading">Manufacturing</h1>
            <p className="production__paragraph1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
              eos, voluptatem, et sequi distinctio adipisci omnis in error quas
              fuga tempore fugit incidunt quos.
            </p>
            <ul className="production__list">
              <li className="production__item">
                Atque, debitis architecto ducimus eligendi dignissimos
              </li>
              <li className="production__item">
                Modi ut non officiis repudiandae maiores
              </li>
              <li className="production__item">
                Fugit sit atque eaque dolorum autem reprehenderit
              </li>
              <li className="production__item">
                Fugit sit atque eaque dolorum autem reprehenderit
              </li>
              <li className="production__item">
                Fugit sit atque eaque dolorum autem reprehenderit
              </li>
            </ul>
          </div>
          <figure className="production__figure">
            <img
              src={carpenter2}
              alt="carpenter"
              className="production__image"
            />
          </figure>
        </div>
      </article>
    </section>
  );
}

export default ProductionPage;
