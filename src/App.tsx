import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import NotFound from './components/pages/NotFound'
import Sidebar from './components/containers/Sidebar'
import { useState } from 'react'
import { User } from './interfaces/User'
import Profile from './components/pages/Profile'
import Auth from './components/pages/Auth'

function App() {
  const [logged, setLogged] = useState(false)
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState({username: 'santu', followeds: '1,2,3,4'} as User)
  const [notFound, setNotFound] = useState(false)

  const handleLogged = (logged: boolean) => {
    setLogged(logged)
  }

  const handleNotFound = (notFound: boolean) => {
    setNotFound(notFound)
  }

  return (
    <Router>
      <div className='flex w-screen'>
        <Sidebar handle={handleNotFound} notFound={notFound} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='auth' element={<Auth handle={handleLogged} logged={logged} login={login} />} />
          <Route path='/profile' element={<Profile user={user} />} />
          <Route path='not-found' element={<NotFound />} />
          <Route path='*' element={<Navigate to='not-found' />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
