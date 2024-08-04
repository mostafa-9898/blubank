
// Redux
import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Register from './pages/Register'
import Loan from './pages/Loan'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/loan' element={<Loan />} />
    </Routes>
  )
}

export default App
