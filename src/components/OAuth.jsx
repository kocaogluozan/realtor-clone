import React from "react";

//import icons
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button
      className="flex items-center justify-center w-full bg-red-700 
                px-7 py-3 text-white uppercase text-sm font-medium hover:bg-red-800
                transition duration-150 ease-in-out active:bg-red-900 shadow-md 
                hover:shadow-lg active:shadow-lg rounded"
    >
      <FcGoogle className="mr-2 text-2xl bg-white rounded-full" /> Continue with
      Google
    </button>
  );
};

export default OAuth;
