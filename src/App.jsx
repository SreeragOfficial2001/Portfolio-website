import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import ProjectsSection from "./components/Projectsection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="sticky top-4 z-50 mx-auto w-full  h-auto ">
        <Header />
        <section id="home">
          <Profile />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="skills">
          <TechStack />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default App;
