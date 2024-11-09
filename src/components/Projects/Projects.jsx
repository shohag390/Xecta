import { useEffect } from "react";
import image1 from "../../assets/one.jpg";
import image2 from "../../assets/two.jpg";
import image3 from "../../assets/three.jpg";
import image4 from "../../assets/four.jpg";
import image5 from "../../assets/five.jpg";
import image6 from "../../assets/six.jpg";
import image7 from "../../assets/seven.jpg";
import image8 from "../../assets/eight.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const project = [
  {
    image: image1,
    name: "App Design",
    description: "App design is the process of creating.",
  },
  {
    image: image2,
    name: "Web Develope",
    description: "Web developers create functional, user.",
  },
  {
    image: image3,
    name: "Development",
    description: "Software development is the process of.",
  },
  {
    image: image4,
    name: "Graphic Design",
    description: "Graphic design is a profession, academic .",
  },
  {
    image: image5,
    name: "Digital Marketing",
    description: "Digital marketing is the use of websites.",
  },
  {
    image: image6,
    name: "Cpa Marketing",
    description: "CPA marketing, or cost per action marketing.",
  },
  {
    image: image7,
    name: "Youtube Marketing",
    description: "YouTube marketing is the practice of promoting.",
  },
  {
    image: image8,
    name: "Fiverr Marketing",
    description: "Use keywords: Use keywords that are relevant to your .",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <div className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] md:py-[10vh] py-[8vh] bg-[#fff]">
      <div className="flex flex-col items-center justify-center text-center">
        <h4 className="lg:text-[36px] md:text-[25px] text-[20px] lg:font-bold font-semibold uppercase text-[#000]">
          Recent <span className="font-normal text-[#e63d53]">Projects</span>
        </h4>
        <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
          <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
        </div>
        <p className="lg:w-[400px] md:w-[350px] w-[330px] pt-[10px] lg:pb-[50px] sm:pb-[40px] pb-[20px] capitalize text-[#7b7b7b]">
          we firmly believe that everyone should have access to high-quality,
          luxurious
        </p>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-4 sm:grid-cols-2 md:gap-[30px] sm:gap-[30px] gap-[20px]">
        {project.map((item, index) => {
          return (
            <div
              key={index}
              className="overflow-hidden relative h-[300px] w-full cursor-pointer flex items-center justify-center card"
              data-aos="flip-right"
            >
              <img
                className="absolute w-full h-full duration-500 image"
                src={item?.image}
                alt=""
              />
              <div className="contant absolute duration-500 p-[38px]">
                <div className="bg-[#fff] h-full w-full flex items-center justify-center flex-col p-[15px] text-content">
                  <h4 className="text-[18px] font-bold">{item?.name}</h4>
                  <p className="w-full text-center capitalize text-[#7b7b7b] text-[14px]">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
