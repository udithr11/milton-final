import React, { useState } from "react";
import { tick } from "../constants";

const Pricing = () => {
  const [price, setPrice] = useState(true);
  const [focus, setFocus] = useState(1);
  const styless={
    backgroundColor: 'rgb(255, 255, 255)',
  transform: 'translateY(-50%)',
  borderRadius:'6px',
  width:'150px',
  height:'35px'
  }

  return (
    <div className="mb-20">
      <div>
        <div className="mt-16 flex items-center justify-center">
          <div className="font-bold items-centerrounded-full p-2 w-60 text-center">
            Pricing and plans 💰{" "}
          </div>
        </div>
        <p
          style={{ fontSize: "56px" }}
          className="font-bold text-center text-slate-800"
        >
          Find the best plan for your needs
        </p>
      </div>

      <div className="mt-5" >
        <div className="mt-[200px] flex items-center justify-center">
          <div className="font-bold items-centerrounded-full p-2 h-10 rounded-xl text-center -mt-20" style={{backgroundColor:'rgb(243, 243, 243)'}}>
            <button
              className="m-3"
              onClick={() => {
                setPrice(true);
                setFocus(1)
              }}
              style={{...styless,backgroundColor:focus===1&&'white'}}
              

            >
              Monthly
            </button>
            <button
              className="m-3 "
              onClick={() => {
                setPrice(false);
                setFocus(2)
              }}
              style={{...styless,backgroundColor:focus===2&&'white'}}

 
            >
              Annually
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1200px] flex mx-auto justify-center">
        <div className="w-1/3 m-3 flex-col ">
          <div className="  p-8  bg-white rounded-xl h-[686px]">
            <div className="font-bold items-center bg-gray-200 rounded-full p-2 w-[90px] text-center">
              Free
            </div>
            <p className="mt-4 text-gray-500">
              So you can see how incredible our tool is.
            </p>
            <div className="flex">
              <p style={{ fontSize: "56px" }} className="mt-4 font-bold">
                $0
              </p>
              <p className="mt-14 text-gray-500 font-semibold">/mo</p>
            </div>

            <p className="text-gray-800">Free for ever</p>

            <div className="flex justify-center  py-10">
              <button className="bg-slate-800 w-[345px] text-white font-bold py-4 px-6 rounded-xl transition-transform transform-gpu  hover:shadow-md hover:scale-110">
                Get Started
              </button>
            </div>
            <p style={{ fontSize: "12px" }} className="text-center -mt-8">
              No credit card needed
            </p>
            <p style={{ fontSize: "16px" }} className="mt-8">
              What's included:
            </p>
            <div className="mx-5">
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A cool feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A basic feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A top feature with limitations</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">An incredible feature so useful</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A top feature</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 m-3 flex-col ">
          <div className="  p-8  bg-white rounded-xl h-[686px]">
            <div className="font-bold items-center bg-orange-200 rounded-full p-2 w-[100px] text-center">
              Starter
            </div>
            <p className="mt-4 text-gray-500">
              So you can see how incredible our tool is.
            </p>

            {price===true?(<><div className="flex">
              <p style={{ fontSize: "56px" }} className="mt-4 font-bold">
                $19
              </p>
              <p className="mt-14 text-gray-500 font-semibold">/mo</p>
            </div>
            <p className="text-gray-800">Billed monthly</p></> ):(<><div className="flex">
            <p style={{ fontSize: "56px" }} className="mt-4 font-bold">
              $15
            </p>
            <p className="mt-14 text-gray-500 font-semibold">/mo</p>
          </div>
          <p className="text-gray-800">Billed $180 yearly</p></>)}
            

              




            <div className="flex justify-center  py-10">
              <button className="bg-slate-800 w-[345px] text-white font-bold py-4 px-6 rounded-xl transition-transform transform-gpu  hover:shadow-md hover:scale-110">
                Get Started
              </button>
            </div>
            <p style={{ fontSize: "12px" }} className="text-center -mt-8">
              7 days free trial no credit card needed
            </p>
            <p style={{ fontSize: "16px" }} className="mt-8">
              All Free features, plus:
            </p>
            <div className="mx-5">
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A cool feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A basic feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A top feature with limitations</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">An incredible feature so useful</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A top feature</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 m-3 flex-col ">
          <div className="  p-8  bg-white rounded-xl">
            <div className="font-bold items-center bg-rose-200 rounded-full p-2 w-[80px] text-center">
              Pro
            </div>
            <p className="mt-4 text-gray-500">
              So you can see how incredible our tool is.
            </p>




            {price===true?(<><div className="flex">
              <p style={{ fontSize: "56px" }} className="mt-4 font-bold">
                $49
              </p>
              <p className="mt-14 text-gray-500 font-semibold">/mo</p>
            </div>
            <p className="text-gray-800">Billed monthly</p></> ):(<><div className="flex">
            <p style={{ fontSize: "56px" }} className="mt-4 font-bold">
              $45
            </p>
            <p className="mt-14 text-gray-500 font-semibold">/mo</p>
          </div>
          <p className="text-gray-800">Billed $540 yearly</p></>)}





            <div className="flex justify-center  py-10">
              <button className="bg-slate-800 w-[345px] text-white font-bold py-4 px-6 rounded-xl transition-transform transform-gpu  hover:shadow-md hover:scale-110">
                Get Started
              </button>
            </div>
            <p style={{ fontSize: "12px" }} className="text-center -mt-8">
              7 days free trial no credit card needed
            </p>
            <p style={{ fontSize: "16px" }} className="mt-8">
              All Starter features, plus:
            </p>
            <div className="mx-5">
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A cool feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A basic feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A top feature with limitations</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">An incredible feature so useful</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A premium feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">You need this feature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
