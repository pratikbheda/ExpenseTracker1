import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0"; //css takes only strings as values
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"; //by adding % we convert into string
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
/*
NOTE : 
in style attribute, when any key has hiphen ex background-color it should be wrapped in quotes. 'background-color' : red 
We can also use the Canon notation if we don't want to use quotes.
'background-color' ----> backgroundColor 
*/
