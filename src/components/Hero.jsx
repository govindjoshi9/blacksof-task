import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[100vh] h-fit bg-gray-800 flex flex-col items-center justify-center text-center text-white px-4">
      <p className="text-sm sm:text-base text-gray-300 mb-2">
        Performance in motion
      </p>
      <h1 className="text-3xl sm:text-5xl font-semibold text-white mb-2">
        Soft Trims and NVH Solutions
      </h1>
      <p className="text-lg sm:text-xl text-gray-200">for seamless rides</p>
    </section>
  );
};

export default Hero;
