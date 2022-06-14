import ChartBar from "./chart-bar";
import styles from "./chart.module.css";

const Chart = (props) => {
  const dataPointValues = props.data.map((dataPoint) => dataPoint.amount);
  const maxPointValue = Math.max(...dataPointValues);
  return (
    <div className={`flex ${styles.chart}`}>
      {props.data.map((dataPoint) => (
        <ChartBar
          key={dataPoint.day}
          value={dataPoint.amount}
          maxValue={maxPointValue}
          label={dataPoint.day}
        />
      ))}
    </div>
  );
};

export default Chart;
