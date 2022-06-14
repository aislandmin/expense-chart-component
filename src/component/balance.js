import styles from "./balance.module.css";

const Balance = () => {
  return (
    <div className={`container flex ${styles.balance}`}>
      <div>
        <p>My balance</p>
        <h2>$921.48</h2>
      </div>
      <img src="logo.svg" alt="Logo" aria-hidden="true" />
    </div>
  );
};

export default Balance;
