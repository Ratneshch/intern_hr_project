import React from 'react'

const UseCaseCard = ({image, description, title}) => {
  return (
    <div className="relative bg-white text-center rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 sm:p-8 max-w-sm border h-[328px] w-[296px] border-gray-100">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#F4B400] rounded-t-2xl"></div>
      {/* Icon Container */}
      <div className="w-12 h-12 flex mx-auto items-center justify-center rounded-xl bg-[#F4B400] mb-5">
        <img src={image} alt={title} className="w-6 h-6" />
      </div>

      {/* Title */}
      <h1 className="text-lg sm:text-xl font-semibold text-[#01071E] mb-2">
        {title}
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base text-description leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default UseCaseCard