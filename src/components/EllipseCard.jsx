import React from "react";

const EllipseCard = ({ header, paragraph }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center w-1/3 px-6 h-64">
        <div className="bg-gray-700 rounded-full w-24 h-24"></div>
        <h1 className="text-md mt-2 font-bold leading-10">{header}</h1>
        <p className="text-sm mt-2">{paragraph}</p>
      </div>
    </>
  );
};

export default EllipseCard;
