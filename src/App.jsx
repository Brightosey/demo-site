import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import ProductionPage from "./pages/ProductionPage/ProductionPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Policy from "./Components/Policy/Policy";
import ScrollButton from "./Hook/ScrollButton/ScrollButton";
import ScrollToTop from "./Hook/ScrollToTop/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Components/Map/Map";
import Contact from "./Components/Contact/Contact";
import { useState, useEffect } from "react";

function App() {
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
      <ScrollButton />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
