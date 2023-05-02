import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.base.gray[800]};
    color: ${({ theme }) => theme.colors.base.white};
    font-family: "Roboto", sans-serif;
    padding: 0 1rem;

    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      background: none;
      width: .5rem;
    }
    
    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.base.gray[800]};
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.base.gray[600]};
      border-radius: 999px;
    }
  }
`;
