import ExpenseItem from "./ExpenseItem";
import "./NewExpensesComponent.css";
import React from "react";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const NewExpensesComponent = (props) => {
  const [chosenYear, setChosenYear] = useState("2020");

  const importYearToNECHandler = (year) => {
    setChosenYear(year);
  };
  /*Filter function will filteres out the data based on the passed function. Here we wish to get the all the expenses in a particular year,so we choose only that expenses with given year. 
  And we apply map on these filterdExpenses. 
  Basically wer are fetching our desried data and outputting them.
  NOTE : filter function returns a new array, original data is not effected*/
  const filteredExpenses = props.expensesarr.filter((expense) => {
    return expense.date.getFullYear().toString() === chosenYear;
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={chosenYear}
        importYearToNEC={importYearToNECHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      {/*
      React is capable of rendering the array of JSX elements. 
      Ex :[<ExpenseItem/> ,<ExpenesItem/>]
      map function takes every element of the array and maps with the provided function,In the given example 
      we take the every object of the expenses array and map with the JSX element i.e ExpenseItem.
      Now the array looks like [<ExpenseItem/> ,<ExpenseItem/> ,<ExpenseItem/>]
      As the array expenses changes the elements in the array also changes, in this way we can dynamically output the ExpenseItem.
      */}

      {filteredExpenses.length === 0 && (
        <p style={{ color: "white", fontWeight: "bold" }}>
          No Expenses to display
        </p>
      )}

      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id} //Always add the key to the JSX elements,because react cannot identify the elements unqiuely,and don't know where to add the new element.
            //providing the key, helps in identifying the element unqiuely and position, so react does no mistakes. It always better to use the key. It also works if
            //not provide any key,but sometimes raises the bugs.key should be unqiue for every element.
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
  );
};

export default NewExpensesComponent;
//we can use the ternary operator for condtional statements or the javascript && operator.
//The syntax for && operator is boolean && executing task
/*
Givne ternary statement, this can be transformed usin the && 
{filteredExpenses.length === 0 ? (
        <p color="white">No Expenses to display</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
             title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}

    -------------------Equivalent to----------------------------
    
    filteredExpenses.length == 0 && <p>No Expenses to display</p>
    filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
             title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )) 
*/
