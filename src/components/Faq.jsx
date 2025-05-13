import { useState } from "react";

const Faq = () => {
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-5 sm:mt-5">
      <div className="flex flex-col items-center justify-center mb-5">
        <h2 className="text-center text-xl sm:text-3xl md:text-3xl pb-5 max-w-xl text-[#22344f] md:mt-6 font-bold leading-normal">
          Frequently Asked Questions
        </h2>
      </div>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-[7px] py-5 shadow-lg px-4 mt-2"
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
            <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
