import HeroSection from "../components/hero/index"
import Navigators from "../components/ui-navigations"
import JobListings from "../components/Listings"
import ViewAllBtn from "../components/ViewAllJobsButton"; 


export default function Home(){
return(
    <div>

        <HeroSection/>
        <Navigators/>
        <JobListings isHome={true}/>
        <ViewAllBtn/>

    </div>
)
}