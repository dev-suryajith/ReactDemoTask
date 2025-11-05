import { Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import FormPage from './pages/FormPage'

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<FormPage />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </div>
  )
}

export default App
