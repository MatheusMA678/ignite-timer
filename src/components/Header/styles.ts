import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 2rem;
    align-items: center;

    h1 {
      font-size: 1.2rem;
      font-weight: normal;

      span {
        font-weight: bold;
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${({ theme }) => theme.colors['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: 0.2s;

      &:hover {
        border-bottom-color: ${({ theme }) => theme.colors['green-500']};
      }

      &.active {
        color: ${({ theme }) => theme.colors['green-500']};
      }
    }
  }
`
