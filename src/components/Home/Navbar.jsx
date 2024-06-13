import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEnvelope,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import img1 from "./img/logo.jpg";
import img2 from "./img/img3.jpg";
import React, { useState, useEffect } from "react";
import './Home.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // If screen size crosses the threshold for big screen and menu is open, close it
      if (window.innerWidth > 768 && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    // Add event listener for resize events
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
        <nav className="p-2 flex justify-between items-center nav_home">
          <NavLink to="/" id="logo">
            <img
              src={img1}
              alt="Logo"
              className="object-cover w-14 h-auto border border-transparent rounded-lg"
            ></img>
          </NavLink>
          <NavLink
            to="/"
            id="logo"
            className="hidden lg:flex gap-5 justify-between items-center"
          >
            <img
              src={img2}
              alt="Doctor"
              className="object-cover w-12 h-auto border border-transparent rounded-lg"
            ></img>
            <span className="pl-4 font-medium ">User</span>
          </NavLink>
          <div
            id="nav-menu"
            className="hidden lg:flex gap-10 justify-between items-center"
          >
            <NavLink
              to="/home"
              className="pl-5 pr-5 font-bold hover:text-gray-400  rounded hover:bg-gray-200 focus:text-slate-600"
            >
              Home
            </NavLink>
            <NavLink

              to="/patients"
              className="pl-5 pr-5 font-bold hover:text-gray-400  rounded hover:bg-gray-200 active:bg-slate-400 focus:text-slate-600"
            >
              Patients
            </NavLink>
            <NavLink

              to="/PRecords"
              className="pl-5 pr-5 font-bold hover:text-gray-400  rounded hover:bg-gray-200 active:bg-slate-400 focus:text-slate-600"
            >
              Patient Records
            </NavLink>
            <NavLink
              to="/nurse"
              className="pl-5 pr-5 font-bold hover:text-gray-400  rounded hover:bg-gray-200 active:text-gray-950 focus:text-slate-600"
            >
              Data Entry
            </NavLink>
            <NavLink
              to="/settings"
              className="pl-5 pr-5 font-bold hover:text-gray-400  rounded hover:bg-gray-200 active:text-gray-950 focus:text-slate-600"
            >
              Settings
            </NavLink>
          </div>
          <div
            id="nav-menu"
            className="hidden lg:flex justify-between items-center "
          >
            <NavLink
              to="/"
              className="pl-5 pr-5 font-bold hover:text-gray-900  active:text-gray-950"
            >
              <FontAwesomeIcon icon={faBell} />
            </NavLink>
            <NavLink
              to="/"
              className="pl-5 pr-5 font-bold hover:text-gray-900  active:text-gray-950"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
            <NavLink
              to="/login"
              className="pl-5 pr-5 font-bold hover:text-gray-900  rounded hover:bg-gray-200 active:text-gray-950"
            >
              Logout
            </NavLink>
          </div>
          <button className="p-2 lg:hidden" onClick={handleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-gray-800 h-6" />
          </button>
          <div
            id="nav-dilogue"
            className={`fixed bg-gray-100 h-5/6 z-20 inset-0 p-3 ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <div id="nav-bar" className="flex justify-between">
              <img
                src={img1}
                alt="Logo"
                className="object-cover w-12 h-auto border border-transparent rounded-lg"
              ></img>
              <button className="p-2 lg:hidden" onClick={handleMenu}>
                <FontAwesomeIcon icon={faXmark} className="text-gray-800 h-6" />
              </button>
            </div>
            <div className="mt-6">
              <Link
                to="/home"
                className="font-medium m-3 p-3 hover:bg-yellow-300 block rounded-lg "
              >
                Home
              </Link>
              <Link
                to="/patients"
                className="font-medium m-3 p-3 hover:bg-yellow-300 block rounded-lg "
              >
                Patients
              </Link>
              <Link
                to="/PRecords"
                className="font-medium m-3 p-3 hover:bg-yellow-300 block rounded-lg "
              >
                Patient Records
              </Link>
              <Link
                to="/nurse"
                className="font-medium m-3 p-3 hover:bg-yellow-300 block rounded-lg "
              >
                Data Entry
              </Link>
              <Link
                to="/login"
                className="font-medium m-3 p-3 hover:bg-yellow-300 block rounded-lg "
              >
                Logout
              </Link>
            </div>
          </div>
        </nav>
    </>
  );
};

export default Navbar;


