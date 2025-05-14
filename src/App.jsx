import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; 
import { HashRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
