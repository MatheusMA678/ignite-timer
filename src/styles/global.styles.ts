import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }
  
  body {
    background-color: ${({ theme }) => theme.colors['gray-900']};
    color: ${({ theme }) => theme.colors['gray-300']};
    font-family: "Roboto", sans-serif;
    padding: 0 1rem;

    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      background: none;
      width: .5rem;
    }
    
    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors['gray-800']};
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors['gray-600']};
      border-radius: 999px;
    }
  }
`
