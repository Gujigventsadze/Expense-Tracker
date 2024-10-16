import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import History from './components/History'
import Newtransaction from './components/Newtransaction'
import { TransactionProvider } from './GlobalContext/TransactionContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chart from './components/Chart'



function App() {
  return (
    <>
      <Router>
          <Header />
          <TransactionProvider>
          <div className='main-container'>
            <Routes>
              <Route path='/' element={<><Balance /><Income /></>} />
              <Route path='/visualise' element={<Chart />} />
            </Routes>
            <History />
            <Newtransaction />
          </div>
          </TransactionProvider>
      </Router>
    </>
  )
}

export default App
