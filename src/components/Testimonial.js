import React from "react";
import "../App.css";
import { avatarT1 } from "../constants";
import Rating from "../utils/Rating";

const list=['a','b','c','d','e','f','g','h','i']

const Testimonial = ({speed=5000}) => {
  return (
    <div>
      <div>
        <div className="mt-16 flex items-center justify-center">
          <div className="font-bold items-center bg-gray-100 rounded-full p-2 w-[20rem] text-center">
            They already love our products 😍
          </div>
        </div>
        <p
          style={{ fontSize: "56px" }}
          className="font-bold text-center text-slate-800"
        >
          See what our users say about us
        </p>
      </div>

      <div className="flex">
        <div className="w-[506px] bg-white rounded-lg m-4">
          <div className="flex">
            <img className="p-3" alt="avatarT1" src={avatarT1} />
            <p className="mt-5 font-semibold">No more forgotten appointments</p>
            <div className="flex-grow flex justify-end items-center mx-2">
              <Rating rating={5} />
            </div>
          </div>
          <p className="p-3 text-slate-500 -mt-3">
          I'm not the most organized person, but this app has made it so <br/>easy for me to stay on top of things! I love how I can set <br/>reminders and get notifications, and it's really helped me.
          </p>
          <div className="flex justify-between">
              <p className="p-3 font-medium">Michel O Neil</p>
              <p className="p-3 text-slate-500">CEO of RoastingOS</p>
            </div>
        </div>

        <div className="w-[506px] bg-white rounded-lg m-4">
          <div className="flex">
            <img className="p-3" alt="avatarT1" src={avatarT1} />
            <p className="mt-5 font-semibold">“Saves me time”</p>
            <div className="flex-grow flex justify-end items-center mx-2">
              <Rating rating={5} />
            </div>
          </div>
          <p className="p-3 text-slate-500 -mt-3">
          Since I started using this app, I've saved so much time. I no <br/>longer have to manually add appointments or set reminders - <br/>it's all done for me!          </p>
          <div className="flex justify-between -mt-3">
            <p className="p-3 font-medium">Annie Devy</p>
            <p className="p-3 text-slate-500">Head of sales</p>
          </div>
        </div>


        <div className="w-[506px] bg-white rounded-lg m-4">
          <div className="flex">
            <img className="p-3" alt="avatarT1" src={avatarT1} />
            <p className="mt-5 font-semibold">“Better than the rest”</p>
            <div className="flex-grow flex justify-end items-center mx-2">
              <Rating rating={5} />
            </div>
          </div>
          <p className="p-3 text-slate-500 -mt-3">
          I've tried a lot of calendar apps, but this one is by far the best!<br/> It's so intuitive and customizable, and it has all the features I <br/>need. Game changer!
          </p>
          <div className="flex justify-between -mt-3">
            <p className="p-3 font-medium">Kyle Conord </p>
            <p className="p-3 text-slate-500">Designer</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-[506px] bg-white rounded-lg m-4">
          <div className="flex">
            <img className="p-3" alt="avatarT1" src={avatarT1} />
            <p className="mt-5 font-semibold">No more forgotten appointments</p>
            <div className="flex-grow flex justify-end items-center mx-2">
              <Rating rating={5} />
            </div>
          </div>
          <p className="p-3 text-slate-500 -mt-3">
          I'm not the most organized person, but this app has made it so <br/>easy for me to stay on top of things! I love how I can set <br/>reminders and get notifications, and it's really helped me.
          </p>
          <div className="flex justify-between">
              <p className="p-3 font-medium">Michel O Neil</p>
              <p className="p-3 text-slate-500">CEO of RoastingOS</p>
            </div>
        </div>

        <div className="w-[506px] bg-white rounded-lg m-4">
          <div className="flex">
            <img className="p-3" alt="avatarT1" src={avatarT1} />
            <p className="mt-5 font-semibold">“Saves me time”</p>
            <div className="flex-grow flex justify-end items-center mx-2">
              <Rating rating={5} />
            </div>
          </div>
          <p className="p-3 text-slate-500 -mt-3">
          Since I started using this app, I've saved so much time. I no <br/>longer have to manually add appointments or set reminders - <br/>it's all done for me!          </p>
          <div className="flex justify-between -mt-3">
            <p className="p-3 font-medium">Annie Devy</p>
            <p className="p-3 text-slate-500">Head of sales</p>
          </div>
        </div>


        <div className="w-[506px] bg-white rounded-lg m-4">
          <div className="flex">
            <img className="p-3" alt="avatarT1" src={avatarT1} />
            <p className="mt-5 font-semibold">“Better than the rest”</p>
            <div className="flex-grow flex justify-end items-center mx-2">
              <Rating rating={5} />
            </div>
          </div>
          <p className="p-3 text-slate-500 -mt-3">
          I've tried a lot of calendar apps, but this one is by far the best!<br/> It's so intuitive and customizable, and it has all the features I <br/>need. Game changer!
          </p>
          <div className="flex justify-between -mt-3">
            <p className="p-3 font-medium">Kyle Conord </p>
            <p className="p-3 text-slate-500">Designer</p>
          </div>
        </div>
      </div>
         

    </div>
  );
};

export default Testimonial;
