import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side: Branding */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-2xl font-bold text-[#63C8D2]">Zia Ahmed</h3>
          <p className="text-sm text-gray-400">
            Building high-quality mobile experiences with code & creativity.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-400 justify-center">
          <a href="#home" className="hover:text-[#63C8D2] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#63C8D2] transition">
            About
          </a>
          <a href="#services" className="hover:text-[#63C8D2] transition">
            Services
          </a>
          <a href="#portfolio" className="hover:text-[#63C8D2] transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-[#63C8D2] transition">
            Contact
          </a>
        </div>

        {/* Right Side: Socials */}
        <div className="flex gap-5 text-xl text-gray-400 justify-center">
          <a
            href="https://www.linkedin.com/in/ziaahmedf17/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#63C8D2]"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ziaahmedf17@gmail.com"
            className="hover:text-[#63C8D2]"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 flex justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Zia Ahmed. All rights reserved.</p>
        <a href="#top" className="hover:text-[#63C8D2] transition">
          <FaArrowUp className="inline mr-1" /> Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
