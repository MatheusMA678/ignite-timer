import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FormContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: none;
  outline: none;
  border-bottom: 2px solid ${(props) => props.theme.colors['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.colors['gray-100']};
  transition: 0.2s;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.colors['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
