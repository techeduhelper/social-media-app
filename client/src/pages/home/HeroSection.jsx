import React from "react";
import heroimg from "../../assets/hero_image.png";

const HeroSection = () => {
  return (
    <>
      <div className="flex lg:justify-between w-full items-center sm:justify-center  min-h-[90vh]  sm:px-4 z-10  lg:px-20 sm:flex-col-reverse lg:flex-row sm:shadow-none lg:shadow-sm">
        <div className="flex w-full flex-col lg:justify-start sm:items-center lg:items-start sm:mt-10 sm:mb-4 lg:mb-0">
          <span className="flex flex-col lg:items-start sm:items-center lg:text-5xl sm:text-4xl font-semibold text-blue-800">
            <span>Become Social Media</span>
            <span>Marketing Experts</span>
          </span>
          <p className="text-gray-600 lg:text-xl sm:text-lg mt-4 sm:text-center lg:text-left">
            We makes it easy for businesses and <br /> marketing teams to manage
            your social <br /> account in a single place.
          </p>
          <button className="text-center mt-10 px-4 py-3 bg-blue-800 text-white w-2/3 rounded-full shadow-2xl hover:bg-blue-900 font-bold tracking-wide text-lg">
            Get Started Now
          </button>
        </div>
        <div className="sm:mt-12 w-full">
          <img src={heroimg} className="w-full h-full drop-shadow-2xl" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
