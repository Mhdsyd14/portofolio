import React from "react";
import pos from "../assets/pos.png";
import laracamp from "../assets/laracamp.png";
import kopikuy from "../assets/kopikuy.png";
import { FaGithub, FaLaravel, FaReact } from "react-icons/fa";
import {
  SiPhp,
  SiMysql,
  SiMongodb,
  SiRedux,
  SiJsonwebtokens,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";

// Data proyek
const projects = [
  {
    title: "Point Of Sales",
    description:
      "Aplikasi web yang dimana user dapat untuk memesan menu makanan dan minuman yang sedang ada tersedia di restoran tersebut",
    image: pos,
    githubLink: "https://github.com/Mhdsyd14/POS",
    techIcons: [
      <IoLogoNodejs />,
      <FaReact />,
      <SiMongodb />,
      <SiRedux />,
      <SiJsonwebtokens />,
    ],
  },
  {
    title: "Laracamp",
    description:
      "aplikasi web untuk para student mendapatkan materi pembelajaran yang student inginkan nantinya akan di bimbing oleh mentor",
    image: laracamp,
    githubLink: "https://github.com/Mhdsyd14/Laracamp",
    techIcons: [<FaLaravel />, <SiPhp />, <SiMysql />],
  },
  {
    title: "KopiKuy",
    description:
      "sebuah halaman landing page yang berisikan sebuah informasi tentang sebuah produk berbagai macam kopi yang ada di coffe shop tersebut ",
    image: kopikuy,
    githubLink: "https://kopi-kuy-muhammad-irsyad.vercel.app/",
    techIcons: [<FaLaravel />, <SiPhp />, <SiMysql />],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className=" w-[345px] shadow-orange-400 rounded-lg">
      <div className="flex flex-col rounded-2xl w-80 bg-white shadow-xl mx-auto my-4 h-[515px] ">
        <figure className="flex justify-center items-center rounded-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-2xl h-44 w-80 object-cover"
          />
        </figure>
        <div className="flex flex-col p-3">
          <div className="text-3xl font-sans font-bold text-gray-700 pb-6">
            {project.title}
          </div>
          <div className="text-lg text-gray-700">{project.description}</div>
          <div className="flex flex-row gap-4 text-3xl mt-3 mb-2">
            {project.techIcons.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
          </div>
          <div className="p-3 mt-2 bg-purple-700 text-white w-full font-bold rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
            <div className="gap-3 flex flex-row items-center justify-center text-lg">
              <FaGithub className="text-xl" />
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <section id="project" className="bg-blue-950 py-5 mt-2">
      <h1 className="text-center text-white py-4 font-sans font-semibold text-2xl rounded-lg bg-amber-400 w-48 mx-auto">
        Project
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
