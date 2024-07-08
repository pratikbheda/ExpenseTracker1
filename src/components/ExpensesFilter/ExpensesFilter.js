import React from "react";
import years from "../../constants";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const onChangeHandler = (event) => {
    // console.log(event.target.value);
    props.importYearToNEC(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={onChangeHandler}>
          {years.map((year) => (
            <option value={`${year}`}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
