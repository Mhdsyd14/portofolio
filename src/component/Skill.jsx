import React from "react";
import { FaLaravel, FaBootstrap } from "react-icons/fa";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql, SiPhp } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import Marquee from "react-fast-marquee";

const Skill = () => {
  return (
    <>
      <section
        id="skill"
        className=" font-sans py-2 px-2 gap-9 mx-auto my-auto "
      >
        <Marquee gradient={true}>
          <div className="flex flex-row gap-5 text-2xl text-blue-950 mt-1 lg:text-4xl">
            <DiNodejs />
            <RiReactjsFill />
            <FaLaravel />
            <BiLogoMongodb />
            <SiMysql />
            <IoLogoJavascript />
            <TiHtml5 />
            <RiTailwindCssFill />
            <SiPhp />
            <FaBootstrap />
          </div>
        </Marquee>
      </section>
    </>
  );
};

export default Skill;
