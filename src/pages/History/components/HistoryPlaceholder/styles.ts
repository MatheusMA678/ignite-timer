import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HistoryPlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1.125rem;
  }
`

export const HistoryPlaceholderLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-size: 1.125rem;

  &:hover {
    text-decoration: underline;
  }
`
