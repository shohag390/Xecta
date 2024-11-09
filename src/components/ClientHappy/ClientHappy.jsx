import { useEffect } from "react";
import { FaLaptop, FaUsers } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

import { GiTrophyCup } from "react-icons/gi";
import { IoMdLaptop } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientHappy = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <div className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] flex items-center justify-around sm:gap-0 gap-[15px] bg-[#e63d53] lg:py-[50px] md:py-[45px] sm:py-[35px] py-[25px]">
      <div
        className="flex flex-col items-center justify-center text-center"
        data-aos="flip-up"
      >
        <FaUsers className="text-[#fff] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[35px] lg:pb-[10px] md:pb-[8px] sm:pb-[7px] pb-[6px]" />
        <div>
          <h4 className="text-[#fff] lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] md:font-bold sm:font-semibold font-medium lg:leading-9 md:leading-8 sm:leading-7 leading-6">
            300
          </h4>
          <p className="text-[#fff]">Happy Client</p>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center text-center"
        data-aos="flip-up"
      >
        <FaCode className="text-[#fff] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[35px] lg:pb-[10px] md:pb-[8px] sm:pb-[7px] pb-[6px]" />
        <div>
          <h4 className="text-[#fff] lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] md:font-bold sm:font-semibold font-medium lg:leading-9 md:leading-8 sm:leading-7 leading-6">
            9598
          </h4>
          <p className="text-[#fff]">Code Line</p>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center text-center"
        data-aos="flip-up"
      >
        <IoMdLaptop className="text-[#fff] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[35px] lg:pb-[10px] md:pb-[8px] sm:pb-[7px] pb-[6px]" />
        <div>
          <h4 className="text-[#fff] lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] md:font-bold sm:font-semibold font-medium lg:leading-9 md:leading-8 sm:leading-7 leading-6">
            1999
          </h4>
          <p className="text-[#fff]">Project Finished</p>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center text-center"
        data-aos="flip-up"
      >
        <GiTrophyCup className="text-[#fff] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[35px] lg:pb-[10px] md:pb-[8px] sm:pb-[7px] pb-[6px]" />
        <div>
          <h4 className="text-[#fff] lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] md:font-bold sm:font-semibold font-medium lg:leading-9 md:leading-8 sm:leading-7 leading-6">
            199
          </h4>
          <p className="text-[#fff]">Awards</p>
        </div>
      </div>
    </div>
  );
};

export default ClientHappy;
