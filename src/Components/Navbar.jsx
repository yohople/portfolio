import React from "react";
import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold capitalize">
          web <span className="text-emerald-600">dev</span>
        </h2>
        <div className="flex gap-x-3 capitalize">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="hover:text-emerald-600 text-lg tracking-wide duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
