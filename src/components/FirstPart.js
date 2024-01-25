import React,{useState} from "react";
import {
  avatar_logo1,
  avatar_logo2,
  avatar_logo3,
  avatar_logo4,
  avatar_logo5,
  features_last,
  black_star_logo,
} from "../constants.js";
import Rating from "../utils/Rating";

const imageList = [
    { id: 1, src: avatar_logo1, hover: false },
    { id: 2, src: avatar_logo2, hover: false },
    { id: 3, src: avatar_logo3, hover: false },
    { id: 4, src: avatar_logo4, hover: false },
    { id: 5, src: avatar_logo5, hover: false },
  ];

const FirstPart = () => {

    const handleMouseEnter = (id) => {
        setImages((prevImages) =>
          prevImages.map((image) =>
            image.id === id ? { ...image, hover: true } : image
          )
        );
      };
    
      const handleMouseLeave = (id) => {
        setImages((prevImages) =>
          prevImages.map((image) =>
            image.id === id ? { ...image, hover: false } : image
          )
        );
      };

      const [images, setImages] = useState(imageList);  
  return (
    <div>
      <div className=" flex justify-center pt-20">
        <div className="font-bold bg-gray-200 rounded-full p-1 w-64 text-center">
          An other way to manage time
        </div>
      </div>
      <div className="font-bold text-center text-slate-800 ">
        <div style={{ fontSize: "80px" }} className="-mt-4">
          Your new favorite
        </div>
        <div style={{ fontSize: "80px" }} className="-mt-9 flex justify-center">
          <div className="mr-4">calendar </div>
          <div className="text-6xl flex items-center ">🗓️</div>
          <div className="ml-4">app</div>
        </div>
      </div>
      <div>
        <p className="text-xl flex justify-center text-gray-500 ">
          Here you should explain how cool your app is. Remember,
        </p>
        <p className="text-xl flex justify-center text-gray-500 ">
          Focus on the benefits for your users, not on the features.
        </p>
      </div>
      <div className="flex justify-center py-10">
        <button className="bg-slate-800  text-white z-10 font-bold py-4 px-6 rounded-xl transition-transform transform-gpu  hover:shadow-md hover:scale-110">
          Get Started,it's free
        </button>
      </div>
      <p className="flex justify-center text-xs text-gray-500 -mt-9">
        Free 14 days trials,no credit card needed
      </p>

      <div className=" flex items-center justify-center mt-8">
      { images.map((image) => (
          <img
            key={image.id}
            alt={`avatar${image.id}`}
            src={image.hover ? black_star_logo : image.src}
            className="w-10 h-10 rounded-full -ml-2"
            onMouseEnter={() => handleMouseEnter(image.id)}
            onMouseLeave={() => handleMouseLeave(image.id)}
          />
        ))}

        <div className="-mt-4 ml-3">
          <Rating rating={5} />
        </div>
        <p className="font-semibold -mt-3 ml-1">5.0</p>
        <p className="text-slate-600 mt-6 -ml-36 pl-2  text-sm  w-44 flex justify-start">
          From 200+ happy users
        </p>
      </div>

     <div className="w-[1200px]  mx-auto">
        <div className="  flex items-center justify-between"> 
        <img
          alt="featuresLast"
          src={features_last}
          className="mt-20 rounded-xl border border-slate-300"
        />
        </div>
     </div>

        
    </div>
  );
};

export default FirstPart;
