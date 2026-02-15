import React from "react";
import Image from "next/image";
import { rethink_sans800 } from "@/Fonts/Rethink";
import Footer from "@/components/Utility/footer1";
import Link from "next/link";
import GDGLogo from "@/logo1.png";
import PersonImage from "@/Person.png";
import ActionBtn from "@/components/Utility/ActionBtn";

export const metadata = {
  title: 'Home',
  description: 'This is the official website of GDGC GCOEN',
  image: "/GDGCPoster.png",
  keywords: 'gdgc, GDGC, gcoen, GCOEN, google, developer, group, club, college, gcoen, nagpur, Nagpur',
}

const HomePage = () => {
  const imageHoverStyles = "transition-all duration-300 ease-out hover:-translate-y-1 hover:-translate-x-1 hover:border-2 hover:border-[#ffd427] hover:shadow-[4px_4px_0px_0px_#ffd427]";

  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-white flex flex-col">
      
      {/* ----------------------------------------------------------- */}
      {/* 1. TOP WHITE SECTION (Hero)                                 */}
      {/* ----------------------------------------------------------- */}
      <div className="w-full bg-white relative z-10">
        <div className="container mx-auto px-5 py-12 flex flex-col items-center">
          <Image src={GDGLogo} alt="GDG Logo" width={100} height={100} className="mb-6" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[#f9ab00] leading-tight">
            Google Developer Group
          </h1>
          <h2 className="text-2xl md:text-4xl text-center text-[#f9ab00] font-bold mt-2">
            on Campus
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 text-center mt-4 font-medium mb-10">
            Government College of Engineering, Nagpur
          </p>
          <div className="w-full flex justify-center px-2 md:px-0 mb-10">
            <Image src={PersonImage} alt="Community Person" className="w-full h-auto max-w-5xl object-contain" priority />
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* 2. BOTTOM YELLOW SECTION (S-Curve + Continuous Grid)        */}
      {/* ----------------------------------------------------------- */}
      <div 
        className="relative w-full bg-[#ffd427] flex-grow"
        style={{
          // The Grid Background lives here. Do not override it in child divs!
          backgroundImage: `
            linear-gradient(to right, black 2px, transparent 2px),
            linear-gradient(to bottom, black 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center top'
        }}
      >
        <div className="absolute inset-0 bg-[#ffd427] opacity-70 pointer-events-none"></div>

        {/* S-Curve Divider */}
        <div className="absolute top-0 left-0 w-full h-[120px] overflow-hidden leading-[0] z-20 -mt-[1px]">
          <svg viewBox="0 0 1200 120" className="w-full h-full block" preserveAspectRatio="none">
            <path d="M0,60 Q300,120 600,60 T1200,60 V0 H0 Z" fill="white" />
            <path d="M0,60 Q300,120 600,60 T1200,60" fill="none" stroke="black" strokeWidth="4" />
          </svg>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="w-full px-4 md:px-8 relative z-30 pt-40 pb-0.5 flex flex-col items-center">

          {/* OUR EVENTS CARD */}
          <div className="w-full max-w-[1400px] mb-20">
            <div className="bg-white border-4 border-black rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-14 h-14 bg-[#ffd427] rounded-full border-4 border-black"></div>
              </div>

              <div className="bg-gray-100 pt-12 pb-6 px-6 md:pt-16 md:pb-8 md:px-12">
                <h2 className={`text-3xl md:text-5xl font-bold ${rethink_sans800.className} text-center md:text-left`}>
                  Our Events
                </h2>
              </div>

              <div className="bg-white p-4 md:p-12">
                <div className="grid grid-cols-2 gap-4 mb-6 md:mb-8">
                  <div className="row-span-2">
                    <img src="/EventPhoto1.svg" alt="Event 1" className={`w-full h-full object-cover rounded-xl md:rounded-3xl border-2 border-transparent md:border-0 ${imageHoverStyles}`} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <img src="/EventPhoto2.svg" alt="Event 2" className={`w-full h-full object-cover rounded-xl md:rounded-3xl border-2 border-transparent md:border-0 ${imageHoverStyles}`} />
                    <img src="/EventPhoto3.svg" alt="Event 3" className={`w-full h-full object-cover rounded-xl md:rounded-3xl border-2 border-transparent md:border-0 ${imageHoverStyles}`} />
                  </div>
                </div>
                <div className="flex justify-center">
                  <ActionBtn text="Event with us" href="/Events" />
                </div>
              </div>
            </div>
          </div>

        {/* ----------------------------------------------------------------- */}
          {/* FEEDBACK CARD - FINAL ADJUSTMENT (6px Visible Yellow)           */}
          {/* ----------------------------------------------------------------- */}
          <div className="w-full max-w-[1200px] mb-20 relative px-4 flex justify-center">
            
            {/* WRAPPER: Main border handles the sides/bottom */}
            <div className="relative w-full shadow-[10px_10px_0_0_rgba(0,0,0,1)] rounded-[60px] overflow-hidden bg-[#e5e5e5] border-4 border-black">

              {/* LAYER 1: GRAY TEXT SECTION */}
              <div className="pt-16 pb-32 text-center px-8 relative z-0">
                <h2 className={`text-3xl md:text-5xl font-bold ${rethink_sans800.className}`}>
                  Excited?
                </h2>
                <p className="text-xl mt-4 font-medium text-gray-800">
                  why wait ! Join Hack On now!
                </p>
              </div>

              {/* LAYER 2: YELLOW BOX */}
              {/* Moves up 96px (-mt-24) */}
              <div className="absolute left-0 right-0 h-32 -mt-24 z-10">
                 {/* No border-x here, so it stretches full width */}
                 <div className="w-full h-full bg-[#ffd427] rounded-t-[50px] border-t-4 border-black"></div>
              </div>

              {/* LAYER 3: WHITE BOX */}
              {/* MOVED UP 86px (-mt-[86px]) */}
              {/* Gap Logic: 96px (Yellow) - 86px (White) = 10px Gap. */}
              {/* 10px Gap - 4px Border = 6px Visible Yellow Strip. */}
              <div className="relative bg-white -mt-[86px] pt-16 pb-16 rounded-t-[50px] border-t-4 border-black z-20 px-8 text-center">
                 
                 <div className="flex justify-center">
                   <ActionBtn text="Register Now" href="/ContactUs" />
                 </div>
              </div>

            </div>
          </div>
          <div className="w-full mt-20">
             <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;