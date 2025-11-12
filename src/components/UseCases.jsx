import React from "react";
import { useTranslation } from "react-i18next";
import UseCaseCard from "./UseCasesCard";

const UseCases = () => {
  const { t } = useTranslation();

  // Get all use case data
  const useCasesHead = t("useCases_head", { returnObjects: true });
  const useCases = t("useCases", { returnObjects: true });

  return (
    <div className="relative bg-white sm:p-20 p-10">
      {/* Heading and Paragraph */}
      <div className="text-center flex flex-col">
        <h1 className="font-bold sm:text-[48px] text-[24px] mx-auto font-poppins sm:max-w-full max-w-[80%]">
          {useCasesHead.heading}
        </h1>
        <p className="text-description font-roboto text-sm sm:text-[18px] text-center mx-auto sm:max-w-full max-w-[90%]">
          {useCasesHead.paragraph}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16 gap-8 w-full">
  {Array.isArray(useCases) &&
    useCases.map((feature, index) => (
      <UseCaseCard
        key={index}
        image={feature.image }
        title={feature.title}
        description={feature.description}
      />
    ))}
</div>

    </div>
  );
};

export default UseCases;
