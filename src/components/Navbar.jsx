import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f8fafe] px-4 sm:px-8 py-2 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-14">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="Company Logo"
            className="h-8 w-8 object-contain"
          />
          <div className="text-sm leading-tight text-blue-800 font-semibold">
            <div>SUPREME</div>
            <div className="text-[10px] font-normal">GROUP</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-[#50cdff] text-sm px-4 py-1.5 text-white rounded-full shadow hover:bg-[#38c3f5] transition">
            Contact Us
          </button>
          <i className="fab fa-linkedin-in text-black text-sm cursor-pointer" />
          <i className="fas fa-building text-black text-sm cursor-pointer" />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-2 md:hidden">
          <div className="flex flex-col space-y-2 items-start">
            <button className="bg-[#50cdff] text-white text-sm px-4 py-1.5 rounded-full shadow hover:bg-[#38c3f5] transition">
              Contact Us
            </button>
            <div className="flex space-x-4">
              <i className="fab fa-linkedin-in text-black text-sm cursor-pointer" />
              <i className="fas fa-building text-black text-sm cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
