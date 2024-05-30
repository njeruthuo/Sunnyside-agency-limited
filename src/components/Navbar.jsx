import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggle = function () {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="w-[90%] mx-auto  text-white relative">
      <ul className="flex justify-end py-4 space-x-16 place-items-center">
        <li className="mr-auto">
          <img src={logo} alt="" />
        </li>
        <li className="hidden sm:block">About</li>
        <li className="hidden sm:block">Services</li>
        <li className="hidden sm:block">Projects</li>
        <li className="text-black hidden sm:block bg-white py-2 px-4 rounded-2xl hover:cursor-pointer font-bold text-xs">
          CONTACT
        </li>
        <li onClick={toggle} className="mr-auto sm:hidden">
          <img src={hamburger} alt="" />
        </li>
      </ul>

      {/* Mobile menu */}
      {openMenu && (
        <ul className="text-black bg-white  absolute top-16 left-0 right-0 flex flex-col items-center space-y-14 py-10">
          <li onClick={toggle} className="">
            About
          </li>
          <li onClick={toggle} className="">
            Services
          </li>
          <li onClick={toggle} className="">
            Projects
          </li>
          <li
            onClick={toggle}
            className="text-black  bg-Yellow py-2 px-4 rounded-2xl hover:cursor-pointer font-bold text-xs"
          >
            CONTACT
          </li>
        </ul>
      )}
    </div>
  );
};
export default Navbar;
