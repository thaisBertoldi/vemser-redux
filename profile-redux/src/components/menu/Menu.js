import React from "react";
import { LinkMenu, MenuContainer } from "./Menu.styles";

function Menu() {
  return (
    <MenuContainer>
      <LinkMenu to="/">
        <li>Home</li>
      </LinkMenu>
      <LinkMenu to="/profile">
        <li>Profile</li>
      </LinkMenu>
    </MenuContainer>
  );
}

export default Menu;
