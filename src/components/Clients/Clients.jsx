import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Clients = () => {
  return (
    <div
      className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] md:py-[10vh] py-[8vh] client_section bg-[#000000bd]"
      id="clients"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h4 className="lg:text-[36px] md:text-[25px] text-[20px] lg:font-bold font-semibold uppercase text-[#ffffff]">
          Testimonials
        </h4>
        <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
          <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
        </div>
        <p className="lg:w-[400px] md:w-[350px] w-[330px] pt-[10px] lg:pb-[50px] sm:pb-[40px] pb-[20px] capitalize text-[#ffffff]">
          we firmly believe that everyone should have access to high-quality,
          luxurious
        </p>
      </div>

      <div className="md:px-[250px] px-[20px] text-[#fff]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="pb-[60px]">
            <p className="text-center pb-[15px] text-[#bdbcbc]">
              "The web developer is responsible for planning and developing
              software solutions and web applications, supporting and
              maintaining a company's websites and digital products. The
              day-to-day work of the web developer highly depends on constantly
              evolving internet innovations."
            </p>
            <h4 className="text-center text-[25px] font-bold">
              Lydia G. Williams
            </h4>
            <p className="text-center text-[14px]">Developer - Company Inc</p>
          </SwiperSlide>
          <SwiperSlide className="pb-[60px]">
            <p className="text-center pb-[15px] text-[#bdbcbc]">
              "A graphic designer creates visual concepts to communicate
              information and ideas. They use design software to combine
              elements like layouts, images, typography, and motion graphics to
              create aesthetically appealing designs. Graphic designers work on
              a variety of projects"
            </p>
            <h4 className="text-center text-[25px] font-bold">
              Kenneth S. Mahaffey
            </h4>
            <p className="text-center text-[14px]">CEO - Company Inc</p>
          </SwiperSlide>
          <SwiperSlide className="pb-[60px]">
            <p className="text-center pb-[15px] text-[#bdbcbc]">
              "Facebook is a website which allows users, who sign-up for free
              profiles, to connect with friends, work colleagues or people they
              don't know, online. It allows users to share pictures, music,
              videos, and articles, as well as their own thoughts and opinions
              with however many people they like."
            </p>
            <h4 className="text-center text-[25px] font-bold">Kris P. Moss</h4>
            <p className="text-center text-[14px]">Co-Founder - Company Inc</p>
          </SwiperSlide>
          <SwiperSlide className="pb-[60px]">
            <p className="text-center pb-[15px] text-[#bdbcbc]">
              "A Certified Public Accountant (CPA) is a licensed accounting
              professional who can work in a variety of sectors, including
              public accounting, business, government, and education. CPAs
              perform a range of duties, including"
            </p>
            <h4 className="text-center text-[25px] font-bold">
              Mayra H. Swett
            </h4>
            <p className="text-center text-[14px]">Designer - Company Inc</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
