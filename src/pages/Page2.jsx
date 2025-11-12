import React from "react";
import MyImg from "../assets/image.png";
import { FaCheckCircle } from "react-icons/fa";

const Page2 = () => {
  return (
    <div className="w-full bg-white flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-4 sm:px-8 py-10 lg:px-20 relative mt-8">
      
      {/* Left Section - Responsive Image */}
      <div className="relative w-full max-w-[600px] flex-shrink-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-10 rotate-[-3deg] bg-gradient-to-b from-[#FAA307] to-transparent"></div>

        {/* Image */}
        <img
          src={MyImg}
          alt="banner"
          className="relative w-full h-auto max-h-[500px] object-contain sm:object-cover rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
        />
      </div>

      {/* Right Section - Text */}
      <div className="flex flex-col justify-between w-full max-w-[600px] mt-6 lg:mt-0">
        <div>
          <h2 className="font-bold text-[24px] sm:text-[30px] md:text-[34px] lg:text-[38px] leading-snug text-[#03071E] text-center lg:text-left">
            Revolutionizing HR
          </h2>
          <p className="font-semibold text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] leading-snug mt-2 text-[#03071E] text-center lg:text-left">
            Management for <br className="hidden sm:block" /> Modern Businesses
          </p>

          <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mt-4 text-center lg:text-left">
            HrWebsite is designed to simplify complex HR processes and empower
            your team with intelligent automation, real-time analytics, and seamless
            integration. Our platform brings together all essential HR functions into
            one intuitive interface, enabling you to focus on what matters most—your
            people.
          </p>

          <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mt-3 text-center lg:text-left">
            From onboarding to retirement, we provide comprehensive tools that scale
            with your organization, ensuring compliance, boosting productivity, and
            enhancing employee experience at every touchpoint.
          </p>
        </div>

        {/* Features Section */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
          <div className="flex items-start gap-3 w-full sm:w-[45%]">
            <div className="text-[#F4A300] text-xl mt-1">
              <FaCheckCircle />
            </div>
            <div>
              <h3 className="font-semibold text-[15px] sm:text-[16px] text-[#03071E]">
                Cloud-Based
              </h3>
              <p className="text-[13px] text-gray-600 leading-[18px]">
                Access anywhere with seamless experience
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 w-full sm:w-[45%]">
            <div className="text-[#F4A300] text-xl mt-1">
              <FaCheckCircle />
            </div>
            <div>
              <h3 className="font-semibold text-[15px] sm:text-[16px] text-[#03071E]">
                Secure & Compliant
              </h3>
              <p className="text-[13px] text-gray-600 leading-[18px]">
                Enterprise-grade security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
