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
    <section className="bg-blue-950 h-max">
      <div className=" flex flex-col font-sans py-5 px-4  text-left lg:flex-row">
        <div className="flex flex-col justify-center lg: w-7/12">
          <h1 className="font-semibold tracking-tight text-white text-4xl mt-4 lg:text-5xl lg:w-11/12">
            I am <span className="text-amber-400">Muhammad Irsyad</span>
          </h1>

          <h1 className="font-semibold text-white mt-6 text-sm">
            <span className="text-amber-400"> {text}</span> Developer
          </h1>
          <div className="flex flex-row mt-5 text-3xl md:text-4xl gap-5 text-white">
            <FaWhatsapp className="hover:text-amber-400" />
            <FaGithub className="hover:text-amber-400" />
            <FaFileDownload className="hover:text-amber-400" />
          </div>
        </div>

        <div className="flex justify-center items-center  ml-4 mt-[10px] lg:ml-[60px]">
          <img className=" w-[550px] " src={Profil} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
