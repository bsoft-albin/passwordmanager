
import './App.css'
import { Routes,Route } from 'react-router-dom'
import DataTable from './components/DataTable'
import AppContent from './components/AppContent'


function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path='/data-table' element={<DataTable /> } />
    </Routes>
  )
}

export default App
