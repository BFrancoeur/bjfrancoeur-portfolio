import React from "react";

import { DesktopNavMenu, MenuItem, NavLink } from "./Menu.styles";

const Menu = () => {
  return (
    <DesktopNavMenu>
      <MenuItem>
        <NavLink to="/">Home</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="about-me">About Me</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="Services">Services</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="Portfolio">Portfolio</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="contact-me">Contact Me</NavLink>
      </MenuItem>
    </DesktopNavMenu>
  );
};

export default Menu;
