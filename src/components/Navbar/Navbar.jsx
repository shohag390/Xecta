import React, { useState } from "react";
import { MdOutlineClearAll } from "react-icons/md";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, isActive] = useState("home");

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`${
        navbar ? "bg-[#fff] shadow-md" : "bg-transparent navBg"
      } w-full  md:h-[10vh] h-[8vh] lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px]  duration-500 flex items-center justify-between fixed top-0 left-0 z-50`}
    >
      <div>
        <h4
          className={`${
            navbar ? "text-[#e63d53]" : "text-[#fff]"
          } md:text-[30px] sm:text-[25px] text-[20px] font-bold duration-500`}
        >
          Xecta
        </h4>
      </div>
      <ul className="md:flex md:items-center md:gap-[30px] hidden">
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "home" && "text-[#e63d53]"}`}
            onClick={() => isActive("home")}
            href="#home"
          >
            Home
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "about" && "text-[#e63d53]"}`}
            onClick={() => isActive("about")}
            href="#about"
          >
            About
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "service" && "text-[#e63d53]"}`}
            onClick={() => isActive("service")}
            href="#service"
          >
            Service
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "team" && "text-[#e63d53]"}`}
            onClick={() => isActive("team")}
            href="#team"
          >
            Team
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "price" && "text-[#e63d53]"}`}
            onClick={() => isActive("price")}
            href="#price"
          >
            Price
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "clients" && "text-[#e63d53]"}`}
            onClick={() => isActive("clients")}
            href="#clients"
          >
            Clients
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "contact" && "text-[#e63d53]"}`}
            onClick={() => isActive("contact")}
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${navbar ? "text-[#7b7b7b]" : "text-[#fff]"} md:hidden`}
      >
        <MdOutlineClearAll className="sm:text-[30px] text-[25px]" />
      </div>
      <ul
        className={`${
          !isOpen ? "w-0 overflow-hidden opacity-0" : "sm:w-[70%] w-full"
        } md:hidden h-[92vh] absolute left-0 right-0 top-[8vh] bg-[#fff] duration-500 flex items-center justify-center gap-[30px] flex-col ${
          navbar ? "bg-[#fff]" : "navBg"
        }`}
      >
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "home" && "text-[#e63d53]"}`}
            onClick={() => isActive("home")}
            href="#home"
          >
            Home
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "about" && "text-[#e63d53]"}`}
            onClick={() => isActive("about")}
            href="#about"
          >
            About
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "service" && "text-[#e63d53]"}`}
            onClick={() => isActive("service")}
            href="#service"
          >
            Service
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "team" && "text-[#e63d53]"}`}
            onClick={() => isActive("team")}
            href="#team"
          >
            Team
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "price" && "text-[#e63d53]"}`}
            onClick={() => isActive("price")}
            href="#price"
          >
            Price
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "clients" && "text-[#e63d53]"}`}
            onClick={() => isActive("clients")}
            href="#clients"
          >
            Clients
          </a>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            navbar
              ? "text-[#7b7b7b]"
              : "text-[#fff] hover:text-[#e63d53] duration-500"
          }`}
        >
          <a
            className={`${active === "contact" && "text-[#e63d53]"}`}
            onClick={() => isActive("contact")}
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
