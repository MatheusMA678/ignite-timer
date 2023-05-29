import { Link } from 'react-router-dom'
import { HistoryPlaceholderContainer, HistoryPlaceholderLink } from './styles'

export function HistoryPlaceholder() {
  return (
    <HistoryPlaceholderContainer>
      <span>Ops! Parece que você não tem nenhum registro. </span>
      <HistoryPlaceholderLink to="/">Crie um agora!</HistoryPlaceholderLink>
    </HistoryPlaceholderContainer>
  )
}
