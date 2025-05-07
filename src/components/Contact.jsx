import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-[#0071BC] text-white px-4 sm:px-8 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold mb-2">Get in touch</h2>
          <div className="h-1 w-8 bg-white mb-6" />
          <p className="mb-6 text-gray-200">For general enquiries</p>

          <p className="mb-4">
            <span className="font-semibold block">Address :</span>
            110, 16th Road, Chembur, Mumbai - 400071
          </p>
          <p className="mb-4">
            <span className="font-semibold block">Phone :</span>
            +91 22 25208222
          </p>
          <p className="mb-4">
            <span className="font-semibold block">Email :</span>
            info@supremegroup.co.in
          </p>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full name"
            className="w-full border-b border-white bg-transparent placeholder-white focus:outline-none focus:border-gray-300 py-2"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border-b border-white bg-transparent placeholder-white focus:outline-none focus:border-gray-300 py-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b border-white bg-transparent placeholder-white focus:outline-none focus:border-gray-300 py-2"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border-b border-white bg-transparent placeholder-white focus:outline-none focus:border-gray-300 py-2"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-blue-600 font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
