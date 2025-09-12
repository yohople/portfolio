import Img from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md: grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Yohannes</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            frontend developer
          </p>
          <p className="mt-2 capitalize text-lg text-slate-700 tracking-wide">
            turning ideas into reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/yohnx" target="_blank" rel="referrer">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://linkedin.com/yohannes-op"
              target="_blank"
              rel="referrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://x.com/ivan_zsk" target="_blank" rel="referrer">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={Img} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
