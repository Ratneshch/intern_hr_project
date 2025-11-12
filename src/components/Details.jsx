import React, { useState } from "react";
import symbol from "../assets/Symbol.png";
import Watch from "../assets/Watch.png";
import Troffy from "../assets/Troffy.png";
import Analytics from "../assets/Analytics.png";
import Payroll from "../assets/PayrollSystem.png";
import atend from "../assets/Atend.jpg";
import perfomanc from "../assets/Perfomanc.jpg";
import ana from "../assets/ana.jpg";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

function Details() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtons = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      id: 0,
      icon: symbol,
      title: "Payroll, Time, and Benefits",
      description:
        "Automate payroll processing, track time and attendance, and manage employee benefits seamlessly. Our integrated system ensures accuracy, compliance, and timely payments while reducing administrative overhead.",
      image: Payroll,
    },
    {
      id: 1,
      icon: Watch,
      title: "Attendance Tracking",
      description:
        "Easily monitor employee check-ins, working hours, and absences in real time. Streamline attendance records and improve workforce efficiency with automated tracking.",
      image: atend,
    },
    {
      id: 2,
      icon: Troffy,
      title: "Performance Management",
      description:
        "Track employee goals, evaluate progress, and boost productivity with continuous feedback and performance reviews.",
      image: perfomanc,
    },
    {
      id: 3,
      icon: Analytics,
      title: "Analytics and Insights",
      description:
        "Make data-driven decisions with smart dashboards and reports, providing real-time insights into workforce performance and HR metrics.",
      image: ana,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFFFFF] py-12 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-[26px] md:text-[40px] lg:text-[48px] font-Poppins font-bold text-[#03071E] leading-snug">
          Combine All Your HR Systems Into One Platform
        </h1>
        <p className="mt-3 text-[14px] md:text-[18px] text-gray-600 font-Roboto">
          Eliminate data silos and streamline your HR operations with our
          comprehensive suite of integrated tools.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-12 gap-10 lg:gap-20">
        {/* Left Accordion Section */}
        <div className="w-full lg:w-1/2 space-y-5">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`w-full p-5 bg-white shadow-md rounded-xl border transition-all duration-300 ${
                activeIndex === index
                  ? "border-[#FAA307] border-2"
                  : "border-[#E2E2E2]"
              }`}
            >
              <button
                onClick={() => handleButtons(index)}
                className="flex justify-between items-center w-full"
              >
                <div className="flex items-center gap-3 text-left">
                  <img
                    src={section.icon}
                    alt={section.title}
                    className="h-8 w-8 bg-[#FAA3071A] p-2 rounded-md"
                  />
                  <p className="font-Poppins font-semibold text-[15px] md:text-[18px] text-[#03071E]">
                    {section.title}
                  </p>
                </div>
                {activeIndex === index ? (
                  <FaAngleUp className="text-[#FAA307] text-lg" />
                ) : (
                  <FaAngleDown className="text-gray-500 text-lg" />
                )}
              </button>

              {/* Dropdown Content */}
              {activeIndex === index && (
                <div className="mt-3 space-y-3">
                  <p className="font-Roboto text-[14px] text-gray-600 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Show image inside dropdown only for mobile/tablet */}
                  <div className="block lg:hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-auto object-cover rounded-2xl shadow-md mt-3"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Image Section (Desktop only) */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
          {sections.map(
            (section, index) =>
              activeIndex === index && (
                <img
                  key={section.id}
                  src={section.image}
                  alt={section.title}
                  className="w-full max-w-[600px] h-auto object-cover rounded-2xl shadow-md transition-all duration-300"
                />
              )
          )}
          {activeIndex === null && (
            <img
              src={Payroll}
              alt="Default HR"
              className="w-full max-w-[600px] h-auto object-cover rounded-2xl shadow-md opacity-70"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;