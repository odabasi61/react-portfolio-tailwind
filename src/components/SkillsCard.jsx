import React from "react";

const SkillsCard = (data) => {
  const { img, name, index, shadow } = data;
  return (
    <div className={`shadow-xl ${shadow} hover:scale-110 duration-500`}>
      <img className="w-20 h-20 mx-auto" src={img} alt={name} />
      <p className="my-4">{name}</p>
    </div>
  );
};

export default SkillsCard;
