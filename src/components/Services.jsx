import React from "react";
import { useTranslation } from "react-i18next";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-tr from-[#FFF8E7] via-[#FFFFFF] to-[#FFF8E7] sm:p-20 p-10">
      <div className="text-center flex flex-col">
        <h1 className="font-bold sm:text-[48px] text-[24px] mx-auto font-poppins sm:max-w-full max-w-[80%]">
          {t("services_head.0.heading")}
        </h1>
        <p className="text-description font-roboto text-sm sm:text-[18px] text-center mx-auto sm:max-w-full max-w-[90%]">
          {t("services_head.0.paragraph")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {t("services", { returnObjects: true }).map((service, index) => (
          <ServicesCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
