import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-16 px-4 sm:px-10">
      {/* Main container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start text-center md:text-left">
        {/* Logo + Name */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src="/logo.svg" alt="Company Logo" className="h-12 w-auto" />
          <h3 className="text-xl font-bold text-[#0071BC]">SUPREME GROUP</h3>
        </div>

        {/* Applications */}
        <div>
          <h4 className="font-semibold mb-4">APPLICATIONS</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">Apparel</a>
            </li>
            <li>
              <a href="#">Automotive</a>
            </li>
            <li>
              <a href="#">Filtration</a>
            </li>
            <li>
              <a href="#">Customized Solutions</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">Innovation</a>
            </li>
            <li>
              <a href="#">Global Competency</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h4 className="font-semibold mb-4">MORE</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-4">FOLLOW US</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Medium</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 text-center gap-2 px-4">
        <p>©2025. All Rights Reserved.</p>
        <p>Supreme house: 110, 16th Road, Chembur, Mumbai - 400071.</p>
      </div>
    </footer>
  );
};

export default Footer;
