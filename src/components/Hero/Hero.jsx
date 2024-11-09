import React from "react";

const Hero = () => {
  return (
    <div
      className="hero lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] sm:h-[100vh] h-[60vh] flex items-center justify-center flex-col md:pt-[10vh] pt-[8vh]"
      id="home"
    >
      <h4 className="lg:text-5xl md:text-4xl text-3xl text-center font-bold text-[#fff]">
        Welcome to Xecta!
      </h4>
      <p className="text-center lg:w-[600px] sm:w-[500px] text-[#fff] pt-[10px] lg:pb-[35px] pb-[23px] capitalize">
        we firmly believe that everyone should have access to high-quality,
        luxurious products that don't come with an exorbitant price tag.
      </p>
      <button className="lg:font-medium text-[#fff] lg:uppercase bg-[#e63d53] lg:py-[10px] md:py-[8px] py-[7px] lg:px-[40px] md:px-[30px] px-[20px] rounded-md">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
