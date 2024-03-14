import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Message from './components/Message.jsx';
import AddTransaction from './components/AddTransaction.jsx';
import Transactions from './components/Transactions.jsx';

function App() {

  return (
    <>
      <div className="welcome-section">
        <Message /> {/* This is the welcome message. */}
      </div>

      <div className="transactions-section">
        <Transactions /> {/* This component displays list of added transactions. */}
      </div>

      <div className="add-transaction-section">
        <AddTransaction /> {/*This component allows the user to add a transaction. */}
      </div>
    </>
  )
}

export default App