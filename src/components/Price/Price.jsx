import { useEffect } from "react";
import { FaTelegramPlane, FaTrophy, FaUser } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Price = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <div
      className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] md:py-[10vh] py-[8vh] bg-[#eeeeee] overflow-hidden"
      id="price"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h4 className="lg:text-[36px] md:text-[25px] text-[20px] lg:font-bold font-semibold uppercase text-[#000]">
          Our <span className="font-normal text-[#e63d53]">Packages</span>
        </h4>
        <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
          <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
        </div>
        <p className="lg:w-[400px] md:w-[350px] w-[330px] pt-[10px] lg:pb-[50px] sm:pb-[40px] pb-[20px] capitalize text-[#7b7b7b]">
          we firmly believe that everyone should have access to high-quality,
          luxurious
        </p>
      </div>
      <div className="grid items-center grid-cols-1 md:grid-cols-3 md:gap-[40px] sm:gap-[30px] gap-[20px]">
        <div
          className="py-[30px] px-[50px] bg-[#fff] flex flex-col items-center"
          data-aos="zoom-in-right"
        >
          <FaTelegramPlane className="text-[45px] text-[#737272]" />
          <h4 className="text-[22px] uppercase font-bold pt-[10px]">
            Basic Price
          </h4>
          <h4 className="text-[33px] font-bold text-[#e63d53] leading-9">
            $49
          </h4>

          <ul className="pt-[10px] w-full text-[#7b7b7b] uppercase">
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              15 Pages
            </li>
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              40 GB storage
            </li>
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              unlimited data transfer
            </li>
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              100 GB bandwith
            </li>
            <li className="pt-[10px] text-center w-full">Enhanced security</li>
          </ul>
          <button className="lg:font-medium text-[#fff] lg:uppercase bg-[#e63d53] lg:py-[10px] md:py-[8px] py-[7px] lg:px-[40px] md:px-[30px] px-[20px] rounded-md lg:mt-[30px] md:mt-[25px] mt-[22px]">
            Buy Now
          </button>
        </div>
        <div
          className="py-[30px] px-[50px] bg-[#fff] flex flex-col items-center"
          data-aos="zoom-in-up"
        >
          <FaUser className="text-[45px] text-[#737272]" />
          <h4 className="text-[22px] uppercase font-bold pt-[10px]">
            Corporate Price
          </h4>
          <h4 className="text-[33px] font-bold text-[#e63d53] leading-9">
            $60
          </h4>

          <ul className="pt-[10px] w-full text-[#7b7b7b] uppercase">
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              15 Pages
            </li>
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              40 GB storage
            </li>
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              unlimited data transfer
            </li>
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              100 GB bandwith
            </li>
            <li className="pt-[10px] text-center w-full">Enhanced security</li>
          </ul>
          <button className="lg:font-medium text-[#fff] lg:uppercase bg-[#e63d53] lg:py-[10px] md:py-[8px] py-[7px] lg:px-[40px] md:px-[30px] px-[20px] rounded-md lg:mt-[30px] md:mt-[25px] mt-[22px]">
            Buy Now
          </button>
        </div>
        <div
          className="py-[30px] px-[50px] bg-[#fff] flex flex-col items-center"
          data-aos="zoom-in-left"
        >
          <FaTrophy className="text-[45px] text-[#737272]" />
          <h4 className="text-[22px] uppercase font-bold pt-[10px]">
            Premium Price
          </h4>
          <h4 className="text-[33px] font-bold text-[#e63d53] leading-9">
            $120
          </h4>

          <ul className="pt-[10px] w-full text-[#7b7b7b] uppercase">
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              15 Pages
            </li>
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              40 GB storage
            </li>
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              unlimited data transfer
            </li>
            <li className="py-[10px] border-b-[1px] w-full border-[#eeeee] text-center">
              100 GB bandwith
            </li>
            <li className="pt-[10px] text-center w-full">Enhanced security</li>
          </ul>
          <button className="lg:font-medium text-[#fff] lg:uppercase bg-[#e63d53] lg:py-[10px] md:py-[8px] py-[7px] lg:px-[40px] md:px-[30px] px-[20px] rounded-md lg:mt-[30px] md:mt-[25px] mt-[22px]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
