import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'
import { HistoryPlaceholder } from './components/HistoryPlaceholder'

export function History() {
  const { cycles } = useContext(CyclesContext)

  const cyclesSorted = cycles.sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  )

  console.log(cyclesSorted)

  return (
    <HistoryContainer
      initial={{
        opacity: 0,
        x: 50,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }}
      exit={{
        opacity: 0,
        x: 50,
        transition: {
          duration: 0.4,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }}
    >
      <h1>Meu histórico</h1>

      {cycles.length !== 0 ? (
        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cyclesSorted.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.minutesAmount} minutos</td>
                    <td>
                      {formatDistanceToNow(new Date(cycle.startDate), {
                        locale: ptBR,
                        addSuffix: true,
                      })}
                    </td>
                    <td>
                      {cycle.finishedDate && (
                        <Status statusColor="green">Concluído</Status>
                      )}
                      {cycle.interruptedDate && (
                        <Status statusColor="red">Interrompido</Status>
                      )}
                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status statusColor="yellow">Em andamento</Status>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </HistoryList>
      ) : (
        <HistoryPlaceholder />
      )}
    </HistoryContainer>
  )
}
