import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <InfoSection />
      <Contact />
      <Footer />  
    </div>
  );
}

export default App;
