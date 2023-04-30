import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.base.grayBg};
    color: ${({ theme }) => theme.colors.base.white};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  button {
    border: none;
    background: none;
    outline: none;
    color: ${({ theme }) => theme.colors.base.white};
    cursor: pointer;
  }
`
