import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./components/Footer";
import NotFound from "./Pages/NotFound";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <div className="bg-slate-800 text-slate-100 min-h-screen">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
