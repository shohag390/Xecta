import { useEffect } from "react";
import image1 from "../../assets/team-img1.jpg";
import image2 from "../../assets/team-img2.jpg";
import image3 from "../../assets/team-img3.jpg";
import image4 from "../../assets/team-img4.jpg";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const user = [
  {
    name: "JOHN DOE",
    image: image1,
    position: "Co-Founder",
    socal: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/?mx=2",
      linkdin: "https://www.linkedin.com/",
    },
  },
  {
    name: "JASON DOE",
    image: image2,
    position: "Manager",
    socal: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/?mx=2",
      linkdin: "https://www.linkedin.com/",
    },
  },
  {
    name: "JANE DOE",
    image: image3,
    position: "Designer",
    socal: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/?mx=2",
      linkdin: "https://www.linkedin.com/",
    },
  },
  {
    name: "MARTIN DOE",
    image: image4,
    position: "Developer",
    socal: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/?mx=2",
      linkdin: "https://www.linkedin.com/",
    },
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
      disable: "mobile",
    });
  }, []);
  return (
    <div
      className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] md:py-[10vh] py-[8vh] bg-[#eeeeee]"
      id="team"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h4 className="lg:text-[36px] md:text-[25px] text-[20px] lg:font-bold font-semibold uppercase text-[#000]">
          Our <span className="font-normal text-[#e63d53]">Creative</span> Team
        </h4>
        <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
          <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
        </div>
        <p className="lg:w-[400px] md:w-[350px] w-[330px] pt-[10px] lg:pb-[50px] sm:pb-[40px] pb-[20px] capitalize text-[#7b7b7b]">
          we firmly believe that everyone should have access to high-quality,
          luxurious
        </p>
      </div>

      <div className="grid items-center grid-cols-1 md:grid-cols-4 sm:grid-cols-2 md:gap-[40px] sm:gap-[30px] gap-[20px]">
        {user?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
              data-aos="flip-left"
            >
              <img className="w-full" src={item?.image} alt="image" />
              <h4 className="text-[#e63d53] font-bold text-[20px] pt-[5px]">
                {item?.name}
              </h4>
              <p className="capitalize text-[#7b7b7b]">{item?.position}</p>
              <div className="flex items-center justify-center gap-[20px] pt-[12px]">
                <a
                  className="h-[40px] w-[40px] bg-[#bbbaba] text-[#fff] flex items-center justify-center rounded-full hover:bg-[#e63d53] duration-500 hover:translate-y-[-5px]"
                  href={item?.socal?.facebook}
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="h-[40px] w-[40px] bg-[#bbbaba] text-[#fff] flex items-center justify-center rounded-full hover:bg-[#e63d53] duration-500 hover:translate-y-[-5px]"
                  href={item?.socal?.twitter}
                  target="_blank"
                >
                  <FaTwitter />
                </a>
                <a
                  className="h-[40px] w-[40px] bg-[#bbbaba] text-[#fff] flex items-center justify-center rounded-full hover:bg-[#e63d53] duration-500 hover:translate-y-[-5px]"
                  href={item?.socal?.linkdin}
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
