import React from "react";

//herosection
import appleLink from "../assets/apple.png";
import googlePlayLink from "../assets/googleplay.png";
import iphone15 from "../assets/iphone15-home.png";

// product section
import backgroundlarge from "../assets/LandScapeBg.png";
import backgroundMobile from "../assets/PortraitBg.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import iphone15pr01 from "../assets/iPhone15frame1.png";
import iphone15pr02 from "../assets/iPhone15frame2.png";
import macbookAir from "../assets/MacBookAirFrame.png";

// features section
import FeaturesImage1 from "../assets/RectangleImage1.png";
import FeaturesImage2 from "../assets/RectangleImage2.png";
import FeaturesImage3 from "../assets/RectangleImage3.png";
import FeaturesImage4 from "../assets/RectangleImage4.png";
import FeaturesImage5 from "../assets/RectangleImage5.png";
import FeaturesImage6 from "../assets/RectangleImage6.png";

//faq section
import { useState } from "react";

//contact form
import HandIphone from "../assets/HandandiPhone.png";

const Home = () => {
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

  //Faq section
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I register on Vaultify?",
      answer:
        "Download the app, choose your role (resident, security, admin), and follow the on-screen registration steps.",
    },
    {
      question: "Is Vaultify available for all estates?",
      answer:
        "Vaultify is available to partnered estates. Ask your estate manager or contact us to request onboarding.",
    },
    {
      question: "How secure is the private chat feature?",
      answer:
        "All resident chats are end-to-end encrypted to ensure privacy and confidentiality.",
    },
    {
      question: "What if I lose an item in the estate?",
      answer:
        'Use the "Lost & Found" feature to report and track lost items. Security will be notified immediately.',
    },
    {
      question: "Can estate management monitor messages?",
      answer:
        "No. Resident chats are encrypted. Only flagged or reported messages may be reviewed if necessary and within legal bounds.",
    },
    {
      question: "Can I pay my estate bills through the app?",
      answer:
        "Yes, Vaultify enables residents to make bill payments and pay annual service charges directly from the app.",
    },
    {
      question: "How does the estate manager track payments?",
      answer:
        "The admin dashboard provides tools to monitor resident dues and generate payment reports.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  //contact form API
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eb030da4-5552-4efa-984f-675f708d9e36");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setTimeout(() => {
      setResult("");
    }, 3000);
  };
  return (
    <div>
      {/* Hero Section */}
      <div id="HeroSection">
        <div className="mt-10 pt-16 sm:mt-20 md:pt-10 xs:pt-10 xss:pt-16 sm:pt-5 lg:pt-20 xl:pt-30 ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-10">
            <div className="flex flex-col justify-center items-center gap-2 px-4 sm:px-6 md:px-8 md:items-start xl:items-start lg:px-6 xl:px-4 text-center ">
              <h1 className="text-sm xs:text-xl xss:text-2xl mt-5 sm:text-3xl md:text-2xl md:mt-0 lg:text-3xl md:text-start xl:text-[42px] xl:text-start font-bold ">
                Smarter Estate Management, <br />
                <span className="text-[#4CA9F3]">Safer Living.</span>
              </h1>

              <p className="text-md xs:text-[13px] xss:text-lg sm:text-base md:text-md lg:text-lg xl:text-start xl:text-2xl leading-relaxed md:text-start text-[#22344f]">
                Vaultify connects residents, security, and estate managers
                through intelligent tools that enhance communication, streamline
                access, ensure safety, and enable easy home service bookings...
                making estate living smarter and more convenient.
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
                href="#contact"
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
      </div>

      {/* Product Section */}
      <div id="product">
        <div className="mt-30 max-w-7xl mx-auto">
          <div className="relative w-full my-10 md:my-10">
            <img
              className="w-full h-[380px] md:h-[450px] object-cover hidden md:block border rounded-[10px]"
              src={backgroundlarge}
              alt="backgroundImage"
            />
            <img
              className="w-full h-[945px] md:h-[450px] sm:h-[450px] object-cover md:hidden border rounded-[20px]"
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
                  access control, enhances security, and streamlines
                  administration for safer, smarter living.
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
                    From secure messaging to emergency alerts, Vaultify promotes
                    a connected and secure living experience.
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
                  residents through end-to-end encrypted messaging, and make
                  bill or annual service charge payments.
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
                  Security staff have access to a dedicated portal where they
                  can validate visitor codes, log entries and exits, respond to
                  emergency alerts, manage lost and found reports, and stay
                  informed about any flagged issues.
                </p>
              </div>
            </div>

            <div className="px-4 sm:px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col justify-center items-start">
                <h2 className="text-2xl lg:text-2xl xl:text-4xl md:text-xl sm:text-3xl font-bold py-4 text-[#22344f]">
                  Everything you need to run your estate — all in one dashboard.
                </h2>
                <p className="text-base sm:text-lg md:text-[15px] lg:text-lg xl:text-xl">
                  Facility managers and administrators use a comprehensive
                  dashboard to monitor estate activity, broadcast messages,
                  manage subscriptions, analyze reports, oversee lost and found
                  claims, moderate inter-resident communications, and track
                  resident dues including bill and annual service charge
                  payments.
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
      </div>

      {/* Features section */}
      <div id="features">
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
                    Instantly notify security personnel and administrators in
                    case of emergencies.
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
                    Book trusted providers — cleaners, plumbers, electricians,
                    and more.
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
      </div>

      {/* Faq section */}
      <div id="faq">
        <div className="max-w-7xl mx-auto px-4 py-10 mt-5 sm:mt-5">
          <div className="flex flex-col items-center justify-center mb-5">
            <h2 className="text-center text-xl sm:text-3xl md:text-3xl pb-5 max-w-xl text-[#22344f] md:mt-6 font-bold leading-normal">
              Frequently Asked Questions
            </h2>
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-[7px] py-5 shadow-lg px-4 mt-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left text-[#22344f] font-semibold text-base sm:text-lg md:text-lg lg:text-xl focus:outline-none"
              >
                {faq.question}
                <span className="w-6 h-6 sm:w-7 ml-2 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-[#7091c6] rounded-full transition-transform duration-1000">
                  <svg
                    className={`text-gray-200 transform transition-transform duration-1000
                w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6
                ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div id="contact">
        <div className="mt-15">
          <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
            <div className="bg-[#22344f] w-full pb-4 pt-6 flex flex-col justify-center items-center">
              <h1 className="text-center mb-2 mt-2 md:mb-4 lg:mb-7 lg:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
                We’d Love to Hear From You
              </h1>
              <h2 className="text-center xss:text-md xs:text-sm xs:w-70 text-md w-80 md:w-full lg:w-full sm:text-lg md:text-2xl lg:text-xl text-white">
                Have questions or ready to learn more? Send us a message.
              </h2>
            </div>

            <div className="bg-[#22344f] md:pb-5 sm:pb-15 lg:pb-5 grid grid-cols-1 sm:grid-cols-2 gap-10 pt-2 sm:pt-10 w-full items-start">
              <div className="bg-white border rounded-[8px] py-8 px-5  shadow-lg mx-4 sm:mx-6 lg:mx-8 self-start">
                <form onSubmit={onSubmit}>
                  <label className="block mb-2 text-sm font-medium text-[#22344f] dark:text-[#22344f]">
                    {" "}
                    Full Name/Estate Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-[#22344f] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                    placeholder="Enter your name"
                    required
                  />
                  <label className="block mt-5 mb-2 text-sm font-medium text-[#22344f] dark:text-[#22344f]">
                    {" "}
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-[#22344f] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                    placeholder="Enter your email"
                    required
                  />
                  <label className="block mt-5 mb-2 text-sm font-medium text-[#22344f] dark:text-[#22344f]">
                    {" "}
                    Your Phone Number
                  </label>
                  <input
                    name="number"
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-[#22344f] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                    placeholder="Enter your phone number"
                    required
                  />
                  <label className="block mt-5 mb-2 text-sm font-medium text-[#22344f] dark:text-[#22344f]">
                    {" "}
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    className="bg-gray-50 border border-gray-300 text-[#22344f] text-sm rounded-lg h-25 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-[#22344f] mt-5 cursor-pointer text-base sm:text-lg text-white font-semibold px-4 py-3 hover:opacity-75 rounded-[10px] transition-all duration-500 text-center block w-[160px] sm:w-auto"
                    style={{
                      boxShadow: "0px 4px 12px rgba(76, 169, 243, 0.7)",
                    }}
                  >
                    Send Message
                  </button>
                </form>
                <span className="mt-4 text-base sm:text-sm md:text-md lg:text-lg xl:text-lg font-medium text-[#7091c6] italic break-words w-full block px-2 py-3">
                  {result}
                </span>
              </div>

              <div className="flex justify-end items-end">
                <img
                  className="w-[350px] h-[500px] sm:h-[500px] md:h-[550px] lg:h-[600px] max-w-[500px] lg:w-[400px] sm:max-w-[600px] md:max-w-[500px]"
                  src={HandIphone}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>{/* <Contact/> */}</div>
    </div>
  );
};

export default Home;
