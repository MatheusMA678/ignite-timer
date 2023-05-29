import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../../../../contexts/CyclesContext'

import { FormContainer, TaskInput, MinutesAmountInput } from './styles'

const variants = {
  hide: {
    y: -10,
    opacity: 0,
    transition: {
      ease: [0.43, 0.13, 0.23, 0.96],
      duration: 0.5,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.43, 0.13, 0.23, 0.96],
      duration: 0.5,
    },
  },
}

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <FormContainer variants={variants} animate={activeCycle ? 'hide' : 'show'}>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
