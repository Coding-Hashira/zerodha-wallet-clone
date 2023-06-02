import React from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <nav className="px-20 flex justify-between items-center border shadow">
      <Logo />

      {/* Right side */}
      <div className="flex items-center space-x-7">
        <div className="flex  items-center justify-center  space-x-9">
          <NavItem text="Dashboard" />
          <NavItem text="Portfolio" active />
          <NavItem text="Reports" />
          <NavItem text="Funds" />
          <NavItem text="Account" />
        </div>
        <div className="h-10 w-[2px] bg-[#e2e2e2]"></div>
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
