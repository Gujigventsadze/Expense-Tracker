import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import History from './components/History'
import Newtransaction from './components/Newtransaction'
import { TransactionProvider } from './GlobalContext/TransactionContext'

function App() {
  return (
    <>
      <Header />
      <TransactionProvider>
      <div className='main-container'>
        <Balance />
        <Income />
        <History />
        <Newtransaction />
      </div>
      </TransactionProvider>
    </>
  )
}

export default App
