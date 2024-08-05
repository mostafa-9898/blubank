// Router
import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Register from './pages/Register'
import Loan from './pages/Loan'

// Context
import { UserLoamInfoContextProvider } from './context/userLoamInfoContext'

function App() {

  return (
    <UserLoamInfoContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/loan' element={<Loan />} />
      </Routes>
    </UserLoamInfoContextProvider>
  )
}

export default App
