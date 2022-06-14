import expenseData from "./data.json";
import Balance from "./component/balance";
import Expenses from "./component/expenses";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Balance />
      <Expenses data={expenseData} />
    </div>
  );
}

export default App;
