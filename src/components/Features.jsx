import React from "react";
import FeaturesImage1 from "../assets/RectangleImage1.png";
import FeaturesImage2 from "../assets/RectangleImage2.png";
import FeaturesImage3 from "../assets/RectangleImage3.png";
import FeaturesImage4 from "../assets/RectangleImage4.png";
import FeaturesImage5 from "../assets/RectangleImage5.png";
import FeaturesImage6 from "../assets/RectangleImage6.png";

const Features = () => {
  return (
    <div className="bg-[#22344f] mt-10">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl max-w-xl text-white md:mt-6 font-bold py-10 leading-normal">
            Powerful Features Built <br /> for Smarter Living
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10 mb-16 w-full">
          <div className="bg-white border rounded-bl-[25px] rounded-br-[25px] flex flex-col justify-between h-full">
            <div className="p-4">
              <h2 className="font-bold text-lg text-[#22344f]">
                Resident Access Control
              </h2>
              <p className="text-sm sm:text-md my-2">
                Generate and manage unique access codes for estate entry.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-full max-w-xs"
                src={FeaturesImage1}
                alt="image"
              />
            </div>
          </div>

          <div className="bg-white border rounded-bl-[25px] rounded-br-[25px] flex flex-col justify-between h-full">
            <div className="p-4">
              <h2 className="font-bold text-lg text-[#22344f]">
                Emergency Alerts
              </h2>
              <p className="text-sm sm:text-md my-2">
                Instantly notify security personnel and administrators in case
                of emergencies.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-full"
                src={FeaturesImage2}
                alt="Emergency Alerts"
              />
            </div>
          </div>

          <div className="bg-white border rounded-bl-[25px] rounded-br-[25px] flex flex-col justify-between h-full">
            <div className="p-4">
              <h2 className="font-bold text-lg text-[#22344f]">
                Home Service Booking
              </h2>
              <p className="text-sm sm:text-md my-2">
                Book trusted providers — cleaners, plumbers, electricians, and
                more.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-full"
                src={FeaturesImage3}
                alt="Home Service Booking"
              />
            </div>
          </div>

          <div className="bg-white border rounded-bl-[25px] rounded-br-[25px] flex flex-col justify-between h-full">
            <div className="p-4">
              <h2 className="font-bold text-lg text-[#22344f]">
                Broadcast Messaging
              </h2>
              <p className="text-sm sm:text-md my-2">
                Send announcements, updates, and notices to all or selected
                residents.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-full"
                src={FeaturesImage4}
                alt="Broadcast Messaging"
              />
            </div>
          </div>

          <div className="bg-white border rounded-bl-[25px] rounded-br-[25px] flex flex-col justify-between h-full">
            <div className="p-4">
              <h2 className="font-bold text-lg text-[#22344f]">
                Lost & Found System
              </h2>
              <p className="text-sm sm:text-md my-2">
                Submit and track lost item claims securely within the app.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-full"
                src={FeaturesImage5}
                alt="Lost and Found"
              />
            </div>
          </div>

          <div className="bg-white border rounded-bl-[25px] rounded-br-[25px] flex flex-col justify-between h-full">
            <div className="p-4">
              <h2 className="font-bold text-lg text-[#22344f]">
                Private Resident Chat
              </h2>
              <p className="text-sm sm:text-md my-2">
                End-to-end encrypted communication between verified estate
                residents.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-full"
                src={FeaturesImage6}
                alt="Private Chat"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
