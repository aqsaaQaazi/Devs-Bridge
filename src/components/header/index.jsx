import React, { useEffect } from "react"
import { useState, useRef } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Navbar (){
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [])
    
    return(
    <>

        
        
        <nav className="bg-gradient-to-br from-green-300 to-cyan-600 p-4 flex justify-between items-center transition-all duration-300 right-0 left-0 fixed w-full z-50 shadow-lg ">

           
                <div 
                    className="text-white  text-lg font-bold cursor-pointer hover:opacity-100 transition-all duration-300 hover:tracking-wide hover:pl-1"> 
                    &lt;DevsBridge/&gt; 

                </div>

                <div className="block lg:hidden">
                    <button onClick={toggleMenu}>
                        <i className="fas fa-bars text-white  text-2xl"></i>
                    </button>
                </div>

                <div className="hidden lg:flex space-x-6">
                <a href="/" 
                className="text-white  hover:text-green-600 transition-colors duration-300 hover:bg-white  p-2 rounded-lg active:bg-green-500 active:text-white " >
                    Home
                </a>

                <a href="/jobs" 
                className="text-white  hover:text-green-600 transition-colors duration-300 hover:bg-white  p-2 rounded-lg active:bg-green-500 active:text-white " >
                    Jobs
                </a>

                <a href="/about" 
                className="text-white  hover:text-green-600 transition-colors duration-300 hover:bg-white  p-2 rounded-lg active:bg-green-500 active:text-white " >
                    Add Job
                </a>

                <a href="/about" 
                className="text-white  hover:text-green-600 transition-colors duration-300 hover:bg-white  p-2 rounded-lg active:bg-green-500 active:text-white " >
                    About
                </a>
                <a href="/contact" 
                className="text-white  hover:text-green-600 transition-colors duration-300 hover:bg-white  p-2 rounded-lg active:bg-green-500 active:text-white " >
                    Contact
                </a>
                 </div>

                 {isOpen && (
                    <div
                    ref={menuRef}
                     className="absolute top-16 right-0 w-2/5 bg-gradient-to-tr  rounded-lg shadow-lg lg:hidden transition-transform duration-300 ease-in-out">
                        <div
                        className="flex flex-col space-y-2 p-4">
                            <a href="/" 
                className="text-white  hover:text-green-600 transition-colors duration-300 hover:bg-white  p-2 rounded-lg active:bg-green-500 active:text-white " onClick={closeMenu}>
                    Home
                </a>

                <a href="/jobs" 
                className="text-white  hover:text-green-600 transition-colors duration-300 hover:bg-white  p-2 rounded-lg active:bg-green-500 active:text-white " onClick={closeMenu}>
                    Jobs
                </a>

                <a href="/about" 
                className="text-white  hover:text-green-600 transition-colors duration-300 hover:bg-white  p-2 rounded-lg active:bg-green-500 active:text-white " onClick={closeMenu}>
                    Add Job
                </a>

                <a href="/about" 
                className="text-white  hover:text-green-600 transition-colors duration-300 hover:bg-white  p-2 rounded-lg active:bg-green-500 active:text-white " onClick={closeMenu}>
                    About
                </a>
                <a href="/contact" 
                className="text-white  hover:text-green-600 transition-colors duration-300 hover:bg-white  p-2 rounded-lg active:bg-green-500 active:text-white " onClick={closeMenu}>
                    Contact
                </a>
                        </div>
                    </div>
                 )}
        </nav>
    </>
)
}