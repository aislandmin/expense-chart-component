import styles from "./expenses-detail.module.css";

const ExpensesDetail = () => {
  return (
    <div className={`flex ${styles.details}`}>
      <div className={styles.left}>
        <p>Total this month</p>
        <h2>$478.33</h2>
      </div>
      <div className={styles.right}>
        <h4>+2.4%</h4>
        <p>from last month</p>
      </div>
    </div>
  );
};

export default ExpensesDetail;
