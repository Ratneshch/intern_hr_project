import React from "react";
import { useTranslation } from "react-i18next";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const footer = t("footer", { returnObjects: true });

  const iconMap = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp
};

  return (
    <footer className="bg-[#03071E] px-6 sm:px-10 md:px-[64px] py-10 md:py-[64px]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 pb-10 md:pb-12">
        
        {/* Left Section */}
        <div className="flex flex-col justify-between max-w-[483px]">
          <h1 className="text-[30px] font-bold mb-3 text-white">
            {footer.brand.name}
          </h1>
          <p className="text-sm sm:text-base mb-5 text-[#9CA3AF]">
            {footer.brand.description}
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            {footer.socialIcons.map((icon, index) => {
              const IconComponent = iconMap[icon.iconKey]; // e.g., "twitter"
              if (!IconComponent) return null;

              return (
                <a
                  key={index}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAA307] flex items-center justify-center hover:opacity-90 transition"
                  aria-label={icon.name}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between md:justify-around gap-8 sm:gap-[48px]">
          {footer.links.map((col, index) => (
            <div key={index} className="min-w-[120px]">
              <h2 className="font-semibold mb-3 sm:mb-4 text-lg text-white">
                {col.title}
              </h2>
              <ul className="text-[#9CA3AF] space-y-1 sm:space-y-2 text-sm sm:text-base">
                {col.items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-[#374151] my-6 md:my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-[#9CA3AF] text-xs sm:text-sm gap-3 sm:gap-0">
        <p className="text-center sm:text-left">
          {footer.bottom.copyright}
        </p>

        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
          {footer.bottom.policies.map((policy, i) => (
            <span
              key={i}
              className="cursor-pointer transition hover:text-white"
            >
              {policy}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;