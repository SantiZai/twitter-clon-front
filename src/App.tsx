import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import NotFound from './components/pages/NotFound'
import Sidebar from './components/containers/Sidebar'
import { useState } from 'react'

function App() {
  const [notFound, setNotFound] = useState(false)

  const handleNotFound = (notFound: boolean) => {
    setNotFound(notFound)
  }

  return (
    <Router>
      <div className='flex'>
        <Sidebar handle={handleNotFound} notFound={notFound} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='not-found' element={<NotFound />} />
          <Route path='*' element={<Navigate to='not-found' />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
