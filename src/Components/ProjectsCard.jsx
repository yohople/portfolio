import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ img, url, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover h-64 rounded-t-lg"
      />
      <div className="capitalize p-8">
        <h1 className="text-xl tracking-wide font-medium">{title}</h1>
        <p className="mt-4 text-shadow-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="text-slate-500 hover:text-black w-8 h-8" />
          </a>
          <a href={github}>
            <FaGithubSquare className="w-8 h-8 text-slate-500 hover:text-black" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
