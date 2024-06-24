import React from "react";
import Profil from "../assets/profil.png";
import { FaWhatsapp, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";

const Jumbotron = () => {
  const [text] = useTypewriter({
    words: ["Fullstack", "Frontend", "Backend"],
    loop: true,
  });

  return (
    <section id="home" className="bg-blue-950 h-max">
      <div className=" flex flex-col font-sans py-5 px-4  text-left lg:flex-row">
        <div className="flex flex-col justify-center  ml-3 lg: w-7/12">
          <h1 className="font-semibold tracking-tight text-white text-4xl mt-4 lg:text-5xl lg:w-11/12">
            I am <span className="text-amber-400">Muhammad Irsyad</span>
          </h1>

          <h1 className="font-semibold text-white mt-6 text-sm lg:text-3xl">
            <span className="text-amber-400"> {text}</span> Developer
          </h1>
          <div className="flex flex-row mt-5 text-3xl md:text-4xl gap-5 text-white">
            <a
              href="https://wa.me/62895322935928"
              className="hover:text-amber-400"
            >
              <FaWhatsapp size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-irsyad1404/"
              className="hover:text-amber-400"
            >
              <FaLinkedin size={35} />
            </a>
            <a
              href="https://docs.google.com/document/d/1z7miFmDuLIvlqcJHF_Qhk8gOoziNZg26_IHG7ZeOpQQ/edit?usp=sharing"
              className="hover:text-amber-400"
            >
              <FaFileDownload size={35} />
            </a>
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
