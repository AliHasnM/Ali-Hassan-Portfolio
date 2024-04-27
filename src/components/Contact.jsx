import React from "react";

const Contact = () => {
  return (
    <div className="pb-16">
      <h1 className="text-neutral-300 text-4xl sm:text-5xl md:text-6xl text-center tracking-tight py-16">
        Get in Touch
      </h1>
      <div className="flex flex-col gap-3">
        <h3 className="text-neutral-300 text-center cursor-pointer hover:font-semibold">
          <a href="mailto:mughal201burewala@email.com">
            mughal201burewala@email.com
          </a>
        </h3>
        <h3 className="text-neutral-300 text-center cursor-pointer hover:font-semibold">
          +92 3078357370
        </h3>
      </div>
    </div>
  );
};

export default Contact;
