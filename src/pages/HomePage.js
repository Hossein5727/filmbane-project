import React from "react";
import {
  BestSeries,
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
    </div>
  );
}

export default HomePage;
