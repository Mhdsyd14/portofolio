import React from "react";
import Profil from "../assets/profil.png";
import { FaWhatsapp, FaGithub, FaFileDownload } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

const Jumbotron = () => {
  const [text] = useTypewriter({
    words: ["Fullstack", "Frontend", "Backend"],
    loop: true,
  });

  return (
    <section className="bg-blue-950  flex flex-col md:flex-row md:h-[480px] md: w-full max-[363px]: h-max  ">
      <div className="font-sans py-5 px-4 mt-2 md:mt-[110px] mx-4 md:mx-12 text-left w-[630px] max-[363px]: ml-0 text-3xl  ">
        <h1 className="mb-4 font-semibold tracking-tight text-white text-4xl md:text-5xl">
          I am <span className="text-amber-400">Muhammad Irsyad</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-1">
          <span className="text-amber-400">{text}</span> Developer
        </h2>
        <div className="flex flex-row mt-5 text-3xl md:text-4xl gap-5 text-white">
          <FaWhatsapp className="hover:text-amber-400" />
          <FaGithub className="hover:text-amber-400" />
          <FaFileDownload className="hover:text-amber-400" />
        </div>
      </div>
      <div className="flex justify-center items-center   ">
        <img
          className="md:mt-1 mb-8 md:ml-[90px]  md:w-[450px] lg:ml-[80px]   "
          src={Profil}
          alt="Profile"
        />
      </div>
    </section>
  );
};

export default Jumbotron;
