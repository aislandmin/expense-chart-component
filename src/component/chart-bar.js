import { useState } from "react";
import styles from "./chart-bar.module.css";

const ChartBar = (props) => {
  const [isPopupVisibile, setIsPopupVisible] = useState(false);

  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  const onMouseEnterHandler = () => {
    setIsPopupVisible(true);
  };

  const onMouseLeaveHandler = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={styles.bar}>
      <div className={styles.bar__inner}>
        <div
          className={`${
            props.maxValue === props.value
              ? styles.bar__fill__max
              : styles.bar__fill
          }

          ${
            isPopupVisibile &&
            (props.maxValue === props.value
              ? styles.bar__show__max
              : styles.bar__show)
          }`}
          popup={props.value}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          style={{
            height: barFillHeight,
          }}
        ></div>
      </div>
      <div className={styles.bar__label}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
