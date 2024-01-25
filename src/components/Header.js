import React from "react";
import { milton_logo } from "../constants.js";
import "../App.css";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 justify-center custom_colour z-50">
    <div className="w-[1200px]  mx-auto ">
    <div className="h-20  flex items-center justify-between">
      <div className=" flex  cursor-pointer ">
        <img className="rounded-md  h-6 w-6 " alt="triangle" src={milton_logo} />
        <div className="mx-1 font-bold">Milton</div>
      </div>
      <div className=" flex  justify-items-center justify-center font-bold text-gray-500">
        <a className="m-2 p-2 cursor-pointer" href="#features">Features</a>
        <a className="m-2 p-2 cursor-pointer" href="#testimonial">Testimonial</a>
        <a className="m-2 p-2 cursor-pointer" href="#pricing">Pricing</a>
        <a className="m-2 p-2 cursor-pointer" href="#faqs">FAQs</a> 
      </div>
      <div className=" ">
        <button class="bg-gray-100   font-bold py-2 px-4 rounded-xl  transition-transform transform-gpu hover:bg-gray-200 hover:shadow-md hover:scale-110 ">
          Log In
        </button>
        <button className="bg-black  text-white font-bold py-2 px-4 rounded-xl mx-2 transition-transform transform-gpu  hover:shadow-md hover:scale-110">
          Get Started
        </button>
      </div>
    </div>
        </div>

        <div className="h-[1px] w-full border border-b-0"></div>
        </div>
        


  );
};

export default Header;
