import "./ScrollButton.scss";
import { useState, useEffect } from "react";
import upArrow from "../../assets/Icon/up-arrow.png";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="scroll-button">
      {showButton && (
        <button
          className="scroll-button__btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={upArrow}
            alt="Scroll to top"
            className="scroll-button__icon"
          />
        </button>
      )}
    </section>
  );
}

export default ScrollToTopButton;
