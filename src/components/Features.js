import React from "react";
import {
  avatar_logo6,
  calender_logo,
  features_2,
  features_3,
  features_4,
  avatar_logo7,
  avatar_logo8,
  avatar_logo9,
  calender1,
  calender2,
  calender3,
  calender4,
  calender5,
  calender6
} from "../constants";

const Features = () => {
  return (
    <div>
      <div>
        <div  className="mt-16 flex items-center justify-center">
          <div className="font-bold items-center bg-gray-200 rounded-full p-1 w-52 text-center">
            Our main features 🦸🏼
          </div>
        </div>
        <p
          style={{ fontSize: "56px" }}
          className="font-bold text-center text-slate-800"
        >
          Discover your new superpowers
        </p>
      </div>

      <div className="w-[1200px] flex mt-16 mx-auto">
        <div className="w-1/2 flex ">
          <div className=" items-center justify-start ">
            <div className="font-bold items-center bg-orange-200 rounded-full p-2 w-52 text-center ">
              Seamless Scheduling
            </div>
            <p
              style={{ fontSize: "40px" }}
              className="font-bold  text-slate-800 mt-2 text-left"
            >
              Focus on what matters most
            </p>
            <p
              style={{ fontSize: "40px" }}
              className="font-bold text-slate-800 -mt-2"
            >
              for you
            </p>
            <p
              style={{ fontSize: "20px" }}
              className=" text-left text-gray-500 mt-16"
            >
              Effortlessly plan your day with our intuitive drag-and- <br />
              drop interface. Sync with multiple calendar platforms,
              <br /> import events from emails, and add participants with just
              <br /> a few clicks.
            </p>

            <div
              style={{ fontSize: "16px" }}
              className="font-bold bg-zinc-800 ml-20 w-[372px] mt-[50px] text-center p-3 rounded-t-2xl rounded-br-2xl rounded-bl-sm "
            >
              <p className="text-white text-left">
                I love how user-friendly this app is! It's so easy to add events
                and set reminders!
              </p>

              <p className="text-gray-500 mt-2 text-left">
                Carla, Head of Finance
              </p>
            </div>

            <img alt="avatarLogo6" src={avatar_logo6} className="h-20 w-20" />
          </div>
        </div>
        <div className="w-1/2  ">
          <img alt="calenderLogo" src={calender_logo} />
        </div>
      </div>

      <div className="w-[1200px]  flex mt-52 mx-auto">
        <div className="w-1/2  ">
          <img alt="calenderLogo" src={features_2} />
        </div>
        <div className="w-1/2 flex ">
          <div className=" items-center justify-start ">
            <div className="font-bold items-center bg-blue-200 rounded-full p-2 w-56 text-center ">
              Smart Reminders & Task
            </div>
            <p
              style={{ fontSize: "40px" }}
              className="font-bold  text-slate-800 mt-2 text-left"
            >
              Never miss an important
            </p>
            <p
              style={{ fontSize: "40px" }}
              className="font-bold text-slate-800 -mt-2"
            >
              deadline or event again
            </p>
            <p
              style={{ fontSize: "20px" }}
              className=" text-left text-gray-500 mt-16"
            >
              Never miss an important deadline again with our AI-driven
              notifications. Our app intelligently analyzes your schedule <br />
              to prioritize what's most important, keeping you on track <br />
              and ensuring your day is productive and stress-free.
            </p>

            <div
              style={{ fontSize: "16px" }}
              className="font-bold ml-auto bg-zinc-800 mr-20 w-[372px] mt-[50px] text-center p-3 rounded-t-2xl rounded-br-sm rounded-bl-2xl "
            >
              <p className="text-white text-left">
                I love how user-friendly this app is! It's so easy to add events
                and set reminders!
              </p>

              <p className="text-gray-500 mt-2 text-left">Adam, entrepreneur</p>
            </div>

            <img
              alt="avatarLogo6"
              src={avatar_logo7}
              className="h-20 w-20 ml-auto"
            />
          </div>
        </div>
      </div>

      <div className="w-[1200px] flex mt-52 mx-auto">
        <div className="w-1/2 flex ">
          <div className=" items-center justify-start ">
            <div className="font-bold items-center bg-green-200 rounded-full p-2 w-52 text-center ">
              Seamless Scheduling
            </div>
            <p
              style={{ fontSize: "40px" }}
              className="font-bold  text-slate-800 mt-2 text-left"
            >
              Focus on what matters most
            </p>
            <p
              style={{ fontSize: "40px" }}
              className="font-bold text-slate-800 -mt-2"
            >
              for you
            </p>
            <p
              style={{ fontSize: "20px" }}
              className=" text-left text-gray-500 mt-16"
            >
              Effortlessly plan your day with our intuitive drag-and- <br />
              drop interface. Sync with multiple calendar platforms,
              <br /> import events from emails, and add participants with just
              <br /> a few clicks.
            </p>

            <div
              style={{ fontSize: "16px" }}
              className="font-bold bg-zinc-800 ml-20 w-[372px] mt-[50px] text-center p-3 rounded-t-2xl rounded-br-2xl rounded-bl-sm "
            >
              <p className="text-white text-left">
                I've tried a lot of calendar apps, but this one is by far the
                best! It's so intuitive and customizable, and it has all the
                features I need.
              </p>

              <p className="text-gray-500 mt-2 text-left">Annie, Designer </p>
            </div>

            <img alt="avatarLogo6" src={avatar_logo8} className="h-20 w-20" /> 
          </div>
        </div>
        <div className="w-1/2  ">
          <img alt="calenderLogo" src={features_3} />
        </div>
      </div>

      <div className="w-[1200px] flex mt-52 mx-auto">
        <div className="w-1/2  ">
          <img alt="calenderLogo" src={features_4} />
        </div>
        <div className="w-1/2 flex ">
          <div className=" items-center justify-start ">
            <div className="font-bold items-center bg-red-200 rounded-full p-2 w-56 text-center ">
              Smart Reminders & Task
            </div>
            <p
              style={{ fontSize: "40px" }}
              className="font-bold  text-slate-800 mt-2 text-left"
            >
              Never miss an important
            </p>
            <p
              style={{ fontSize: "40px" }}
              className="font-bold text-slate-800 -mt-2"
            >
              deadline or event again
            </p>
            <p
              style={{ fontSize: "20px" }}
              className=" text-left text-gray-500 mt-16"
            >
              Never miss an important deadline again with our AI-driven
              notifications. Our app intelligently analyzes your schedule <br />
              to prioritize what's most important, keeping you on track <br />
              and ensuring your day is productive and stress-free.
            </p>

            <div
              style={{ fontSize: "16px" }}
              className="font-bold ml-auto bg-zinc-800 mr-20 w-[372px] mt-[50px] text-center p-3 rounded-t-2xl rounded-br-sm rounded-bl-2xl "
            >
              <p className="text-white text-left">
                I've recommended this app to all my friends and colleagues!
              </p>

              <p className="text-gray-500 mt-2 text-left">
                Karl, CTO of a cool startup
              </p>
            </div>

            <img
              alt="avatarLogo6"
              src={avatar_logo9}
              className="h-20 w-20 ml-auto"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="mt-[200px] flex items-center justify-center">
          <div className="font-bold items-center bg-gray-200 rounded-full p-1 w-52 text-center">
            And so much more... 💼
          </div>
        </div>
        <p
          style={{ fontSize: "56px" }}
          className="font-bold text-center text-slate-800"
        >
          Our features to make your life
          <br />
          easier
        </p>
      </div>
      <div className="w-[1200px] flex mt-16 mx-auto">
        <div className="w-1/3 flex-col ">
          <div className="flex justify-center items-center h-64 bg-gray-100 rounded-xl">
            <img alt="calender1" src={calender1} className="h-44 " />
          </div>

          <div className="font-bold items-center bg-gray-100 mt-6 rounded-full p-2 w-52 text-center">
            Cross-Device Sync
          </div>
          <p
            style={{ fontSize: "16px" }}
            className=" text-left text-gray-500 mt-6"
          >
            Keep your schedule in sync across all your <br /> devices, ensuring
            seamless access to your <br />
            calendar, events, and tasks wherever you go.
          </p>
        </div>
        <div className="w-1/3 flex-col ml-4 mr-4 ">
          <div className="flex justify-center items-center h-64 bg-gray-100 rounded-xl">
            <img alt="calender1" src={calender2} className="h-44 " />
          </div>

          <div className="font-bold items-center bg-orange-100 mt-6 rounded-full p-2 w-52 text-center">
            Auto Event Import
          </div>
          <p
            style={{ fontSize: "16px" }}
            className=" text-left text-gray-500 mt-6 "
          >
            Automatically import events from emails, social
            <br /> media, and other sources, so you never miss a<br /> beat or
            have to manually input details.
          </p>
        </div>
        <div className="w-1/3 flex-col ">
          <div className="flex justify-center items-center h-64 bg-gray-100 rounded-xl">
            <img alt="calender1" src={calender3} className="h-44 " />
          </div>

          <div className="font-bold items-center bg-blue-100 mt-6 rounded-full p-2 w-52 text-center">
            Task Delegation
          </div>
          <p
            style={{ fontSize: "16px" }}
            className=" text-left text-gray-500 mt-6"
          >
            Easily assign tasks to team members, family, or
            <br /> friends, promoting shared responsibility and <br />
            seamless collaboration.
          </p>
        </div>
      </div>

      <div className="w-[1200px] flex mt-16 mx-auto">
        <div className="w-1/3 flex-col ">
          <div className="flex justify-center items-center h-64 bg-gray-100 rounded-xl">
            <img alt="calender1" src={calender4} className="h-44 " />
          </div>

          <div className="font-bold items-center bg-green-100 mt-6 rounded-full p-2 w-64 text-center">
            Voice Command Integration{" "}
          </div>
          <p
            style={{ fontSize: "16px" }}
            className=" text-left text-gray-500 mt-6"
          >
            Quickly create events, set reminders, or <br /> reschedule
            appointments with voice <br />
            commands, thanks to compatibility with <br />
            popular virtual assistants.
          </p>
        </div>
        <div className="w-1/3 flex-col ml-4 mr-4 ">
          <div className="flex justify-center items-center h-64 bg-gray-100 rounded-xl">
            <img alt="calender1" src={calender5} className="h-44 " />
          </div>

          <div className="font-bold items-center bg-rose-100 mt-6 rounded-full p-2 w-52 text-center">
            Customizable Alerts{" "}
          </div>
          <p
            style={{ fontSize: "16px" }}
            className=" text-left text-gray-500 mt-6 "
          >
            Personalize notification types and timings for <br />
            events, tasks, and goals, ensuring you stay on <br />
            track and informed without feeling
            <br />
            overwhelmed.
          </p>
        </div>
        <div className="w-1/3 flex-col ">
          <div className="flex justify-center items-center h-64 bg-gray-100 rounded-xl">
            <img alt="calender1" src={calender6} className="h-44 " />
          </div>

          <div className="font-bold items-center bg-blue-100 mt-6 rounded-full p-2 w-52 text-center">
            Privacy Protection{" "}
          </div>
          <p
            style={{ fontSize: "16px" }}
            className=" text-left text-gray-500 mt-6"
          >
            Safeguard your personal information and event<br /> details with our
            robust security measures,<br /> including end-to-end encryption and
            optional <br />password protection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
