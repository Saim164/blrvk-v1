import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Home from "./pages/home/Home";
import Footer from "./components/layout/Footer";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Contact from "./pages/contact/Contact";
import { API_BASE_URL } from "./lib/api";
import { scrollToSectionId } from "./lib/scroll";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => scrollToSectionId(hash.slice(1)));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  useEffect(() => {
    fetch(`${API_BASE_URL}/ping`).catch(() => {});
  }, []);

  return (
    <BrowserRouter>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
