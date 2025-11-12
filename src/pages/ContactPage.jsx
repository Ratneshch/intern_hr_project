import React from "react";
import MyImg from "../assets/contactpage.png";
import { FaCheckCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div className="w-full bg-white flex flex-col lg:flex-row items-stretch justify-center gap-8 px-6 py-10 lg:px-20 relative mt-6">
      {/* Left Section (Text + Button + Features) */}
      <div className="flex flex-col justify-between w-full max-w-[600px]">
        {/* Heading */}
        <h2 className="font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-tight text-[#03071E]">
          Talk To Us Today
        </h2>

        {/* Paragraph 1 */}
        <p className="text-gray-700 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mt-5">
          Ready to transform your HR operations? Our team of experts is here to
          help you discover how HrWebsite can streamline your processes, boost
          productivity, and enhance employee satisfaction. Schedule a
          personalized demo and see the difference for yourself.
        </p>

        {/* Paragraph 2 */}
        <p className="text-gray-700 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mt-3">
          Join thousands of satisfied customers who have revolutionized their HR
          management with our comprehensive platform. Let's discuss your specific
          needs and create a tailored solution for your organization.
        </p>

        {/* Button */}
        <button
          className="flex items-center justify-center gap-3 
             rounded-[8px] px-[28px] py-[12px] mt-5 mb-5
             bg-[#FAA307] hover:bg-[#e09406] 
             shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]
             text-white font-semibold text-[16px] sm:text-[17px]
             transition-all duration-300 w-fit"
        >
          <FiPhoneCall size={20} />
          Talk to Us
        </button>

        {/* Features */}
        <div className="flex flex-col sm:flex-row gap-5">
          {/* Feature 1 */}
          <div className="flex items-start gap-3 w-full sm:w-[280px]">
            <div className="text-[#F4A300] text-2xl mt-1">
              <FaCheckCircle />
            </div>
            <div>
              <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#03071E]">
                Free Consultation
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[20px]">
                No commitment required
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-3 w-full sm:w-[280px]">
            <div className="text-[#F4A300] text-2xl mt-1">
              <FaCheckCircle />
            </div>
            <div>
              <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#03071E]">
                Custom Demo
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[20px]">
                Tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Image with Gradient) */}
      <div className="relative w-full max-w-[580px] flex items-stretch">
        {/* Gradient Background */}
        <div className="absolute inset-0 rounded-2xl opacity-10 rotate-[-3deg] bg-gradient-to-b from-[#FAA307] to-transparent"></div>

        {/* Image */}
        <img
          src={MyImg}
          alt="banner"
          className="relative w-full h-full max-h-[480px] rounded-2xl object-cover shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
        />
      </div>
    </div>
  );
};

export default ContactPage;
