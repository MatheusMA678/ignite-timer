import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.base.grayElements};
  padding: 3rem;
  border-radius: 0.5rem;
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`;

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export const MainHeaderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MainHeaderButton = styled.button`
  padding: 0.5rem;
  transition: color 0.2s;

  :hover {
    color: ${({ theme }) => theme.colors.product.green};
  }
`;

export const TimerContainer = styled.div`
  margin: 0 auto;
  min-width: 200px;
  min-height: 200px;
  border: 1px solid red;
`;
