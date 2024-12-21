// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "../components/hero";
import OutImpressiveStats from "../components/out-impressive-stats";

import { Leaders } from "../components/leaders";
import TrustedMou from "../components/trusted-mou";
import AboutUs from "./about/page";
import ExploreCollages from "./collages/page";
import Events from "./events/page";
import Courses from "./cources/page";

export default function Campaign() {
  return (
    <>
      
      <Hero />
      <OutImpressiveStats />
      <Courses />
      <ExploreCollages />
      <AboutUs />
      <Events />
      <Leaders/>
      <TrustedMou />
      <Footer />
    </>
  );
}
