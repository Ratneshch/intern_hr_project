import React from 'react'

const ServicesCard = ({image, title, description}) => {
  return (
    <div className="relative bg-white text-center rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 sm:p-8 max-w-md border border-gray-100">

        <div className="absolute top-0 right-0 w-15 h-15 bg-[#FFF8E7] rounded-bl-[100px]"></div>

      {/* Icon Container */}
      <div className="w-12 h-12 flex mx-auto items-center justify-center rounded-xl bg-[#FFF8E7] mb-5">
        <img src={image} alt={title} className="w-6 h-6 z-50 text-[#F4B400]" />
      </div>

      {/* Text Content */}
      <h1 className="text-lg sm:text-xl font-semibold text-[#01071E] mb-2">
        {title}
      </h1>
      <p className="text-sm sm:text-base text-description leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default ServicesCard