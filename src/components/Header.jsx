import React, { useState, useEffect } from "react";

//import NavLink,useNavigate
import { NavLink, useNavigate } from "react-router-dom";

//import firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";

const navLinks = [
  { path: "home", display: "Home" },
  { path: "offers", display: "Offers" },
  { path: "sign-in", display: "Sign in" },
];

const Header = () => {
  const [authanticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, [auth]);
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
                    to={
                      authanticated && item.display === "Sign in"
                        ? "/profile"
                        : item.path
                    }
                    className={(navClass) => {
                      return `cursor-pointer py-[20px] text-md font-semibold
                  border-b-[3px]  ${
                    navClass.isActive
                      ? "text-black border-b-red-500"
                      : "text-gray-400 border-b-transparent"
                  }`;
                    }}
                  >
                    {authanticated && item.display === "Sign in"
                      ? "Profile"
                      : item.display}
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
