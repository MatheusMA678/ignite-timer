import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  transition: 0.2s;

  background-color: ${({ theme }) => theme.colors['gray-700']};
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
`
