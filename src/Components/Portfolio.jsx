import React from "react";
import PinterestProject from "../assets/pinterest-project.webp";
import PFPProject from "../assets/pfp.webp";
import BongoProject from "../assets/bongo.webp";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  return (
    <section id="portfolio" className="mt-6 w-full rounded-t-4xl p-12 text-white border-t-2 border-[#63C8D2]">
      <h1 className="text-8xl font-medium max-md:text-6xl">Portfolio</h1>
      <div className="projects mt-6">
        <div className="max-md:w-[70vw] project w-[35vw]">
          <div className="image-container w-full h-full rounded-2xl overflow-hidden">
            <a href="#">
              <img
                className="w-full h-full object-cover"
                src={PinterestProject}
                alt=""
              />
            </a>
          </div>

          <h1 className="text-xl font-semibold mt-2">
            Video Downloader For Pinterest
          </h1>
          <a href="#">
            <button className="mt-2 relative overflow-hidden px-8 py-3 text-white font-semibold cursor-pointer bg-transparent border border-[#63C8D2] rounded-full z-10 group">
              Explore
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-[#63C8D2] rounded-full z-0 transform -translate-x-1/2 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-500 ease-out"></span>
              <span className="absolute inset-0 flex items-center justify-center z-10 group-hover:text-[#0A1331] transition-colors duration-300">
                Explore
              </span>
            </button>
          </a>
        </div>
        <div className="max-md:w-[70vw] max-md:ml-0 max-md:mt-6 ml-[40vw] -mt-[15vw] project w-[35vw]">
          <div className="image-container w-full h-full rounded-2xl overflow-hidden">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.kamyabjawan.picdip&pcampaignid=web_share"
            >
              <img
                className="w-full h-full object-cover"
                src={PFPProject}
                alt=""
              />
            </a>
          </div>
          <h1 className="text-xl font-semibold mt-2">
            Profile Photo Maker ProfilePic
          </h1>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.kamyabjawan.picdip&pcampaignid=web_share"
          >
            <button className="mt-2 relative overflow-hidden px-8 py-3 text-white font-semibold cursor-pointer bg-transparent border border-[#63C8D2] rounded-full z-10 group">
              Explore
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-[#63C8D2] rounded-full z-0 transform -translate-x-1/2 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-500 ease-out"></span>
              <span className="absolute inset-0 flex items-center justify-center z-10 group-hover:text-[#0A1331] transition-colors duration-300">
                Explore
              </span>
            </button>
          </a>
        </div>
        <div className="max-md:w-[70vw] max-md:mt-6 -mt-[10vw] project w-[35vw]">
          <div className="image-container w-full h-full rounded-2xl overflow-hidden">
            <a href="#">
              <img
                className="w-full h-full object-cover"
                src={BongoProject}
                alt=""
              />
            </a>
          </div>
          <h1 className="text-xl font-semibold mt-2">Bongo Stickers</h1>
          <a href="#">
            <button className="mt-2 relative overflow-hidden px-8 py-3 text-white font-semibold cursor-pointer bg-transparent border border-[#63C8D2] rounded-full z-10 group">
              Explore
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-[#63C8D2] rounded-full z-0 transform -translate-x-1/2 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-500 ease-out"></span>
              <span className="absolute inset-0 flex items-center justify-center z-10 group-hover:text-[#0A1331] transition-colors duration-300">
                Explore
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
