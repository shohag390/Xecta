import { useEffect } from "react";
import { FaLaptopCode, FaPhotoVideo } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineDataExploration } from "react-icons/md";
import { SiTaichigraphics } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <div
      id="service"
      className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] md:py-[10vh] py-[8vh]"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h4 className="lg:text-[36px] md:text-[25px] text-[20px] lg:font-bold font-semibold uppercase text-[#000]">
          Our <span className="font-normal text-[#e63d53]">Services</span>
        </h4>
        <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
          <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
        </div>
        <p className="lg:w-[400px] md:w-[350px] w-[330px] pt-[10px] lg:pb-[50px] sm:pb-[40px] pb-[20px] capitalize text-[#7b7b7b]">
          we firmly believe that everyone should have access to high-quality,
          luxurious
        </p>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-[40px] sm:gap-[30px] gap-[20px]">
        <div
          className="flex flex-col items-center justify-center text-center px-[50px]"
          data-aos="flip-up"
        >
          <div className="h-[70px] w-[70px] flex items-center justify-center bg-[#e63d53] rounded-full text-[#fff]">
            <FaLaptopCode className="text-[30px]" />
          </div>
          <h4 className="text-[20px] font-bold pt-[10px]">Web Develope</h4>
          <p className="text-[#7b7b7b]">
            We firmly believe that everyone should have access to high-quality.
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center text-center px-[50px]"
          data-aos="flip-up"
        >
          <div className="h-[70px] w-[70px] flex items-center justify-center bg-[#e63d53] rounded-full text-[#fff]">
            <SiTaichigraphics className="text-[30px]" />
          </div>
          <h4 className="text-[20px] font-bold pt-[10px]">Graphics Design</h4>
          <p className="text-[#7b7b7b]">
            We firmly believe that everyone should have access to high-quality.
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center text-center px-[50px]"
          data-aos="flip-up"
        >
          <div className="h-[70px] w-[70px] flex items-center justify-center bg-[#e63d53] rounded-full text-[#fff]">
            <MdOutlineDataExploration className="text-[30px]" />
          </div>
          <h4 className="text-[20px] font-bold pt-[10px]">Data Entry</h4>
          <p className="text-[#7b7b7b]">
            We firmly believe that everyone should have access to high-quality.
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center text-center px-[50px]"
          data-aos="flip-up"
        >
          <div className="h-[70px] w-[70px] flex items-center justify-center bg-[#e63d53] rounded-full text-[#fff]">
            <FaPhotoVideo className="text-[30px]" />
          </div>
          <h4 className="text-[20px] font-bold pt-[10px]">Video Editing</h4>
          <p className="text-[#7b7b7b]">
            We firmly believe that everyone should have access to high-quality.
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center text-center px-[50px]"
          data-aos="flip-up"
        >
          <div className="h-[70px] w-[70px] flex items-center justify-center bg-[#e63d53] rounded-full text-[#fff]">
            <IoBriefcaseOutline className="text-[30px]" />
          </div>
          <h4 className="text-[20px] font-bold pt-[10px]">SEO Optimize</h4>
          <p className="text-[#7b7b7b]">
            We firmly believe that everyone should have access to high-quality.
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center text-center px-[50px]"
          data-aos="flip-up"
        >
          <div className="h-[70px] w-[70px] flex items-center justify-center bg-[#e63d53] rounded-full text-[#fff]">
            <TbBrandFiverr className="text-[30px]" />
          </div>
          <h4 className="text-[20px] font-bold pt-[10px]">Fiverr Jobs</h4>
          <p className="text-[#7b7b7b]">
            We firmly believe that everyone should have access to high-quality.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <button className="lg:font-medium text-[#fff] lg:uppercase bg-[#e63d53] lg:py-[10px] md:py-[8px] py-[7px] lg:px-[40px] md:px-[30px] px-[20px] rounded-md lg:mt-[35px] md:mt-[25px] mt-[22px]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Service;
