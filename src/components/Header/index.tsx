import { Timer, Scroll } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

import IgniteLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={IgniteLogo} alt="Logotipo do Ignite" />
      <nav>
        <NavLink to={"/"} title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to={"/history"} title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
