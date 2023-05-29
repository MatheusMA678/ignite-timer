import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HomeContainer = styled(motion.main)`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const CountdownWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const BaseCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;

  color: ${(props) => props.theme.colors['gray-100']};
  font-weight: bold;

  border: none;
  padding: 1rem;
  border-radius: 0.5rem;

  cursor: pointer;
  transition: 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.colors['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme.colors['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['red-700']};
  }
`
