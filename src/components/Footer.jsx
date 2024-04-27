import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white text-center py-4">
      <p>© {new Date().getFullYear()} Ali Hassan | All rights reserved</p>
      <p>Made with ❤️ and MERN stack</p>
    </footer>
  );
};

export default Footer;
