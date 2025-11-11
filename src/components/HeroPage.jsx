import React, { useState } from "react";
import image from "../assets/image.jpg";
import { BsGraphUp } from "react-icons/bs";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // ✅ NEW

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ NAV STATE

  return (
    <section className="relative min-h-screen flex items-center justify-center font-[Poppins] overflow-hidden">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* ✅ Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✅ Yellow Blur Circles */}
      <div className="blur-circle -top-20 left-10"></div>
      <div className="blur-circle bottom-10 right-16"></div>

      {/* ✅ Animated Outline */}
      <div className="bg-circle-outline float-animation hidden md:block top-[100px] left-[70%]"></div>
      <div className="bg-diamond-outline float-animation hidden md:block bottom-[160px] left-[15%]"></div>

      {/* ✅ NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-20 bg-black/20 backdrop-blur-[4px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl md:text-3xl font-bold text-white">
            HrWebsite
          </h1>

          {/* ✅ Desktop Menu */}
          <ul className="hidden md:flex space-x-10 font-medium text-white">
            {["Product", "Customer", "Resources", "Pricing", "About Us"].map(
              (item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-yellow-400">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* ✅ Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition">
              Login
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#FAA307] text-white hover:bg-yellow-600 transition">
              Get a Demo
            </button>
          </div>

          {/* ✅ Hamburger Icon (Mobile) */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* ✅ Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-black/70 backdrop-blur-lg p-6 text-white">
            <ul className="space-y-4 text-center text-lg">
              {["Product", "Customer", "Resources", "Pricing", "About Us"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="block text-white hover:!text-[#FAA307] transition-colors duration-300 cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <button className="px-4 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                Login
              </button>
              <button className="hidden md:block px-4 py-2 rounded-lg bg-[#FAA307] text-white hover:bg-yellow-600 transition">
                Get a Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ✅ HERO CONTENT */}
      <div className="relative max-w-3xl mx-auto text-center px-4 text-white mt-16 md:mt-10">
        <h1 className="text-3xl md:text-5xl font-[Poly] leading-tight">
          Empower Your HR <br /> Operations with One <br /> Unified Platform
        </h1>

        <p className="mt-6 text-lg md:text-[22px] font-[Roboto] font-light max-w-[960px] mx-auto leading-[28px] md:leading-[32px]">
          Streamline recruitment, payroll, performance management, employee
          <br className="hidden md:block" />
          engagement with our all-in-one HR solution.
        </p>

        <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
          <button className="bg-[#FAA307] text-white px-7 py-3 rounded-xl text-md font-semibold hover:bg-yellow-600 transition">
            Get a Demo
          </button>
          <button className="bg-white text-gray-900 px-7 py-3 rounded-xl text-md font-semibold hover:bg-gray-200 transition">
            Sign Up for Free
          </button>
        </div>
      </div>

      {/* ✅ Floating Cards */}
      <div className="hidden md:flex absolute left-3 md:left-8 top-72 md:top-60 bg-white p-3 shadow-lg rounded-lg items-center gap-2 float-animation">
        <div className="bg-[#FAA307] p-2 rounded-md">
          <BsGraphUp className="text-white text-xl" />
        </div>
        <div>
          <p className="font-bold">45%</p>
          <p className="text-gray-600 text-xs">Efficiency Boost</p>
        </div>
      </div>

      <div className="hidden md:flex absolute right-3 md:right-8 top-[450px] md:top-72 bg-white p-3 shadow-lg rounded-lg items-center gap-2 float-animation">
        <div className="bg-[#FAA307] p-2 rounded-md">
          <FaClock className="text-white text-xl" />
        </div>
        <div>
          <p className="font-bold">80hrs</p>
          <p className="text-gray-600 text-xs">Saved Monthly</p>
        </div>
      </div>

      {/* ✅ Footer Stats */}
      <div className="absolute bottom-4 md:bottom-6 w-full text-center text-white">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-lg font-[Roboto]">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-yellow-500 text-lg md:text-2xl" />
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <IoIosPeople className="text-yellow-500 text-lg md:text-2xl" />
            <span>10,000+ Companies Trust Us</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500 text-lg md:text-2xl" />
            <span>4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
