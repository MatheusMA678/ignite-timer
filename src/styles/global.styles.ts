import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.base.gray[700]};
    color: ${({ theme }) => theme.colors.base.white};
  }
`;
