import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", sectionId: null },
    { name: "About Us", path: "/", sectionId: "HeroSection" },
    { name: "Products", path: "/", sectionId: "product" },
    { name: "Features", path: "/", sectionId: "features" },
    { name: "Contact", path: "/", sectionId: "contact" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path, sectionId) => {
    setIsMenuOpen(false);

    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        if (sectionId) {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:py-0 md:px-6 lg:px-10 xl:px-32 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 shadow-md text-[#22344f] backdrop-blur-sm py-3 md:py-4 lg:py-3 xl:py-4 "
          : "bg-[#22344f] text-[#22344f] py-4 md:py-6 lg:py-3 xl:py-4"
      }`}
    >
      <a href="/" className="flex items-center gap-2">
        <img
          src={isScrolled ? logo1 : logo2}
          alt="logo"
          className="h-10 w-10 md:h-10 md:w-12 lg:h-16 lg:w-16 xl:h-18 xl:w-18"
        />
      </a>

      <div className="hidden md:hidden md:flex lg:flex items-center gap-4 lg:gap-8">
        <div className="hidden md:flex items-center gap-4 lg:gap-4 xl:gap-8">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => handleNavClick(link.path, link.sectionId)}
              className={`group flex flex-col gap-0.5 bg-transparent border-none focus:outline-none ${
                isScrolled
                  ? "text-[#22344f] text-md font-bold"
                  : "font-semibold text-md text-white"
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled ? "bg-gray-700" : "bg-white"
                } h-0.5 w-0 group-hover:w-full transition-all`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNavClick("/", "contact")}
          className={`${
            isScrolled ? "text-white bg-[#22344f]" : "bg-white text-[#22344f]"
          } font-semibold px-4 py-2 ml-4 rounded-[10px] hover:opacity-75`}
        >
          Get Started
        </button>
      </div>

      <div className="flex items-center gap-3 md:flex lg:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer text-white ${
            isScrolled ? "invert" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:flex items-start px-5 pt-20 md:pt-10 md:gap-2 gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-[#22344f]"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex flex-col gap-2 sm:gap-0 md:gap-0 w-full border-t border-[#22344f] pt-4 md:mt-8">
          {navLinks.map((link, i) => (
            <button
              key={i}
              className="w-full pb-1 text-left"
              onClick={() => handleNavClick(link.path, link.sectionId)}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row gap-4 md:gap-5 w-full border-t border-[#22344f] pt-2 md:mt-2 md:pt-4">
          <button
            onClick={() => handleNavClick("/", "contact")}
            className="text-[#22344f] cursor-pointer mt-2 sm:max-w-[150px] md:max-w-[150px] md:mt-0 sm:py-2 sm:px-1 md:py-2 md:px-1 border border-[#22344f] w-full text-lg bg-white font-semibold px-4 py-2 rounded-[10px] transition-all duration-500 text-center block"
          >
            Get Started
          </button>
          <button
            onClick={() => handleNavClick("/", "contact")}
            className="text-white cursor-pointer mt-2 sm:max-w-[150px] md:max-w-[150px] md:mt-0 sm:py-2 sm:px-1 md:py-2 md:px-1 border border-[#22344f] w-full text-lg bg-[#22344f] font-semibold px-4 py-2 rounded-[10px] transition-all duration-500 text-center block"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
