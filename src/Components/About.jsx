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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            omnis! Impedit, fuga. Beatae nostrum quidem hic molestiae autem nam
            illo dicta sit deserunt eos, quibusdam, sed quasi quia quis
            praesentium!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
