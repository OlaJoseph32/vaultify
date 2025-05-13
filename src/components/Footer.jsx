import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import appleLink from "../assets/apple.png";
import googlePlayLink from "../assets/googleplay.png";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
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
      setResult("Subscribed 🔔");
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
    <div className="bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto border-b border-[#22344f] flex flex-col md:flex-row justify-between py-10 gap-10 md:gap-0 px-4">
        {/* Left Section - Logo & Description */}
        <div className="w-full ">
          <div className="flex justify-start">
            <a href="#">
              <img
                src={logo1}
                alt="logo"
                className="h-15 w-12 md:h-16 sm:w-18 sm:h-20 md:w-16 lg:h-20 lg:w-20"
              />
            </a>
          </div>
          <p className="mt-4 text-sm md:text-base text-[#22344f] w-full max-w-[450px] md:max-w-[345px] lg:max-w-[400px] leading-relaxed">
            Simplify estate living with <strong>Vaultify</strong>. Download the
            app to manage your gate access, receive instant alerts, and keep
            your estate connected and secure — anytime, anywhere.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-[#22344f] rounded-[10px] w-32">
              <a href="#">
                <img
                  className="w-full h-auto"
                  src={appleLink}
                  alt="apple store"
                />
              </a>
            </div>
            <div className="bg-[#22344f] rounded-[10px] w-32">
              <a href="#">
                <img
                  className="w-full h-auto"
                  src={googlePlayLink}
                  alt="google play store"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Middle + Right Section */}
        <div className="w-full flex flex-col sm:flex-col md:flex-row gap-4 sm:gap-10 md:gap-10 grow-1">
          {/* Company Links */}
          <div className="grow-1">
            <h2 className="font-bold mb-2">Company</h2>
            <ul className="text-sm space-y-2">
              <li className="hover:font-semibold hover:cursor-pointer hover:text-[#22344f]/80 transition duration-300 ease-in-out">
                <a href="#">Home</a>
              </li>
              <li className="hover:font-semibold hover:cursor-pointer hover:text-[#22344f]/80 transition duration-300 ease-in-out">
                <a href="#">About us</a>
              </li>
              <li className="hover:font-semibold hover:cursor-pointer hover:text-[#22344f]/80 transition duration-300 ease-in-out">
                <a href="#">Products</a>
              </li>
              <li className="hover:font-semibold hover:cursor-pointer hover:text-[#22344f]/80 transition duration-300 ease-in-out">
                <a href="#">Features</a>
              </li>
              <li className="hover:font-semibold hover:cursor-pointer hover:text-[#22344f]/80 transition duration-300 ease-in-out">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info + Social + Newsletter */}
          <div className="grow-1">
            <h2 className="font-bold mb-2 sm:mt-0 mt-0">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p className="flex items-center gap-2 hover:font-semibold hover:cursor-pointer hover:text-[#22344f]/80 transition duration-300 ease-in-out">
                <FaPhoneAlt className="text-[#22344f]" />
                +2348101827746
              </p>
              <a
                className="flex items-center gap-2 hover:font-semibold hover:cursor-pointer hover:text-[#22344f]/80 transition duration-300 ease-in-out"
                href="mailto:contact@vaultify.com"
              >
                <FaEnvelope className="text-[#22344f]" />
                contact@vaultify.com
              </a>
            </div>

            <h2 className="font-bold mt-8">Follow Us</h2>
            <div className="flex gap-5 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61575670216281&mibextid=wwXIfr&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-[#22344f] hover:scale-125 text-2xl hover:opacity-75 transition" />
              </a>
              <a
                href="https://x.com/vaultifybyolaj?s=11&t=L7W1XuqCY028SpddDbcyoQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-[#22344f] hover:scale-125 text-2xl hover:opacity-75 transition" />
              </a>
              <a
                href="https://www.instagram.com/vaultifybyolaj?igsh=MTJubTloYjdyYXZ0Mw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-[#22344f] hover:scale-125 text-2xl hover:opacity-75 transition" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-[#22344f] hover:scale-125 text-2xl hover:opacity-75 transition" />
              </a>
            </div>

            <div className="mt-8">
              <h2 className="font-bold text-[#22344f]">
                Subscribe to our newsletter
              </h2>
              <div className="text-sm space-y-2">
                <div>
                  <form
                    onSubmit={onSubmit}
                    className="flex flex-row sm:flex-row items-start sm:items-center gap-1 pt-1"
                  >
                    <input
                      className="border border-[#22344f] placeholder-gray-500 outline-none w-full md:h-7 sm:max-w-64 h-9 rounded px-2"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                    <button className="bg-[#22344f] hover:opacity-75 font-semibold w-[200px] md:text-xs md:h-7 sm:w-24 h-9 text-white rounded">
                      Subscribe
                    </button>
                  </form>
                  <span className="mt-2 text-base sm:text-sm md:text-md text-[#7091c6] lg:text-lg xl:text-lg font-medium italic break-words w-full block">
                    {result}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="flex flex-col justify-center items-center xss:text-xs xs:text-[10px] text-xs py-2 sm:text-sm md:text-md lg:text-md text-[#22344f]">
          Copyright {currentYear} © Vaultify Technologies Ltd. All Rights
          Reserved.
          <Link
            to="/privacy-policy"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="underline hover:opacity-75 ml-2 font-bold"
          >
            Privacy Policy.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
