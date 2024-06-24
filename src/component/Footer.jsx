import React from "react";
import { FaFileDownload, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-400 p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4 text-white">
          <a
            href="https://wa.me/62895322935928"
            className="hover:text-gray-700"
          >
            <FaWhatsapp size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-irsyad1404/"
            className="hover:text-gray-700"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href="https://docs.google.com/document/d/1z7miFmDuLIvlqcJHF_Qhk8gOoziNZg26_IHG7ZeOpQQ/edit?usp=sharing"
            className="hover:text-gray-700"
          >
            <FaFileDownload size={35} />
          </a>
        </div>
        <p className="text-gray-700">
          &copy; 2024 Muhammad Irsyad / irsyadmuhammad954@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
