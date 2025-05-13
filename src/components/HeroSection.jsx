import React from "react";
import appleLink from "../assets/apple.png";
import googlePlayLink from "../assets/googleplay.png";
import iphone15 from "../assets/iphone15-home.png"; 

const HeroSection = () => {
  const rotatingIcons = [
    {
      id: 1,
      icon: "🔐",
      size: "w-[200px] h-[200px]",
      offset: "top-0 left-1/2 -translate-x-1/2",
    },
    {
      id: 2,
      icon: "🏡",
      size: "w-[160px] h-[160px]",
      offset: "top-0 left-1/2 -translate-x-1/2",
    },
    {
      id: 3,
      icon: "🚨",
      size: "w-[160px] h-[160px]",
      offset: "bottom-0 left-1/2 -translate-x-1/2",
    },
    {
      id: 4,
      icon: "⏱️",
      size: "w-[200px] h-[200px]",
      offset: "bottom-0 left-1/2 -translate-x-1/2",
    },
    {
      id: 5,
      icon: "🚘",
      size: "w-[160px] h-[160px]",
      offset: "bottom-0 left-1/2 -translate-x-1/2",
    },
    {
      id: 6,
      icon: "👮‍♀️",
      size: "w-[160px] h-[160px]",
      offset: "top-0 left-1/2 -translate-x-1/2",
    },
  ];
  return (
    <div className="mt-10 pt-16 sm:mt-20 md:pt-10 xs:pt-10 xss:pt-16 sm:pt-5 lg:pt-20 xl:pt-30 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-10">
        <div className="flex flex-col justify-center items-center gap-2 px-4 sm:px-6 md:px-8 md:items-start xl:items-start lg:px-6 xl:px-4 text-center ">
          <h1 className="text-sm xs:text-xl xss:text-2xl mt-5 sm:text-3xl md:text-2xl md:mt-0 lg:text-3xl md:text-start xl:text-[42px] xl:text-start font-bold ">
            Smarter Estate Management, <br />
            <span className="text-[#4CA9F3]">Safer Living.</span>
          </h1>

          <p className="text-md xs:text-[13px] xss:text-lg sm:text-base md:text-md lg:text-lg xl:text-start xl:text-2xl leading-relaxed md:text-start text-[#22344f]">
            Vaultify connects residents, security, and estate managers through
            intelligent tools that enhance communication, streamline access,
            ensure safety, and enable easy home service bookings... making
            estate living smarter and more convenient.
          </p>

          <div className="flex sm:flex-row justify-center items-center sm:justify-start gap-5 mt-6 md:mt-2 w-full sm:w-auto">
            <div className="bg-[#22344f] rounded-[10px] sm:gap-20 w-30 sm:w-35 md:w-30">
              <a href="#">
                <img
                  className="w-full h-auto"
                  src={appleLink}
                  alt="apple store"
                />
              </a>
            </div>
            <div className="bg-[#22344f] rounded-[10px] w-30 sm:w-35 md:w-30">
              <a href="#">
                <img
                  className="w-full h-auto"
                  src={googlePlayLink}
                  alt="google play store"
                />
              </a>
            </div>
          </div>

          <a
            href="#"
            className="bg-[#22344f] md:mt-2 mt-5 cursor-pointer text-sm sm:text-lg text-white font-semibold px-2 py-2 md:px-2 md:py-2 hover:opacity-75 rounded-[10px] transition-all duration-500 text-center block w-[160px] sm:w-auto"
            style={{ boxShadow: "0px 4px 12px rgba(76, 169, 243, 0.7)" }}
          >
            Book a Demo
          </a>
        </div>

        {/* Phone Image and Rotating Icons */}
        <div>
          <div className="relative mt-8 w-full max-w-[250px] xs:max-w-[210px] xss:max-w-[250px] sm:max-w-[360px] md:max-w-[280px] lg:max-w-[350px] xl:max-w-[380px] aspect-square mx-auto">
            {/* Outer Circle */}
            <div className="absolute inset-0 border border-dashed border-slate-300 rounded-full" />

            {/* Middle Circle */}
            <div className="absolute inset-[12.5%] border border-dashed border-slate-300 rounded-full" />

            {/* Rotating Icons */}
            {rotatingIcons.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 flex items-center justify-center animate-spin-slow`}
                style={{
                  animationDuration: `${15 + index * 2}s`,
                  animationDirection: index % 2 === 0 ? "normal" : "normal",
                }}
              >
                <div
                  className={`absolute ${item.offset} w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-all`}
                >
                  {item.icon}
                </div>
              </div>
            ))}

            {/* Phone Image */}
            <img
              src={iphone15}
              alt="Phone UI"
              className="absolute top-1/2 left-1/2 w-[97%] sm:w-[65%] md:w-[70%] -translate-x-1/2 -translate-y-1/2 z-20 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
