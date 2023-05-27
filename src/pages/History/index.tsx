import { HistoryContainer, HistoryList, Status } from './styles'
import { v4 as uuid } from 'uuid'

interface TableDatasType {
  id: string
  task: string
  duration: string
  createdAt: string
  status: 'green' | 'yellow' | 'red'
}

const tableHeads = [
  { label: 'Tarefa' },
  { label: 'Duração' },
  { label: 'Início' },
  { label: 'Status' },
]

const tableDatas: TableDatasType[] = [
  {
    id: uuid(),
    task: 'Tarefa 1',
    duration: '10 minutos',
    createdAt: 'Há 2 dias',
    status: 'green',
  },
  {
    id: uuid(),
    task: 'Tarefa 2',
    duration: '40 minutos',
    createdAt: 'Há 1 mês',
    status: 'yellow',
  },
  {
    id: uuid(),
    task: 'Tarefa 3',
    duration: '20 minutos',
    createdAt: 'Há 5 dias',
    status: 'green',
  },
  {
    id: uuid(),
    task: 'Tarefa 4',
    duration: '15 minutos',
    createdAt: 'Há 2 meses',
    status: 'red',
  },
  {
    id: uuid(),
    task: 'Tarefa 5',
    duration: '30 minutos',
    createdAt: 'Há 2 meses',
    status: 'red',
  },
]

export function History() {
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

      <HistoryList>
        <table>
          <thead>
            <tr>
              {tableHeads.map((head) => {
                return <th key={head.label}>{head.label}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {tableDatas.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.task}</td>
                  <td>{data.duration}</td>
                  <td>{data.createdAt}</td>
                  <td>
                    <Status statusColor={data.status}>
                      {data.status === 'green' && 'Concluído'}
                      {data.status === 'yellow' && 'Em andamento'}
                      {data.status === 'red' && 'Interrompido'}
                    </Status>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
