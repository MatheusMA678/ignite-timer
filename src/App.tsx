import {
  Container,
  Logo,
  MainHeader,
  MainHeaderButton,
  MainHeaderButtonWrapper,
  TimerContainer,
} from "./styles/App.styles";
import { Scroll, Timer } from "@phosphor-icons/react";

import IgniteLogo from "./assets/logo.svg";

export function App() {
  return (
    <Container>
      <MainHeader>
        <Logo src={IgniteLogo} alt="Logo do Ignite" />
        <MainHeaderButtonWrapper>
          <MainHeaderButton>
            <Timer size={28} />
          </MainHeaderButton>
          <MainHeaderButton>
            <Scroll size={28} />
          </MainHeaderButton>
        </MainHeaderButtonWrapper>
      </MainHeader>
      <TimerContainer />
    </Container>
  );
}
