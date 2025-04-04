import React, { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu-icon.png";
import { Link } from "react-scroll"; // ✅ Import react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full absolute cursor-pointer z-20">
      <div className="mx-auto px-[7%] justify-between items-center flex py-4">
        <div className="w-[120px] cursor-pointer">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex list-none text-[14px] gap-6 cursor-pointer text-white">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-60}>
              About
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} duration={500} offset={-100}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} duration={500} offset={-100}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="professors" smooth={true} duration={500} offset={-100}>
              Professors
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-100}>
              Contact Us
            </Link>
          </li>
        </nav>

        {/* Mobile Menu Button */}
        <div
          className="sm:hidden z-20 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img className="w-[25px]" src={menu} alt="Menu" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`sm:hidden absolute list-none left-0 w-full bg-sky-800 text-white flex flex-col items-center gap-y-4 py-4 z-10 transition-all duration-300 ease-in-out ${
          isOpen ? "top-13 opacity-100" : "top-[-100%] opacity-0"
        }`}
      >
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="programs"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="professors"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Professors
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
