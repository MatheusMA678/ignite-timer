import { useContext } from 'react'
import { HandPalm, Play } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CyclesContext } from '../../contexts/CyclesContext'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import {
  CountdownWrapper,
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 5,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  const countdownWrapperVariants = {
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

  return (
    <HomeContainer
      initial={{
        opacity: 0,
        x: -50,
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
        x: -50,
        transition: {
          duration: 0.4,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }}
    >
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <CountdownWrapper
          // variants={countdownWrapperVariants}
          animate={
            activeCycle
              ? {
                  y: -30,
                  transition: {
                    duration: 0.5,
                    delay: 0.5,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  },
                }
              : {
                  y: 0,
                  transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
                }
          }
        >
          <Countdown />

          {activeCycle ? (
            <StopCountdownButton onClick={interruptCurrentCycle} type="button">
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton disabled={isSubmitDisabled} type="submit">
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )}
        </CountdownWrapper>
      </form>
    </HomeContainer>
  )
}
