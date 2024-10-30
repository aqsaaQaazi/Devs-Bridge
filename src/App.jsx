import { Fragment } from "react";
import Navbar from "./components/header";
import HeroSection from "./components/hero";
import Navigators from "./components/ui-navigations";
import JobListings from "./components/Listings";


export default function Wrapper() {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
      <Navigators />
      <JobListings />
    </Fragment>

   
  );
}
