import React from "react";
import Zia from "../assets/ZIA-2.webp";
import Flutter from "../assets/flutter.png";
import Java from "../assets/java.png";
import Kotlin from "../assets/kotlin.png";
import Swift from "../assets/swift.png";
import UpworkLogo from "../assets/upwork.png";
import FiverrLogo from "../assets/fiverr.png";
import PlayStoreLogo from "../assets/playstore.png";

const Landing = () => {
  return (
    <section
      id="home"
      className="max-md:flex-col flex items-center justify-center w-full relative"
    >
      <div className="icons">
        <img
          className="animate-float-up-down absolute max-md:hidden max-md:w-12 max-md:h-12 w-20 h-20 rotate-22 blur-[1.5px] -top-4 left-10"
          src={Flutter}
          alt=""
        />
        <img
          className="animate-float-right-left absolute max-md:hidden max-md:w-12 max-md:h-12 w-20 h-20 -rotate-30 blur-[1.5px] top-8 right-10"
          src={Java}
          alt=""
        />
        <img
          className="animate-float-diagonal-1 absolute max-md:top-50 max-md:right-20 max-md:w-12 max-md:h-12 w-20 h-20 rotate-22 blur-[1.5px] top-70 right-96"
          src={Kotlin}
          alt=""
        />
        <img
          className="animate-float-diagonal-2 absolute max-md:hidden max-md:w-12 max-md:h-12 w-12 h-12 -rotate-22 blur-[1.5px] top-20 left-[44vw]"
          src={Swift}
          alt=""
        />
      </div>
      <div className="content max-md:w-full w-[60%] max-md:p-4 p-6">
        <h1 className="max-md:text-4xl text-6xl font-semibold text-[#63C8D2]">
          Top-Rated App Developer with 5+ Years of Experience
        </h1>
        <h1 className="max-md:text-2xl mt-4 text-4xl font-semibold text-white font-[Dancing_Script]">
          Turning ideas into polished mobile apps.
        </h1>
        <a href="#contact">
          <button className="mt-4 relative overflow-hidden px-6 py-3 text-white font-semibold cursor-pointer bg-transparent border border-[#63C8D2] rounded-full z-10 group">
            Hire Me
            <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-[#63C8D2] rounded-full z-0 transform -translate-x-1/2 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-500 ease-out"></span>
            <span className="absolute inset-0 flex items-center justify-center z-10 group-hover:text-[#0A1331] transition-colors duration-300">
              Hire Me
            </span>
          </button>
        </a>
        <div className="bottom-part mt-6">
          <h1 className="text-white">Trusted By : </h1>
          <div className="trusted-container relative overflow-hidden py-4">
            {/* Left Glow */}
            <div className="absolute left-0 top-0 h-full w-24 bg-[#0A1331] blur-sm z-10 pointer-events-none" />

            {/* Right Glow */}
            <div className="absolute right-0 top-0 h-full w-24 bg-[#0A1331] blur-sm z-10 pointer-events-none" />

            {/* Logos Moving */}
            <div className="logo-scroll-wrapper overflow-hidden">
              <div className="logo-track flex gap-16">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-16">
                    <div className="logo w-20 h-20">
                      <img
                        className="h-full w-full object-contain"
                        src={UpworkLogo}
                        alt="Upwork"
                      />
                    </div>
                    <div className="logo w-20 h-20">
                      <img
                        className="h-full w-full object-contain"
                        src={FiverrLogo}
                        alt="Fiverr"
                      />
                    </div>
                    <div className="logo max-md:w-10 w-20 h-20">
                      <img
                        className="h-full w-full object-contain"
                        src={PlayStoreLogo}
                        alt="PlayStore"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h1 className="text-white mt-2">
            ⭐ Trusted by 20+ Clients | ★ 5.0 on Upwork | $100k+ Earned
          </h1>
        </div>
      </div>
      <div className="img-container max-md:w-full w-[40%]">
        <img src={Zia} alt="" />
      </div>
    </section>
  );
};

export default Landing;
