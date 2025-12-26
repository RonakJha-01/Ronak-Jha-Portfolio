import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ Links, closeMenu }) => {
  return (
    <ul className="flex flex-col py-6 items-center bg-[#121212] md:hidden">
      {Links.map((link, index) => (
        <li key={index} className="py-3">
          <NavLink
            href={link.path}
            title={link.title}
            onClick={closeMenu}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
