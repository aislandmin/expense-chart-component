import Chart from "./chart";
import ExpensesDetail from "./expenses-detail";
import styles from "./expenses.module.css";

const Expenses = (props) => {
  return (
    <div className={`container ${styles.expenses}`}>
      <h2>Spending - last 7 days</h2>
      <Chart data={props.data} />
      <hr />
      <ExpensesDetail />
    </div>
  );
};

export default Expenses;
