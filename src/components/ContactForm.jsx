import React from "react";
import HandIphone from "../assets/HandandiPhone.png";

const ContactForm = () => {
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
      setResult("Form Submitted Successfully!!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
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
                name="name"
                type="text"
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
                style={{ boxShadow: "0px 4px 12px rgba(76, 169, 243, 0.7)" }}
              >
                Send Message
              </button>
            </form>
            <span className="mt-4 text-base sm:text-sm md:text-lg lg:text-xl xl:text-xl font-medium text-gray-500 italic break-words w-full block px-2 py-3">
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
  );
};

export default ContactForm;
