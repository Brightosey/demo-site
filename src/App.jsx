import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Components/Map/Map";

function App() {
    return(
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Map />
      </BrowserRouter>
    );
}

export default App;