import React from "react";
import { rethink_sans400, rethink_sans600 } from "@/Fonts/Rethink";

const Aim = () => {
  return (
    <div className="relative container mx-auto px-5 py-16">
      {/* Yellow Curved Border Container */}
      <div className="relative border-4 border-black rounded-[40px] bg-white overflow-hidden">
        {/* Yellow Border Effect */}
        <div className="absolute inset-0 border-8 border-[#f9ab00] rounded-[36px] pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className={`text-2xl md:text-3xl mb-4 ${rethink_sans600.className}`}>
                <strong>At Google Developer Group on Campus, GCOEN,</strong>
              </h2>
              <p className={`text-lg md:text-xl text-justify leading-relaxed ${rethink_sans400.className}`}>
                we code, design, and occasionally debug our lives. We're a student
                community that learns, builds, and breaks things (on purpose!)
                while exploring Google technologies. Workshops, hackathons, and
                great vibes because who said tech can't be fun?
              </p>
            </div>
            
            {/* Image */}
            <div className="flex-1">
              <img
                src="/CollegeBg.svg"
                alt="College"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aim;