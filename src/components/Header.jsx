import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const navLinks = [
  { path: "home", display: "Home" },
  { path: "offers", display: "Offers" },
  { path: "sign-in", display: "Sign in" },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white py-[20px] border-b shadow-sm sticky top-0 ">
      <div className="container mx-auto flex justify-between items-center px-3">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="realtor-logo"
            className="h-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-8">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) => {
                      return `cursor-pointer py-[20px] text-md font-semibold
                      border-b-[3px]  ${
                        navClass.isActive
                          ? "text-black border-b-red-500"
                          : "text-gray-400 border-b-transparent"
                      }`;
                    }}
                  >
                    {item.display}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
