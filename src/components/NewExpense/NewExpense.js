import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [hide, setHide] = useState(true);
  const importDataToNewExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.importDataToApp(expenseData);
  };
  const expandHandler = () => {
    setHide(!hide);
  };
  return (
    <div className="new-expense">
      <form>
        {hide === true && (
          <button onClick={expandHandler}>Add New Expense</button>
        )}
        {hide !== true && (
          <ExpenseForm
            importDataToNewExpense={importDataToNewExpenseHandler}
            expand={expandHandler}
          ></ExpenseForm>
        )}
      </form>
    </div>
  );
};

export default NewExpense; 
