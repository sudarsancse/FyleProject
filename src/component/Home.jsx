import React from "react";
import Contact from "./Contact";
import Services from "./Services";
import Choose from "./Choose";
import Project from "./Project";
import Groweth from "./Groweth";
import Feedback from "./Feedback";
import Footer from "./Footer";

function Home() {
  return (
    <div className=" -z-10">
      <Contact />
      <Services />
      <Choose />
      <Project />
      <Groweth />
      <Feedback />
      <Footer />
    </div>
  );
}

export default Home;
