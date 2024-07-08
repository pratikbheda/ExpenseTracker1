import React from "react";
import ChartBar from "./ChatBar";
import "./Chart.css";

const Chart = (props) => {
  //getting the value from the objects of datapoints
  //dataPointValue is the array of numbers.
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //Finding the maximum among the given amounts
  //max method,takes arguments and returns the maximum among them.we cannot directly pass the array.
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={totalMaximum}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
