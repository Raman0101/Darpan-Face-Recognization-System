import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        
        {/* Left Section - Follow Us */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="font-semibold mb-3">FOLLOW US</h2>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            © 2025-26 Smart India Hackathon. All rights reserved
          </p>
        </div>

        {/* Right Section - Contact Us */}
        <div className="text-center md:text-right">
          <h2 className="font-semibold mb-3">CONTACT US</h2>
          <p className="text-gray-300">+91 11 29581241, +91 11 29581240</p>
          <p className="text-gray-300 mt-1">
            <a href="mailto:sih@aicte-india.org" className="hover:underline">
              sih@aicte-india.org
            </a>
          </p>
          <p className="text-gray-300 mt-1">
            <a href="mailto:hackathon@aicte-india.org" className="hover:underline">
              hackathon@aicte-india.org
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
