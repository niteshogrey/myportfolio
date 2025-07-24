import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SERVICES</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          What I can do for you -
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative items-center justify-center overflow-hidden cursor-pointer bg-neutral-800 rounded-xl"
          >
            <div className="h-96 w-full flex justify-center">
              <img
                src={service.gif} // This should be a .gif URL
                alt={service.title}
                className="w-1/2 h-35 object-cover mt-15"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/75 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
              <h1 className="text-lg capitalize font-bold text-white">
                {service.title}
              </h1>
              <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
