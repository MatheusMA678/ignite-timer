import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/global.styles";
import { AppTheme } from "./styles/theme/defaultTheme";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  );
}
