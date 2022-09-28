import Logo from "../Logo/Logo.component";
import Menu from "../Menu/Menu.component";

import { DesktopNavbar } from "./Navbar.styles";

const Navbar = () => {
  return (
    <DesktopNavbar>
      <Logo />
      <Menu />
    </DesktopNavbar>
  );
};

export default Navbar;
