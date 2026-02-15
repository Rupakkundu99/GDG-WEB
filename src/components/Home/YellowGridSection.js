import React from "react";
import { rethink_sans800 } from "@/Fonts/Rethink";
import Link from "next/link";

const YellowGridSection = () => {
  return (
    <div className="relative bg-[#ffd427] pt-28 md:pt-32 pb-20">
      {/* Black Grid Pattern - Extends to very top */}
      <div 
        className="absolute inset-0 opacity-30 -top-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, black 1px, transparent 1px),
            linear-gradient(to bottom, black 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0'
        }}
      />

      <div className="container mx-auto px-20 relative z-10">
        
        {/* Our Events Card - WIDER */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white border-4 border-black rounded-[50px] overflow-hidden shadow-2xl relative">
            {/* Yellow Circle Decoration at Top */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-14 h-14 bg-[#ffd427] rounded-full border-4 border-black"></div>
            </div>
            
            {/* Grey Header Section */}
            <div className="bg-gray-100 pt-16 pb-8 px-10 md:px-12">
              <h2 className={`text-4xl md:text-5xl font-bold ${rethink_sans800.className}`}>
                Our Events
              </h2>
            </div>
            
            {/* White Content Section */}
            <div className="bg-white p-10 md:p-12">
              {/* Event Images Grid - 2 columns, 2 rows with 3 images */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Left column - single large image */}
                <div className="row-span-2">
                  <img
                    src="/EventPhoto1.svg"
                    alt="Event 1"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                
                {/* Right column - two stacked images */}
                <div className="flex flex-col gap-4">
                  <img
                    src="/EventPhoto2.svg"
                    alt="Event 2"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <img
                    src="/EventPhoto3.svg"
                    alt="Event 3"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* Event with us Button - Centered */}
              <div className="flex justify-center">
                <Link href="/Events">
                  <button className="bg-white border-3 border-black text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-3 text-lg">
                    Event with us
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Excited Section Card - WIDER */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white border-4 border-black rounded-[50px] overflow-hidden shadow-2xl relative">
            {/* Yellow Circle Decoration */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-14 h-14 bg-[#ffd427] rounded-full border-4 border-black"></div>
            </div>
            
            {/* Grey Header Section */}
            <div className="bg-gray-100 pt-16 pb-8 px-10 md:px-12">
              <h3 className={`text-3xl md:text-4xl font-bold ${rethink_sans800.className}`}>
                Feedback?
              </h3>
            </div>
            
            {/* White Content Section */}
            <div className="bg-white p-10 md:p-12">
              <p className="text-lg md:text-xl mb-8">
                why wait! Join Hack On now!
              </p>
              
              <div className="flex justify-center">
                <Link href="/ContactUs">
                  <button className="bg-white border-3 border-black text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-3 text-lg">
                    Reg EMC Now
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Register Now Card - WIDER */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-4 border-black rounded-[50px] overflow-hidden shadow-2xl relative">
            {/* Yellow Circle Decoration */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-14 h-14 bg-[#ffd427] rounded-full border-4 border-black"></div>
            </div>
            
            {/* Grey Header Section */}
            <div className="bg-gray-100 pt-16 pb-8 px-10 md:px-12">
              <h3 className={`text-3xl md:text-4xl font-bold ${rethink_sans800.className}`}>
                Ready to join us?
              </h3>
            </div>
            
            {/* White Content Section */}
            <div className="bg-white p-10 md:p-12">
              <div className="flex justify-center">
                <Link href="/Events">
                  <button className="bg-white border-3 border-black text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-3 text-lg">
                    Register Now
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default YellowGridSection;