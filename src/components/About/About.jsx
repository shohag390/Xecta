import { useEffect } from "react";
import { MdMonitor, MdOutlineSettingsSuggest, MdSell } from "react-icons/md";
import image01 from "../../assets/about-img.jpg";
import { PiBroomFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <>
      <div
        className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] md:py-[10vh] py-[8vh]"
        id="about"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h4 className="lg:text-[36px] md:text-[25px] text-[20px] lg:font-bold font-semibold uppercase text-[#000]">
            About <span className="font-normal text-[#e63d53]">XECTA</span>
          </h4>
          <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
            <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
          </div>
          <p className="lg:w-[400px] md:w-[350px] w-[330px] pt-[10px] lg:pb-[50px] sm:pb-[40px] pb-[20px] capitalize text-[#7b7b7b]">
            we firmly believe that everyone should have access to high-quality,
            luxurious
          </p>
        </div>

        <div className="sm:flex sm:justify-between sm:items-center lg:gap-[80px] md:gap-[30px] sm:gap-[20px] overflow-hidden">
          <div className="sm:w-[60%]" data-aos="fade-right">
            <h4 className="lg:text-[28px] md:text-[25px] sm:text-[22px] text-[19px] font-medium capitalize">
              Fusce consequat elit eget
            </h4>
            <p className="lg:pt-[10px] md:pt-[8px] pt-[6px] text-[#7b7b7b] md:line-clamp-4 sm:line-clamp-3">
              Founded in 2020, Xecta is an integrated technology solutions
              provider specializing in advanced AI/ML technology combined with
              domain expertise. We offer digital engineering solutions in a
              user-friendly SaaS product, designed exclusively for the Energy
              Industry. Founded in 2020, Xecta is an integrated technology
              solutions
            </p>
            <div className="flex items-center justify-between lg:pt-[30px] md:pt-[20px] sm:pt-[15px] pt-[10px]">
              <div className="flex flex-col items-center justify-center">
                <MdOutlineSettingsSuggest className="lg:text-[45px] md:text-[40px] sm:text-[30px] text-[25px] text-[#e63d53]" />
                <p className="lg:pt-[10px] md:pt-[8px] pt-[6px] text-center">
                  Mauris convallis felis
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <MdMonitor className="lg:text-[45px] md:text-[40px] sm:text-[30px] text-[25px] text-[#e63d53]" />
                <p className="lg:pt-[10px] md:pt-[8px] pt-[6px] text-center">
                  Mauris convallis felis
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <MdSell className="lg:text-[45px] md:text-[40px] sm:text-[30px] text-[25px] text-[#e63d53]" />
                <p className="lg:pt-[10px] md:pt-[8px] pt-[6px] text-center">
                  Mauris convallis felis
                </p>
              </div>
            </div>
          </div>
          <div
            className="sm:w-[40%] sm:pt-0 pt-[25px] sm:pb-0 pb-[10px]"
            data-aos="fade-left"
          >
            <img
              className="w-full lg:h-[350px] md:h-[280px] sm:h-[250px] h-[240px]"
              src={image01}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] sm:h-[60vh] h-[100%] sm:py-0 py-[30px] w-full bg_about flex items-center justify-end overflow-hidden">
        <div className="md:w-[50%]" data-aos="fade-left">
          <h4 className="lg:text-[25px] md:text-[23px] text-[22px] lg:font-bold font-semibold uppercase text-[#fff] lg:pb-[10px] md:pb-[9px] pb-[8px]">
            DIGITAL MARKETING
          </h4>
          <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
            <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
          </div>
          <p className="lg:pt-[15px] md:pt-[10px] pt-[8px] text-[#fff] lg:line-clamp-5 md:line-clamp-4">
            Founded in 2020, Xecta is an integrated technology solutions
            provider specializing in advanced AI/ML technology combined with
            domain expertise. We offer digital engineering solutions in a
            user-friendly SaaS product, designed exclusively for the Energy
            Industry. Founded in 2020, Xecta is an integrated technology
            solutions Founded in 2020, Xecta is an integrated technology
            solutions
          </p>
          <button className="lg:font-medium text-[#fff] lg:uppercase bg-[#e63d53] lg:py-[10px] md:py-[8px] py-[7px] lg:px-[40px] md:px-[30px] px-[20px] rounded-md lg:mt-[30px] md:mt-[25px] mt-[22px]">
            Read More
          </button>
        </div>
      </div>

      <div className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] sm:h-[60vh] h-[100%] sm:py-0 py-[30px] w-full bg_about_three flex items-center justify-start overflow-hidden">
        <div className="md:w-[50%]" data-aos="fade-right">
          <h4 className="lg:text-[25px] md:text-[23px] text-[22px] lg:font-bold font-semibold uppercase text-[#000] lg:pb-[10px] md:pb-[9px] pb-[8px]">
            MEDIA BUYING
          </h4>
          <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
            <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
          </div>
          <p className="lg:pt-[15px] md:pt-[10px] pt-[8px] text-[#000] lg:line-clamp-5 md:line-clamp-4">
            Founded in 2020, Xecta is an integrated technology solutions
            provider specializing in advanced AI/ML technology combined with
            domain expertise. We offer digital engineering solutions in a
            user-friendly SaaS product, designed exclusively for the Energy
            Industry. Founded in 2020, Xecta is an integrated technology
            solutions Founded in 2020, Xecta is an integrated technology
            solutions
          </p>
          <button className="lg:font-medium text-[#fff] lg:uppercase bg-[#e63d53] lg:py-[10px] md:py-[8px] py-[7px] lg:px-[40px] md:px-[30px] px-[20px] rounded-md lg:mt-[30px] md:mt-[25px] mt-[22px]">
            Read More
          </button>
        </div>
      </div>

      <div className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] sm:h-[60vh] h-[100%] sm:py-0 py-[30px] w-full bg_about_two flex items-center justify-end overflow-hidden">
        <div className="md:w-[50%]" data-aos="fade-left">
          <h4 className="lg:text-[25px] md:text-[23px] text-[22px] lg:font-bold font-semibold uppercase text-[#fff] lg:pb-[10px] md:pb-[9px] pb-[8px]">
            GRAPHIC DESIGN & AD PRODUCTION
          </h4>
          <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
            <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
          </div>
          <p className="lg:pt-[15px] md:pt-[10px] pt-[8px] text-[#fff] lg:line-clamp-5 md:line-clamp-4">
            Founded in 2020, Xecta is an integrated technology solutions
            provider specializing in advanced AI/ML technology combined with
            domain expertise. We offer digital engineering solutions in a
            user-friendly SaaS product, designed exclusively for the Energy
            Industry. Founded in 2020, Xecta is an integrated technology
            solutions Founded in 2020, Xecta is an integrated technology
            solutions
          </p>
          <button className="lg:font-medium text-[#fff] lg:uppercase bg-[#e63d53] lg:py-[10px] md:py-[8px] py-[7px] lg:px-[40px] md:px-[30px] px-[20px] rounded-md lg:mt-[30px] md:mt-[25px] mt-[22px]">
            Read More
          </button>
        </div>
      </div>

      <div className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] sm:h-[60vh] h-[100%] sm:py-0 py-[30px] w-full bg_about_five flex items-center justify-start overflow-hidden">
        <div className="md:w-[50%]" data-aos="fade-right">
          <h4 className="lg:text-[25px] md:text-[23px] text-[22px] lg:font-bold font-semibold uppercase text-[#000] lg:pb-[10px] md:pb-[9px] pb-[8px]">
            Business Support Center
          </h4>
          <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
            <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
          </div>
          <p className="lg:pt-[15px] md:pt-[10px] pt-[8px] text-[#000] lg:line-clamp-5 md:line-clamp-4">
            Founded in 2020, Xecta is an integrated technology solutions
            provider specializing in advanced AI/ML technology combined with
            domain expertise. We offer digital engineering solutions in a
            user-friendly SaaS product, designed exclusively for the Energy
            Industry. Founded in 2020, Xecta is an integrated technology
            solutions Founded in 2020, Xecta is an integrated technology
            solutions
          </p>
          <button className="lg:font-medium text-[#fff] lg:uppercase bg-[#e63d53] lg:py-[10px] md:py-[8px] py-[7px] lg:px-[40px] md:px-[30px] px-[20px] rounded-md lg:mt-[30px] md:mt-[25px] mt-[22px]">
            Read More
          </button>
        </div>
      </div>

      <div className="sm:flex sm:items-center sm:justify-between lg:gap-[50px] md:gap-[30px] sm:gap-[20px] lg:pr-[80px] md:pr-[60px] sm:pr-[30px] overflow-hidden">
        <div className="md:w-[55%] sm:w-[50%] w-full sm:h-[80vh] bg_image_eight h-[30vh]"></div>
        <div
          className="md:w-[45%] sm:w-[50%] w-full sm:px-0 px-[20px] sm:pt-0 pt-[30px] sm:pb-0 pb-[30px]"
          data-aos="fade-left"
        >
          <h4 className="lg:text-[25px] md:text-[23px] text-[22px] lg:font-bold font-semibold uppercase text-[#000]">
            Amazing <span className="font-normal text-[#e63d53]">Features</span>
          </h4>
          <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
            <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
          </div>
          <p className="lg:w-[400px] md:w-[350px] w-[330px] pt-[10px] lg:pb-[30px] sm:pb-[25px] pb-[20px] capitalize text-[#7b7b7b]">
            we firmly believe that everyone should have access.
          </p>
          <div className="flex flex-col lg:gap-[30px] sm:gap-[15px] gap-[10px]">
            <div className="flex items-center justify-between lg:gap-[30px] md:gap-[20px] gap-[15px]">
              <div>
                <div className="lg:h-[80px] md:h-[60px] h-[50px] lg:w-[80px] md:w-[60px] w-[50px] bg-[#e63d53] rounded-full flex items-center justify-center md:text-[30px] text-[25px] text-[#fff]">
                  <PiBroomFill />
                </div>
              </div>
              <div>
                <h6 className="md:text-[22px] sm:text-[20px] text-[18px] sm:font-medium font-bold line-clamp-1">
                  First Feature goes here!
                </h6>
                <p className="text-[#7b7b7b] capitalize lg:line-clamp-3 line-clamp-2">
                  we firmly believe that everyone should have access to
                  high-quality, luxurious products that don't come.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between lg:gap-[30px] md:gap-[20px] gap-[15px]">
              <div>
                <div className="lg:h-[80px] md:h-[60px] h-[50px] lg:w-[80px] md:w-[60px] w-[50px] bg-[#e63d53] rounded-full flex items-center justify-center md:text-[30px] text-[25px] text-[#fff]">
                  <FaCode />
                </div>
              </div>
              <div>
                <h6 className="md:text-[22px] sm:text-[20px] text-[18px] sm:font-medium font-bold line-clamp-1">
                  Second Feature goes here!
                </h6>
                <p className="text-[#7b7b7b] capitalize lg:line-clamp-3 line-clamp-2">
                  we firmly believe that everyone should have access to
                  high-quality, luxurious products that don't come.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between lg:gap-[30px] md:gap-[20px] gap-[15px]">
              <div>
                <div className="lg:h-[80px] md:h-[60px] h-[50px] lg:w-[80px] md:w-[60px] w-[50px] bg-[#e63d53] rounded-full flex items-center justify-center md:text-[30px] text-[25px] text-[#fff]">
                  <IoIosSend />
                </div>
              </div>
              <div>
                <h6 className="md:text-[22px] sm:text-[20px] text-[18px] sm:font-medium font-bold line-clamp-1">
                  Third Feature goes here!
                </h6>
                <p className="text-[#7b7b7b] capitalize lg:line-clamp-3 line-clamp-2">
                  we firmly believe that everyone should have access to
                  high-quality, luxurious products that don't come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
