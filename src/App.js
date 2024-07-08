import "./App.css";
import NewExpensesComponent from "./components/NewExpensesComponent";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const intialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
];
const App = () => {
  const [expenses, addExpenses] = useState(intialExpenses);
  const importDataToAppHandler = (newExpense) => {
    addExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
    // Here we are spreading the expenses in previous state and adding the newExpense.
    //we can simply pass the [newExpense,...expenses] as a argument to the addExpenses but it not better to deal with previous state and current state.
    //Use function while dealing with States.
    //React automatically creates the snapshot of the previous state, Here prevExpenses is the snapshot of the expenses.Variable naming is our choice.
  };
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Expense Tracker</h1>
      <NewExpense importDataToApp={importDataToAppHandler}></NewExpense>
      <NewExpensesComponent expensesarr={expenses}></NewExpensesComponent>
    </div>
  );
};

export default App;

// NOTE: changing any variable does not make the react to execute it again, so to make it excute it again we should use the state
// Always remember this
//Whenever we need to use the data from the previous state,it is better to use the function.
