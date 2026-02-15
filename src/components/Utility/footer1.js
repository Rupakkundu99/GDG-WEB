"use client";
import React from "react";
import Link from "next/link";
import { rethink_sans800 } from "@/Fonts/Rethink";
import LogoImage from "@/logo1.png";

// Helper to clean up labels
const getShortLabel = (label) => {
  return label
    .replace("Follow us on ", "")
    .replace("Join our ", "")
    .replace("Connect on ", "")
    .replace("Subscribe to our ", "")
    .replace(" Group", "")
    .replace(" Channel", "")
    .replace(" (Twitter)", "");
};

// Compact Social Pill Component
const SocialPill = ({ icon, link, label }) => {
  const shortLabel = getShortLabel(label);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center gap-2 bg-white border border-black rounded-full px-3 py-1.5 hover:bg-[#FFF9C4] transition-all duration-300 cursor-pointer group">
        <img src={icon} alt={shortLabel} className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span className={`text-black font-bold text-xs whitespace-nowrap ${rethink_sans800.className}`}>
          {shortLabel}
        </span>
      </div>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="w-full pt-10 flex flex-col items-center relative z-30 bg-transparent">
      
      {/* 1. MAIN WIDE CONTAINER */}
      {/* mb-10 ensures some space between the box and the colored line */}
      <div className="container mx-auto px-4 mb-10 flex justify-center">
        
        {/* The White Box: Less Rounded (rounded-[25px]) */}
        <div className="w-full max-w-[1200px] bg-white border-2 border-black rounded-[25px] shadow-lg px-8 py-4 flex flex-col lg:flex-row justify-between items-center gap-6">

          {/* --- LEFT GROUP: Social Pills --- */}
          <div className="flex flex-col gap-2 items-center lg:items-start w-full lg:w-auto">
            {/* Top Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {socialLinks.slice(0, 3).map((link, index) => (
                <SocialPill key={index} {...link} />
              ))}
            </div>
            {/* Bottom Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {socialLinks.slice(3, 5).map((link, index) => (
                <SocialPill key={index + 3} {...link} />
              ))}
            </div>
          </div>

          {/* --- CENTER GROUP: Logo --- */}
          <div className="flex-shrink-0">
            <img
              src={LogoImage.src}
              alt="GDG Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* --- RIGHT GROUP: Text Box --- */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="border border-black rounded-[15px] px-6 py-2 text-center lg:text-left">
              <h3 className={`text-sm md:text-base font-bold text-black leading-tight ${rethink_sans800.className}`}>
                Google Developer Group
              </h3>
              <p className="text-xs md:text-sm font-semibold text-black mt-0.5">
                On Campus • GCOEN
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 2. THE BOTTOM COLORED LINE */}
      {/* 5px thick line touching the base */}
      <div className="w-full h-[5px] flex mt-auto">
        <div className="h-full w-1/3 bg-[#EA4335]"></div> {/* Red */}
        <div className="h-full w-1/3 bg-[#4285F4]"></div> {/* Blue */}
        <div className="h-full w-1/3 bg-[#34A853]"></div> {/* Green */}
      </div>

    </footer>
  );
};

export default Footer;

// Data
const socialLinks = [
  {
    icon: "/instagram.svg",
    link: "https://www.instagram.com/gdgcgcoen/",
    label: "Follow us on Instagram",
  },
  {
    icon: "/whatsapp.svg",
    link: "https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ",
    label: "Join our WhatsApp Group",
  },
  {
    icon: "/linkedin.svg",
    link: "https://www.linkedin.com/company/gdgoncampus-gcoen/",
    label: "Connect on LinkedIn",
  },
  {
    icon: "/x.svg",
    link: "https://x.com/GDGCGcoen",
    label: "Follow us on X (Twitter)",
  },
  {
    icon: "/youtube.svg",
    link: "http://www.youtube.com/@gdscgcoen3822",
    label: "Subscribe to our YouTube Channel",
  },
];