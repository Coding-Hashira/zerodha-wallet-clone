import React from "react";

const NavItem = ({ text, active }) => {
  return (
    <div
      className={`text-sm font-semibold  transition-all hover:text-[#2f72ca] ${
        active
          ? "text-[#2f72ca] py-5 border-b-[#2f72ca] border-b-4"
          : "text-gray-600 hover:-translate-y-1"
      } `}
    >
      <div className="cursor-pointer">{text}</div>
    </div>
  );
};

export default NavItem;
