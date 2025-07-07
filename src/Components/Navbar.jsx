import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="p-4 flex items-center justify-between">
      <div className="img-container w-18 h-18">
        <img src={Logo} alt="" />
      </div>
      <h1
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="hidden max-md:block text-white text-2xl"
      >
        <i className="ri-menu-line"></i>
      </h1>
      <div
        className={`flex flex-col gap-6 items-center justify-center nav-modal w-full h-screen bg-[#000C32] top-0 left-0 z-20 transition-all ${
          isModalOpen ? "fixed" : "hidden"
        }`}
      >
        <h1
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="absolute top-5 right-5 text-white text-xl"
        >
          <i className="ri-close-large-line"></i>
        </h1>
        <a href="#about">
          <h1 className="relative text-white text-md font-semibold group cursor-pointer">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </h1>
        </a>
        <a href="#services">
          <h1 className="relative text-white text-md font-semibold group cursor-pointer">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </h1>{" "}
        </a>
        <a href="#portfolio">
          <h1 className="relative text-white text-md font-semibold group cursor-pointer">
            Portfolio
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </h1>
        </a>
        <a href="#contact">
          <button className="relative overflow-hidden px-6 py-3 text-white font-semibold cursor-pointer bg-transparent border border-[#63C8D2] rounded-full z-10 group">
            Contact
            <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-[#63C8D2] rounded-full z-0 transform -translate-x-1/2 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-500 ease-out"></span>
            <span className="absolute inset-0 flex items-center justify-center z-10 group-hover:text-[#0A1331] transition-colors duration-300">
              Contact
            </span>
          </button>
        </a>
      </div>
      <div className="max-md:hidden links flex items-center gap-8">
        <a href="#about">
          <h1 className="relative text-white text-md font-semibold group cursor-pointer">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </h1>
        </a>
        <a href="#services">
          <h1 className="relative text-white text-md font-semibold group cursor-pointer">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </h1>{" "}
        </a>
        <a href="#portfolio">
          <h1 className="relative text-white text-md font-semibold group cursor-pointer">
            Portfolio
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </h1>
        </a>
        <a href="#contact">
          <button className="relative overflow-hidden px-6 py-3 text-white font-semibold cursor-pointer bg-transparent border border-[#63C8D2] rounded-full z-10 group">
            Contact
            <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-[#63C8D2] rounded-full z-0 transform -translate-x-1/2 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-500 ease-out"></span>
            <span className="absolute inset-0 flex items-center justify-center z-10 group-hover:text-[#0A1331] transition-colors duration-300">
              Contact
            </span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
