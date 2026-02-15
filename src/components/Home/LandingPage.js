"use client";

import React from "react";
import Image from "next/image";
import GDGLogo from "@/logo1.png";
import PersonImage from "@/Person.png";

const LandingPage = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="container mx-auto px-5 py-12 flex flex-col items-center">
        
        {/* --- Logo Section --- */}
        <Image
          src={GDGLogo}
          alt="GDG Logo"
          width={100}
          height={100}
          className="mb-6"
        />
        
        {/* --- Text Section --- */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[#f9ab00] leading-tight">
          Google Developer Group
        </h1>
        <h2 className="text-2xl md:text-4xl text-center text-[#f9ab00] font-bold mt-2">
          on Campus
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 text-center mt-4 font-medium mb-10">
          Government College of Engineering, Nagpur
        </p>

        {/* --- Image Section --- */}
        <div className="w-full flex justify-center px-2 md:px-0 mb-10">
          <Image
            src={PersonImage}
            alt="Community Person"
            className="w-full h-auto max-w-5xl object-contain"
            priority
          />
        </div>

      </div>

      {/* --- Curve Divider - JUST THE BLACK LINE --- */}
      <div className="relative w-full h-[100px] md:h-[120px] -mb-[100px] md:-mb-[120px] pointer-events-none z-20">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Black border stroke ONLY */}
          <path
            d="M0,60 Q300,120 600,60 T1200,60"
            fill="none"
            stroke="#000000"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
};

export default LandingPage;