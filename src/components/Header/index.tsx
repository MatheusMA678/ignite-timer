import { useContext } from 'react'
import { Timer, Scroll } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import { CyclesContext } from '../../contexts/CyclesContext'

import { HeaderContainer } from './styles'

import IgniteLogo from '../../assets/logo.svg'

const variants = {
  hide: {
    y: 10,
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

export function Header() {
  const { activeCycle } = useContext(CyclesContext)

  return (
    <HeaderContainer>
      <div>
        <img src={IgniteLogo} alt="Logotipo do Ignite" />

        <motion.h1 variants={variants} animate={activeCycle ? 'show' : 'hide'}>
          Trabalhando em: <span>{activeCycle ? activeCycle.task : ''}</span>
        </motion.h1>
      </div>
      <nav>
        <NavLink to={'/'} title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to={'/history'} title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
