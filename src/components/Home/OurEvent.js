import React from "react";
import Image from "next/image";
import { rethink_sans800 } from "@/Fonts/Rethink";

const OurEvent = () => {
  return (
    <div className={rethink_sans800.className} data-aos="fade-up">
      {/* Top Decorative Image */}
      <Image
        src="/OurEvents1.svg"
        width={1899.975}
        height={111.69}
        alt="Element 1"
        data-aos="fade-right"
        className="w-full"
      />

      {/* CHANGE 1: Added 'max-w-6xl' to stop it from being huge.
         CHANGE 2: Added 'py-12 px-6 md:px-24' to give space on sides.
      */}
      <div className="container mx-auto max-w-6xl py-12 px-6 md:px-24 flex flex-col items-center">
        
        {/* Title */}
        <p className="sm:text-xxl text-4xl font-extrabold mb-10">Our Events</p>
        
        <div className="flex gap-5 md:gap-10 w-full flex-col md:flex-row items-center justify-center">
          
          {/* LEFT COLUMN */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <Image
              src="/EventPhoto1.svg"
              width={910}
              height={360}
              placeholder="blur"
              blurDataURL="/OurEventLeft.svg"
              alt="EventPhoto1"
              data-aos="fade-up"
              // Rounded corners make it look more like a 'card'
              className="w-full h-auto object-cover rounded-xl" 
            />
            {/* CHANGE 3: REMOVED the second image (EventPhoto3) from here.
               Now you only have 1 image on the left.
            */}
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full md:w-1/2">
            <Image
              src="/EventPhoto2.svg"
              width={650}
              height={672}
              placeholder="blur"
              data-aos="fade-up"
              blurDataURL="/EventBig.svg"
              alt="EventPhoto2"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          
        </div>
      </div>

      {/* Bottom Decorative Image */}
      <Image
        src="/OurEvents2.svg"
        width={1899.98}
        data-aos="fade-right"
        height={111.69}
        alt="Element 2"
        layout="responsive"
        className="w-full"
      />
    </div>
  );
};

export default OurEvent;