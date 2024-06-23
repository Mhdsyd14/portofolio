import React from "react";
import tes from "../assets/tes.png";
import { FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <>
      <section className="bg-blue-950 py-5 ">
        <h1 className="text-center text-white py-4 font-sans font-semibold text-2xl">
          Project
        </h1>
        <div>
          <div className="flex flex-col rounded-2xl w-80 bg-[#ffffff] shadow-xl mx-auto">
            <figure className="flex justify-center items-center rounded-2xl">
              <img src={tes} alt="" className="rounded-2xl" />
            </figure>
            <div className="flex flex-col p-3">
              <div className="text-3xl font-bold text=[#374151] pb-6">
                Judul
              </div>
              <div className="text-lg   text-[#374151]">Deskripsi</div>
              <div className="p-3 mt-2 bg-[#7e22ce] text-[#ffffff] w-full font-bold rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
                <div className=" gap-3 flex flex-row items-center justify-center text-lg">
                  <FaGithub className="text-xl" />
                  <a href="">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Project = () => {
  return (
    <>
      <ProjectCard />
    </>
  );
};

export default Project;
