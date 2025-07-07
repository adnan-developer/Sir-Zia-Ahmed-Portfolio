import React from "react";
import { FaCode } from "react-icons/fa";

const services = [
  {
    icon: <i className="ri-smartphone-line"></i>,
    title: "Hybrid APP DEVELOPMENT",
    desc: "I create hybrid applications that work across multiple platforms, reducing development time and costs while expanding user reach.",
  },
  {
    icon: <i className="ri-app-store-line"></i>,
    title: "APP STORE OPTIMIZATION",
    desc: "Using effective ASO techniques, I increase your app’s visibility and downloads, maximizing its potential in crowded app marketplaces.",
  },
  {
    icon: <i className="ri-code-s-slash-fill"></i>,
    title: "WEB DEVELOPMENT",
    desc: "My website development services focus on creating responsive, user-friendly sites that enhance brand visibility and effectively engage your audience.",
  },
  {
    icon: <i className="ri-code-s-slash-fill"></i>,
    title: "UI/UX DESIGN",
    desc: "I design intuitive UI/UX interfaces that enhance user satisfaction, ensuring a smooth and enjoyable experience across all digital platforms.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#63C8D2] bg-clip-text">
          Services Offered
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Mastering Every Digital Challenge with Expert Development. Your Vision
          Fuels Our Innovation and Meets Our Expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-6 border border-[#63C8D2] rounded-xl shadow-md hover:shadow-[#63C8D2] transition hover:scale-105 duration-300"
          >
            <div className="text-cyan-400 mb-4">
              <h3 className="text-4xl">{service.icon}</h3>
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
