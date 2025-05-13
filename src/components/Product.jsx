import React from "react";
import backgroundlarge from "../assets/LandScapeBg.png";
import backgroundMobile from "../assets/PortraitBg.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import iphone15pr01 from "../assets/iPhone15frame1.png";
import iphone15pr02 from "../assets/iPhone15frame2.png";
import macbookAir from "../assets/MacBookAirFrame.png";

const Product = () => {
  return (
    <div className="mt-30 max-w-7xl mx-auto">
      <div className="relative w-full my-10 md:my-10">
        <img
          className="w-full h-[380px] md:h-[450px] object-cover hidden md:block border rounded-[10px]"
          src={backgroundlarge}
          alt="backgroundImage"
        />
        <img
          className="w-full h-[960px] md:h-[450px] sm:h-[450px] object-cover md:hidden border rounded-[20px]"
          src={backgroundMobile}
          alt="backgroundImage"
        />
        <div className="absolute inset-0 px-4 py-8 sm:px-6 md:px-8 md:py-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl md:text-3xl sm:text-2xl mb-4 text-center lg:text-4xl font-bold text-white my-5 ">
              What is Vaultify?
            </h1>
            <p className="text-white xs:text-sm xs:max-w-[70rem] xss:max-w-[60rem] xss:text-xl text-xl text-center text-base sm:text-lg md:text-xl max-w-[60rem]">
              Vaultify is a smart estate management platform that simplifies
              access control, enhances security, and streamlines administration
              for safer, smarter living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
            <div className="bg-white border rounded-[15px] p-3">
              <div className="my-2">
                <img
                  className="h-10 md:h-9 lg:h-12 sm:h-9 object-contain"
                  src={icon1}
                  alt="icon"
                />
              </div>
              <h2 className="font-bold text-lg md:text-sm sm:text-sm text-[#22344f]">
                Smart Estate Management
              </h2>
              <p className="text-md md:text-sm my-2 sm:text-sm">
                Vaultify simplifies estate operations by streamlining access
                control and enhancing day-to-day communication.
              </p>
            </div>

            <div className="bg-white border rounded-[15px] p-3">
              <div className="my-2">
                <img
                  className="h-10 md:h-9 lg:h-12 sm:h-9 object-contain"
                  src={icon2}
                  alt="icon"
                />
              </div>
              <h2 className="font-bold text-lg md:text-sm sm:text-sm text-[#22344f]">
                Built for Everyone
              </h2>
              <p className="text-md my-2 md:text-sm sm:text-sm">
                Designed for residents, security teams, and estate
                managers—Vaultify offers user-friendly tools for every
                stakeholder.
              </p>
            </div>
            
            <div className="bg-white border rounded-[15px] p-3">
              <div className="my-2">
                <img
                  className="h-10 md:h-9 lg:h-12 sm:h-9 object-contain"
                  src={icon3}
                  alt="icon"
                />
              </div>
              <h2 className="font-bold text-lg sm:text-sm md:text-sm text-[#22344f]">
                Safer, Smarter Living
              </h2>
              <p className="text-md my-2 md:text-sm sm:text-sm">
                From secure messaging to emergency alerts, Vaultify promotes a
                connected and secure living experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:mt-0 mt-20">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-4xl font-bold py-4 text-[#22344f]">
              You + Vaultify = Smarter Estate Living
            </h2>
            <p className="text-base md:text-[15px] lg:text-lg xl:text-xl sm:text-lg">
              Residents can generate visitor access codes, receive community
              updates, send emergency alerts, manage their personal details,
              report lost and found items, communicate privately with fellow
              residents through end-to-end encrypted messaging, and make bill or
              annual service charge payments.
            </p>
          </div>
          <div className="flex justify-center items-center px-0">
            <img
              className="w-full h-[500px] sm:h-[500px] md:h-[380px] lg:h-[500px] xl:h-[600px] max-w-[500px] sm:max-w-[600px] md:max-w-[500px]"
              src={iphone15pr01}
              alt="Vaultify App"
            />
          </div>
        </div>

        <div className="px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full h-[500px] sm:h-[500px] md:h-[380px] lg:h-[500px] xl:h-[600px] max-w-[500px] sm:max-w-[600px] md:max-w-[500px]"
              src={iphone15pr02}
              alt="Vaultify App"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <h2 className="text-2xl lg:text-2xl xl:text-4xl md:text-xl sm:text-3xl font-bold py-4 text-[#22344f]">
              We built tools to help security teams work smarter.
            </h2>
            <p className="text-base sm:text-lg md:text-[15px] lg:text-lg xl:text-xl">
              Security staff have access to a dedicated portal where they can
              validate visitor codes, log entries and exits, respond to
              emergency alerts, manage lost and found reports, and stay informed
              about any flagged issues.
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-2xl lg:text-2xl xl:text-4xl md:text-xl sm:text-3xl font-bold py-4 text-[#22344f]">
              Everything you need to run your estate — all in one dashboard.
            </h2>
            <p className="text-base sm:text-lg md:text-[15px] lg:text-lg xl:text-xl">
              Facility managers and administrators use a comprehensive dashboard
              to monitor estate activity, broadcast messages, manage
              subscriptions, analyze reports, oversee lost and found claims,
              moderate inter-resident communications, and track resident dues
              including bill and annual service charge payments.
            </p>
          </div>
          <div>
            <img
              className="w-full h-[500px] sm:h-[500px] md:h-[380px] lg:h-[500px] xl:h-[600px] max-w-[500px] sm:max-w-[600px] md:max-w-[500px]"
              src={macbookAir}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
