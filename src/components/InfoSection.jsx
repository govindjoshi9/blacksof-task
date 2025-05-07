import React from 'react'

const InfoSection = () => {
  return (
    <div>
      <section className="h-[500px] bg-black text-white flex items-center justify-center text-center transition duration-300 transform hover:scale-105">
        <h2 className="text-3xl font-bold">
          Evolving the drive with{" "}
          <span className="text-blue-500 inline-block transition-transform duration-500 transform hover:rotate-[360deg]">
            360-degree
          </span>{" "}
          nonwoven solutions
        </h2>
      </section>
    </div>
  );
}

export default InfoSection
