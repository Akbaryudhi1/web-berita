import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div className="border-4 border-indigo-500/100 rounded">
      <img src={img} alt="test" className="p-2" />
      <h1 className="p-2 font-bold">{title}</h1>
      <p className="p-2">{description}</p>
    </div>
  );
};

export default Card;
