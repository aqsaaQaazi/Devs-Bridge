import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Navbar() {
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
    }, []);

    const ActiveLink = ({isActive}) => isActive ? "text-green-500 hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg shadow-md bg-white focus:bg-green-500 focus:text-white active:text-white" : "text-white hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg active:bg-green-500 active:text-white"
    
    
    return (
        <>
            <nav className="bg-gradient-to-br from-green-300 to-cyan-600 p-4 flex justify-between items-center transition-all duration-300 right-0 left-0 fixed w-full z-50 shadow-lg ">
                <div  className="text-white text-lg font-bold cursor-pointer hover:opacity-100 transition-all duration-300 hover:tracking-wide hover:pl-1">
                    <Link to="/">
                      &lt;DevsBridge/&gt; 
                    </Link>
                    
                </div>

                <div className="block lg:hidden">
                    <button onClick={toggleMenu}>
                        <i className="fas fa-bars text-white text-2xl"></i>
                    </button>
                </div>

                <div className="hidden lg:flex space-x-6">
                    <NavLink to="/" className={ActiveLink}>
                        Home
                    </NavLink>

                    <NavLink to="/jobs" className={ActiveLink}>
                        Jobs
                    </NavLink>

                    <NavLink to="/" className={ActiveLink}>
                        Add Job
                    </NavLink>

                    <NavLink to="/" className={ActiveLink}>
                        About
                    </NavLink>

                    <NavLink to="/" className={ActiveLink}>
                        Contact
                    </NavLink>
                </div>

                {isOpen && (
                    <div ref={menuRef} className="absolute top-16 right-0 w-2/5 bg-gradient-to-tr rounded-lg shadow-lg lg:hidden transition-transform duration-300 ease-in-out">
                        <div className="flex flex-col space-y-2 p-4">
                            <Link to="/" className="text-white hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg active:bg-green-500 active:text-white"  onClick={closeMenu}>
                                Home
                            </Link>

                            <Link to="/jobs" className= "text-white hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg active:bg-green-500 active:text-white"  onClick={closeMenu}>
                                Jobs
                            </Link>

                            <Link to="/" className="text-white hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg active:bg-green-500 active:text-white" onClick={closeMenu}>
                                Add Job
                            </Link>

                            <Link to="/" className= "text-white hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg active:bg-green-500 active:text-white"  onClick={closeMenu}>
                                About
                            </Link>

                            <Link to="/" className= "text-white hover:text-green-600 transition-colors duration-300 hover:bg-white p-2 rounded-lg active:bg-green-500 active:text-white" onClick={closeMenu}>
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
