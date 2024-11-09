import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { toast } from "react-toastify";

const Contacts = () => {
  const [state, handleSubmit] = useForm("meoqkqvl");
  console.log(state);
  if (state.succeeded) {
    return (
      <div className="h-[100vh] w-[100%] flex flex-col items-center justify-center">
        <h4 className="text-[25px]">Thanks for joining!</h4>
        <p className="text-[18px]">Your Message Successfully Send</p>
        <a
          className="lg:font-medium text-[#fff] lg:uppercase bg-[#e63d53] py-[8px] lg:px-[40px] md:px-[30px] px-[20px] rounded-md mt-[20px]"
          href="/"
        >
          Go Home
        </a>
      </div>
    );
  }
  return (
    <div
      className="lg:px-[80px] md:px-[60px] sm:px-[30px] px-[20px] md:py-[10vh] py-[8vh] bg-[#eeeeee] overflow-hidden"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h4 className="lg:text-[36px] md:text-[25px] text-[20px] lg:font-bold font-semibold uppercase text-[#000]">
          Get a <span className="font-normal text-[#e63d53]">Free</span> Quote
        </h4>
        <div className="md:h-[3px] h-[2px] w-[100px] bg-[#e63d53] flex items-center justify-center">
          <span className="lg:h-[9px] h-[8px] lg:w-[4px] w-[3px] bg-[#e63d53]"></span>
        </div>
        <p className="lg:w-[400px] md:w-[350px] w-[330px] pt-[10px] lg:pb-[50px] sm:pb-[40px] pb-[20px] capitalize text-[#7b7b7b]">
          we firmly believe that everyone should have access to high-quality,
          luxurious
        </p>
      </div>
      <div className="md:flex md:justify-between md:gap-[100px]">
        <div className="md:w-1/2 pb-[30px]">
          <h4 className="text-[30px] font-medium pb-[20px]">
            Contact Information
          </h4>
          <p className="capitalize text-[#7b7b7b]">
            If you have a website, it might not seem like the page you need to
            prioritize, but thats a huge mistake, especially considering that
            it's one of the most valuable pages on your website and,
            typically,one of the most visited site pages.
          </p>

          <div className="pt-[30px] flex flex-col gap-[15px]">
            <div className="flex items-center gap-[15px]">
              <FaPhoneAlt className=" text-[20px] text-[#e63d53]" />
              <p className="">+88 01315-390470</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <MdMarkEmailUnread className=" text-[23px] text-[#e63d53]" />
              <p className="">mdshohaghossen29@gmail.com</p>
            </div>
            <div className="flex items-center gap-[15px]">
              <FaLocationArrow className=" text-[20px] text-[#e63d53]" />
              <p className="">VWGW+MMR, Burapara</p>
            </div>
          </div>
          <div className="pt-[30px]">
            <h6 className="text-[22px] capitalize font-medium">social media</h6>
            <div className="pt-[10px] flex items-center gap-[15px]">
              <div className="h-[40px] w-[40px] bg-[#e63d53] rounded-md flex items-center justify-center">
                <FaFacebookF className="text-[#fff]" />
              </div>
              <div className="h-[40px] w-[40px] bg-[#e63d53] rounded-md flex items-center justify-center">
                <FaInstagram className="text-[#fff]" />
              </div>
              <div className="h-[40px] w-[40px] bg-[#e63d53] rounded-md flex items-center justify-center">
                <FaTwitter className="text-[#fff]" />
              </div>
              <div className="h-[40px] w-[40px] bg-[#e63d53] rounded-md flex items-center justify-center">
                <FaLinkedinIn className="text-[#fff]" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <h4 className="text-[30px] font-medium pb-[20px]">
            Online Support Here
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between gap-[22px] w-full">
              <input
                className="w-full py-[10px] px-[20px] rounded-md border-[1px] border-[#e63d53] mb-[22px] outline-none"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
              <input
                className="w-full py-[10px] px-[20px] rounded-md border-[1px] border-[#e63d53] mb-[22px] outline-none"
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="flex items-center justify-between gap-[22px] w-full">
              <input
                className="w-full py-[10px] px-[20px] rounded-md border-[1px] border-[#e63d53] mb-[22px] outline-none"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <input
                className="w-full py-[10px] px-[20px] rounded-md border-[1px] border-[#e63d53] mb-[22px] outline-none"
                type="text"
                id="phone"
                name="phone"
                placeholder="Your Phone"
              />
            </div>
            <textarea
              className="w-full py-[10px] px-[20px] rounded-md border-[1px] border-[#e63d53] mb-[22px] outline-none"
              rows={4}
              placeholder="Message"
              id="message"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="lg:font-medium text-[#fff] lg:uppercase bg-[#e63d53] lg:py-[10px] md:py-[8px] py-[7px] lg:px-[40px] md:px-[30px] px-[20px] rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
