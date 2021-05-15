import React from "react";
import { Header } from "./components/header/header.component";
import { Portfolio } from "./components/portfolio/portfolio.component";
import { Experience } from "./components/experience/experience.component";
import { AE } from "./components/achievements/ae.component";
import Footer from "./components/footer/footer.component";
import { NewSection } from "./components/newSection/new-section.component";

const App = () => {
  return (
    <div>
      <Header />
      <Portfolio />
      <NewSection />
      <Experience />
      <NewSection />
      <AE />
      <NewSection />
      <Footer />
    </div>
  );
};

export default App;
