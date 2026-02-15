import React from "react";
import Link from "next/link";

const ActionBtn = ({ text, href, onClick }) => {
  const ButtonContent = (
    <div className="relative inline-block group cursor-pointer">
      
      {/* 1. THE YELLOW BACK LAYER (Shadow) */}
      {/* FIXED: Removed default translate. It now hides perfectly behind the white button. */}
      <div className="
        absolute inset-0 
        bg-[#ffd427] 
        border-2 border-black rounded-xl
        transition-transform duration-300 ease-out
        
        /* HOVER ONLY: Now it moves out to create the double-border look */
        group-hover:translate-x-2 group-hover:translate-y-2
      "></div>

      {/* 2. THE WHITE FRONT LAYER (Main Button) */}
      <div className="
        relative
        bg-[#fffdf5] 
        border-2 border-black rounded-xl
        
        /* Large Size */
        px-12 py-4 
        md:px-20 md:py-5
        
        text-xl md:text-2xl font-bold
        text-black
        flex items-center justify-center gap-4
        transition-transform duration-300 ease-out
        
        /* HOVER: Moves Up/Left slightly to enhance the separation */
        group-hover:-translate-x-1 group-hover:-translate-y-1
      "
      onClick={onClick}
      >
        <span className="whitespace-nowrap">{text}</span>
        
        {/* Static Arrow */}
        <svg 
          className="w-6 h-6 md:w-8 md:h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{ButtonContent}</Link>;
  }

  return ButtonContent;
};

export default ActionBtn;