import React from "react";
import "./index.css";
import Home from "./pages/home/Home";
import Car from "./pages/car/Car";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Faq from "./pages/faq/Faq";
import Advertise from "./pages/advertise/Advertise";
import CarDetails from "./pages/car-details/CarDetails";
import Header from "./components/header/header-first/Header";
import Footer from "./components/footer/Footer";
import Terms from "./pages/terms & condition/Terms";
import Privacy from "./pages/privacy/Privacy";
import Care from "./support/care/Care";
import Career from "./support/career/Career";
import Feedback from "./support/feedback/Feedback";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderSecond from "./components/header/header-second/HeaderSecond";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Header />
          <HeaderSecond />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" exact element={<Car />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/faq" exact element={<Faq />} />
            <Route path="/terms" exact element={<Terms />} />
            <Route path="/privacy" exact element={<Privacy />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/careers" exact element={<Career />} />
            <Route path="/care" exact element={<Care />} />
            <Route path="/feedback" exact element={<Feedback />} />
            <Route path="/advertise" exact element={<Advertise />} />
            <Route path="/cars/detail" exact element={<CarDetails />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
