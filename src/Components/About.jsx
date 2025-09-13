import React from "react";
import SectionTitle from "./SectionTitle";
import Img from "../assets/about.svg";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto max-w-7xl grid md: grid-cols-2 items-center gap-16">
        <img src={Img} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            I’m a web developer passionate about creating clean, user-friendly,
            and responsive websites. I enjoy turning ideas into functional
            digital experiences, whether it’s building from scratch or improving
            existing projects. With a focus on modern web technologies and best
            practices, I aim to deliver solutions that are both visually
            appealing and efficient.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
