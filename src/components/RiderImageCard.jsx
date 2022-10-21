import React from "react";

const RiderImageCard = ({image}) => {
  return (
    <>
      <div className="bg-orange-400 overflow-hidden w-1/2 h-80 rounded-t-md rounded-b-3xl">
        <img src={image} alt="DSrider" />
      </div>
    </>
  );
};

export default RiderImageCard;
