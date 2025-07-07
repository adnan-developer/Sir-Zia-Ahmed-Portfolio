import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import AboutMe from "./Components/AboutMe";
import MySkills from "./Components/MySkills";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import MouseFollower from "./Components/MouseFollower";

const App = () => {
  return (
    <div className="">
      <MouseFollower />
      <Navbar />
      <Landing />
      <AboutMe />
      <MySkills />
      <Portfolio />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
