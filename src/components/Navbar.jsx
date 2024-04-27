import React from "react";
import logo from "../assets/logo.png";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { saveAs } from "file-saver";
import cvFile from "../assets/MERN Stack Ali Hassan.pdf";

const Navbar = () => {
  const handleDownload = () => {
    saveAs(cvFile, "MERN Stack Ali Hassan.pdf");
  };

  return (
    <div className="shadow-2xl text-white flex items-center justify-between px-16">
      <div className="flex items-center">
        <img className="cursor-pointer w-20 rounded-md" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ali-hassan-261187253"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/AliHasnM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com/your-facebook-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="cursor-pointer" />
        </a>
        <button
          className="bg-neutral-700 rounded-md px-2 text-xs sm:text-xl md:text-2xl tracking-tighter hover:bg-neutral-600 cursor-pointer"
          onClick={handleDownload}
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;
