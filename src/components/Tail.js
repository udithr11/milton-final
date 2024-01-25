import React from "react";
import {milton_logo,twitter,fb,linkedin} from "../constants"

const Tail = () => {
  return (
    <div className="bg-gray-300 mt-28">
        <div className="flex justify-center">
      <div className="w-[1200px]  mx-auto  ">
      <div className=" flex -mx-3 cursor-pointer ">
        <img className="rounded-md m-3 h-7 w-7 " alt="triangle" src={milton_logo} />
        <div style={{fontSize:"24px"}} className=" -mx-1 my-2 font-bold">Milton</div>
      </div>
      <p className="text-gray-500 mt-2">A short text explaining <br/>why my startup is so cool</p>
      <p className="text-gray-500 mt-2">© My super start-up</p>
      <div className="flex">
        <img className="my-4" src={twitter} alt="twi"/>
        <img className="my-4 mx-3" src={fb} alt="twi"/>
        <img className="my-4" src={linkedin} alt="twi"/>

      </div>
      <p className=" text-end">All rights will be received by this Sunday!</p>
      <p className=" text-end">Created by John Kattadi</p>


      </div>
      </div>
    </div>
  );
};

export default Tail;
