
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Testimonials = [
  {
    name: "David Thompson",
    title: "VP of Operations, ScaleUp Co.",
    feedback:
      "HrWebsite scaled perfectly with our rapid growth. From 50 to 500 employees, the platform handled everything smoothly. The performance management tools are particularly impressive.",
    image: "https://i.pravatar.cc/50?img=5",
  },
  {
    name: "Michael Chen",
    title: "CEO, StartupHub",
    feedback:
      "The implementation was seamless, and the support team was incredible. Our employees love the self-service portal, and managers appreciate the real-time insights. Highly recommended!",
    image: "https://i.pravatar.cc/50?img=10",
  },
  {
    name: "Sarah Williams",
    title: "HR Manager, InnovateX",
    feedback:
      "The dashboard gives us clarity and control over our HR processes. HrWebsite is a must-have for growing companies.",
    image: "https://i.pravatar.cc/50?img=12",
  },
  {
    name: "David Thompson",
    title: "VP of Operations, ScaleUp Co.",
    feedback:
      "HrWebsite scaled perfectly with our rapid growth. From 50 to 500 employees, the platform handled everything smoothly. The performance management tools are particularly impressive.",
    image: "https://i.pravatar.cc/50?img=5",
  },
  {
    name: "Michael Chen",
    title: "CEO, StartupHub",
    feedback:
      "The implementation was seamless, and the support team was incredible. Our employees love the self-service portal, and managers appreciate the real-time insights. Highly recommended!",
    image: "https://i.pravatar.cc/50?img=10",
  },
  {
    name: "Sarah Williams",
    title: "HR Manager, InnovateX",
    feedback:
      "The dashboard gives us clarity and control over our HR processes. HrWebsite is a must-have for growing companies.",
    image: "https://i.pravatar.cc/50?img=12",
  },
];

const Reviews = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [key, setKey] = useState(0); // forces re-render of slider

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newSlides = width < 768 ? 1 : 2;
      setSlidesToShow(newSlides);
      setKey(prev => prev + 1); // re-render slider on resize
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: slidesToShow > 1, // hide arrows on mobile
  };

  return (
    <section className="bg-[#FFF8F2] py-16 relative overflow-hidden [overflow-x:clip]">
      {/* Desktop heading with star */}
      <div className="absolute left-30 top-30 flex flex-col items-start pl-8 z-10 hidden md:flex">
        <div className="text-[#EFB444] text-[240px] opacity-20 font-bold leading-none ml-[-40px]">★</div>
        <div className="mt-[-120px] ml-10">
          <h3 className="text-[#FF8800] text-5xl font-semibold">Customer Feedback</h3>
          <h2 className="text-[#D00000] text-6xl font-bold leading-tight ml-[60px]">
            That Inspires Us
          </h2>
        </div>
      </div>

      {/* Mobile heading (animated) */}
      <motion.div
        className="flex flex-col items-center justify-center text-center px-4 md:hidden mb-8"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 15 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[#FF8800] text-3xl font-semibold">Customer Feedback</h3>
        <h2 className="text-[#D00000] text-4xl font-bold leading-tight mt-2">
          That Inspires Us
        </h2>
      </motion.div>

      <div className="container mx-auto text-center">
        {/* Desktop text only */}
        <div className="hidden md:block">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            What Our Users Say
          </h2>
          <p className="text-gray-600 mb-10">
            Don’t just take our word for it. Here’s what HR professionals and business
            leaders say about <span className="font-semibold">HrWebsite</span>.
          </p>
        </div>

<div className="px-2 sm:px-10 w-full max-w-7xl mx-0 lg:mx-[500px] overflow-visible">
  <Slider key={key} {...settings}>
    {Testimonials.map((item, index) => (
      <div key={index} className="px-2 sm:px-4 overflow-visible">
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-6 m-3 sm:m-5 text-left h-full">
          <div className="flex mb-3 text-yellow-500 text-lg">{"★★★★★"}</div>
          <p className="text-gray-700 mb-5 text-sm sm:text-base leading-relaxed">
            "{item.feedback}"
          </p>
          <div className="flex items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
            />
            <div>
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                {item.name}
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm">{item.title}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
      </div>
    </section>

  );
};

export default Reviews;

