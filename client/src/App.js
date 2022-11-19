import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BankAPI } from './api/BankAPI';

import './App.css';
import Breakdown from './components/Breakdown';
import NavBar from './components/NavBar';
import Operations from './components/Operations';
import Transactions from './components/Transactions';

function App() {
  const [balance, setBalance] = useState(0)


  const callUpdateBalance = async () => {
    const balance = await BankAPI().getBalance()
    setBalance(balance.balance)
  }

  return (
    <div className="App">
      <Router> 
        <div className="App">
          <NavBar balance={balance}/>
          
          <Route path="/" exact render={() => <Transactions />} />
          <Route path="/operations" exact render={() => <Operations callUpdateBalance={callUpdateBalance}/>} />
          <Route path="/Breakdown" exact render={() => <Breakdown />} />
        </div>
      </Router>
    </div>
  );
}

export default App;
