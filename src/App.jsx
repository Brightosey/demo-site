import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import ProductionPage from "./pages/ProductionPage/ProductionPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Policy from "./Components/Policy/Policy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Components/Map/Map";
import Contact from "./Components/Contact/Contact";
import { useState, useEffect } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/production" element={<ProductionPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Contact />
      <Map />

      {showButton ? (
        <a
          onClick={() => window.scrollTo(0, 0)}
          style={{ position: "fixed", right: "15px", bottom: "15px" }}
        >
          to Top
        </a>
      ) : (
        ""
      )}
    </BrowserRouter>
  );
}

export default App;
