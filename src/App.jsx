import { Fragment } from "react";
import Navbar from "./components/header";
import HeroSection from "./components/hero";
import Navigators from "./components/ui-navigations";
import JobListings from "./components/Listings";

export default function Wrapper() {



  return (
    <Fragment>
       
    <Navbar/>
    <HeroSection/>
    <Navigators/>
    <JobListings/>

    

    {/* <!-- Browse Jobs --> */}
    

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </Fragment>
  );
}
