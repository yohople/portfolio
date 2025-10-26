import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { IoPrism } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

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
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in TypeScript, leveraging static typing and modern ECMAScript features to build robust, scalable, and dynamic web applications",
  },
  {
    id: nanoid(),
    title: "React&NextJS",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Prisma-ORM",
    icon: <IoPrism className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in building the data access layer using Prisma for Node.js and TypeScript applications. I leverage the Prisma Client to enable 100% type-safe database interactions, significantly reducing runtime errors and improving developer productivity. ",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/dbk5vcnag/image/upload/v1761471525/home_xze5of.jpg",
    url: "http://store-8axo.vercel.app/",
    github: "https://github.com/yohople/store",
    title: "Next-Store",
    text: "fully Typescript E-commerce platform where admins can create, delete, update products and customers can buy products seamlessly",
  },
];
