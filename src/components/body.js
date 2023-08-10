import React from "react";

import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import SectionFive from "./Sections/SectionFive";
import SectionFour from "./Sections/SectionFour";
import Footer from "./Footer/Footer";
import { useSelector } from "react-redux";

function Main() {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  return (
    <div className={"w-full bg-body " + (!isMenuOpen && "fixed md:absolute")}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default Main;
