import Navbar from "../components/header";
import { Outlet } from "react-router-dom";

export default function MainLayout (){
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
        )
}