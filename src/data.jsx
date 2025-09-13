import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dbk5vcnag/image/upload/v1757677459/unsplashProject_xbbvvj.png",
    url: "https://yzimagesearch.netlify.app/",
    github: "https://github.com/yohnx/unsplash",
    title: "unsplash image search",
    text: "lite weight unsplash image search delivering high quality images based on unsplash api",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dbk5vcnag/image/upload/v1757677745/mixmaster_o5seeb.png",
    url: "https://yzmixmaster.netlify.app/",
    github: "https://github.com/yohnx/MixMaster",
    title: "mix master",
    text: "a site where you can search any cocktail and get the details of it as of its ingredients, how its prepared based on cocktail db api",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dbk5vcnag/image/upload/v1757690161/tours_smrsvt.png",
    url: "https://yztours.netlify.app/",
    github: "https://github.com/yohnx/tours",
    title: "tours",
    text: "a simple site for tourists about the place and its price",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dbk5vcnag/image/upload/v1757690588/reviews_jxjsod.png",
    url: "https://yzreviews.netlify.app/",
    github: "https://github.com/yohnx/reviews",
    title: "Reviews",
    text: "a simple site that show case their skills and expertise",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dbk5vcnag/image/upload/v1757690802/question_lbwdoy.png",
    url: "https://yzaccordion.netlify.app/",
    github: "https://github.com/yohnx/accordion",
    title: "Accordion",
    text: "a simple site with different questions and their answer",
  },
];
