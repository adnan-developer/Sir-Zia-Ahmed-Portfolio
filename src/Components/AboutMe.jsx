import React from "react";
import ZIA from "../assets/ZIA.webp";
import Counter from "./Counter";

const AboutMe = () => {
  return (
    <section id="about" className="w-full mt-4 text-center p-6">
      <h1 className="text-[#63C8D2] font-semibold text-5xl">ABOUT ME</h1>
      <div className="w-full max-md:flex-col about flex justify-between mt-10 gap-6">
        <div className="content max-md:w-full w-[50%] p-2 max-md:p-0 flex items-start flex-col">
          <h1 className="text-white text-5xl tracking-wider font-semibold">
            Hello, I’am Zia Ahmed
          </h1>
          <h1 className="text-white text-xl leading-9 text-left mt-2">
            With the purpose of empowering businesses through technology, I
            bring over 7 years of expertise in mobile app development and App
            Store Optimization (ASO). My goal is to add value by transforming
            innovative ideas into high-quality, user-centric applications. I
            leverage my skills in Java, Kotlin, Jetpack Compose, and Flutter to
            create high-performance apps that engage users and drive growth. By
            implementing effective ASO strategies, I ensure that the apps I
            develop not only capture attention but also achieve lasting success
            in competitive markets.
          </h1>
          <div className="buttons mt-4 flex items-center justify-start gap-4">
            <a target="_blank" href="https://calendly.com/ziaahmedf17/consultation-development-done-right-here">
            <button className="relative overflow-hidden px-6 py-3 text-white font-semibold cursor-pointer bg-transparent border border-[#63C8D2] rounded-full z-10 group">
              Book Consultation
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-[#63C8D2] rounded-full z-0 transform -translate-x-1/2 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-500 ease-out"></span>
              <span className="absolute inset-0 flex items-center justify-center z-10 group-hover:text-[#0A1331] transition-colors duration-300">
                Book Consultation
              </span>
            </button>
            </a>
            <a href="#contact">
            <button className="relative overflow-hidden px-6 py-3 text-white font-semibold cursor-pointer bg-transparent border border-[#63C8D2] rounded-full z-10 group">
              Get Quotation
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-[#63C8D2] rounded-full z-0 transform -translate-x-1/2 group-hover:w-[300%] group-hover:h-[300%] transition-all duration-500 ease-out"></span>
              <span className="absolute inset-0 flex items-center justify-center z-10 group-hover:text-[#0A1331] transition-colors duration-300">
                Get Quotation
              </span>
            </button>
            </a>
          </div>
          <div className="clients mt-6 text-white flex items-center justify-center gap-20 max-md:gap-10 flex-wrap">
            <div className="total-clients flex items-center flex-col">
              <h1 className="text-5xl font-semibold">
                {<Counter end={321} />}
              </h1>
              <h1>Total Clients Served</h1>
            </div>
            <div className="upwork-clients">
              <h1 className="text-5xl font-semibold flex items-center justify-center">
                {<Counter end={326} />} <span className="text-4xl">+</span>
              </h1>

              <h1>Upwork Clients</h1>
            </div>
            <div className="fiverr-clients ">
              <h1 className="text-5xl font-semibold flex items-center justify-center">
                {<Counter end={116} />}
                <span className="text-4xl">+</span>
              </h1>

              <h1>Fiverr Clients</h1>
            </div>
          </div>
        </div>
        <div className="img-container w-[50%] max-md:w-full rounded-2xl overflow-hidden">
          <img className="w-full h-full object-cover" src={ZIA} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
