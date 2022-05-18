import React from "react";
import {
  Hero,
  RelatedMovies,
  ServicesSection,
  UpcomingMoives,
} from "../components";

function HomePage() {
  return (
    <div className="">
      <Hero />
      <UpcomingMoives />
      <ServicesSection />
      <RelatedMovies />
    </div>
  );
}

export default HomePage;
