import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import InspiringWomen from "./components/InspiringWomen";
import Blog from "./components/Blog";
import SuccessStories from "./components/SuccessStories";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import 'swiper/css';
import 'swiper/css/pagination';


function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services/>
      < InspiringWomen/>
      <Blog/>
      <SuccessStories/>
      <Events/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
