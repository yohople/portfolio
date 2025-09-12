import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h2 className="text-3xl tracking-wider font-medium capitalize">{text}</h2>
    </div>
  );
};

export default SectionTitle;
