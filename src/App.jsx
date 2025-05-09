import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import ProductionPage from "./pages/ProductionPage/ProductionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Components/Map/Map";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/production" element={<ProductionPage />}/>
      </Routes>
      <Contact />
      <Map />
    </BrowserRouter>
  );
}

export default App;
