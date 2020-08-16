import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4 ">
      <div className=" container mx-auto text-center font-bold text-white">
        Projeto Criado por:
        <a className="hover:underline" href="https://github.com/JhonatanF/">
          {" "}
          Jhonatan Feitosa
        </a>{" "}
        /{" "}
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/jhonatan-feitosa-659905113/"
        >
          {" "}
          Linkedin
        </a>{" "}
        /{" "}
        <a className="hover:underline" href="https://github.com/JhonatanF/">
          {" "}
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
