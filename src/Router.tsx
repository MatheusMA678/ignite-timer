import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
