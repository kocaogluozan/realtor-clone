import React from "react";
//import spinner
import spinner from "../assets/svg/Spinner.svg";

const Spinner = () => {
  return (
    <div
      className="bg-black/50 flex items-center justify-center 
                    fixed left-0 right-0 bottom-0 top-0 z-100"
    >
      <div>
        <img src={spinner} alt="loading-spinner" className="h-24" />
      </div>
    </div>
  );
};

export default Spinner;
