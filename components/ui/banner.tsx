import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { siteBanner } from "@/data/site";

export const Banner: React.FC = () => {
  return (
    <div
      className="w-full z-30 fixed top-0 bg-linear-to-r from-stone-900 via-stone-800 to-stone-900 text-white py-2 px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 shadow-xl animate-fade-in-down border-b border-stone-700 text-center md:text-left"
      style={{ minHeight: 0 }}
    >
      {/* Mensaje para móvil */}
      <span className="flex md:hidden items-center gap-2 font-semibold text-sm tracking-wide drop-shadow-sm w-full justify-center">
        {siteBanner.messageMobile}
      </span>
      {/* Mensaje para desktop */}
      <span className="hidden md:flex items-center gap-2 font-semibold text-base tracking-wide drop-shadow-sm">
        {siteBanner.message}
      </span>
      <a
        href={siteBanner.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-auto ml-0 md:ml-4 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-1 rounded-full shadow transition-colors duration-200 text-xs md:text-base flex items-center gap-2 justify-center mt-2 md:mt-0"
      >
        <FaWhatsapp className="w-5 h-5" />
        <span className="md:hidden">{siteBanner.buttonLabelMobile}</span>
        <span className="hidden md:inline">{siteBanner.buttonLabel}</span>
      </a>
    </div>
  );
};

export default Banner;
