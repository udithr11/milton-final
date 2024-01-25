import React from "react";
import Accordion from "../utils/Accordion";
import { logo_last } from "../constants";

const Faqs = () => {
  return (
    <div>
      <div>
        <div  className="mt-16 flex items-center justify-center">
          <div className="font-bold items-center bg-gray-100 rounded-full p-2 w-60 text-center">
            Relevant stuff, bla bla 📣
          </div>
        </div>
        <p
          style={{ fontSize: "56px" }}
          className="font-bold text-center text-slate-800"
        >
          Frequently asked questions
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Accordion />
      </div>
      <div className="mt-[160px] flex items-center justify-center">
        <div className="font-bold items-center bg-gray-100 rounded-full p-2 w-60 text-center">
          Last call Baby! 🚀
        </div>
      </div>
      <p
        style={{ fontSize: "56px" }}
        className="font-bold text-center text-slate-800"
      >
        Ready to start?
      </p>

      <div>
        <p className="text-xl flex justify-center text-gray-500 mt-10">
          Here is your last chance to explain how cool your app is. Focus
        </p>
        <p className="text-xl flex justify-center text-gray-500 mt-2 ">
          on the benefits for your users, not on the features.
        </p>
      </div>
      <div className="flex justify-center py-10">
        <button className="bg-slate-800  text-white font-bold py-4 px-6 rounded-xl transition-transform transform-gpu  hover:shadow-md hover:scale-110">
          Get Started,it's free
        </button>
      </div>

      <div className="flex items-center justify-center -mt-6">
  <div className="mx-auto items-center justify-center ">
    <div
      style={{ fontSize: "16px" }}
      className="font-bold bg-orange-200 ml-20 w-[372px] mt-5 text-center p-3 rounded-t-2xl rounded-br-2xl rounded-bl-sm"
    >
      <p className="text-left">
        I never missed a call again, the AI-<br/>driven feature is a game changer for me!
      </p>
      <p className="text-neutral-600 mt-2 text-left">Adam, Solo founder</p>
    </div>

    <img alt="avatarLogo6" src={logo_last} className="h-20 w-20" />
  </div>
</div>

    </div>
  );
};

export default Faqs;
