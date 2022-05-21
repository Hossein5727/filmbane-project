import React from "react";
import {
  BestSeries,
  Cta,
  Hero,
  RelatedMovies,
  ServicesSection,
  UpcomingMoives,
} from "../components";

function HomePage() {
  return (
    <div className="homePage">
      <Hero />
      <UpcomingMoives />
      <ServicesSection />
      <RelatedMovies />
      <BestSeries />
      <Cta />
    </div>
  );
}

export default HomePage;
