import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /* on every keystroke the title gets changed.Now how do we capture the title.
  Whenever event is triggered, it sends a event object to the event handler function.This object contains many properties. Among them one is target, which contains the value property. This stores the changed value on each stroke. So by using object.target.value we can get the changed value.
  */

  //Here event is the object of the event
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(event.target.value);
  };
  /*
  Here we have used user state to change the updated value.
  But we don't capture all the changes, that mean we did not store the form inputs to use later.
  We can store them in a object, whenever the form is submitted, and can use later those values whenver needed.
  We can do it in two ways :
  1. Add a event listnier, onclick to the submit button.
  2.Form by default throws an object, when submit button is clicked, we can use of this object.
  2nd way is better to use.
  but 2nd one is not working here,so i used 1st method
  */
  const submitHandler = (event) => {
    /*Whenever the submit button is clicked,the browser tries to send a request to the hosting server,and reloads the page.
    This is the default behaviour of browser,We want to capture the input details,so we want to be in current page.
    So disable the default behaviour of the browser.
    This is done using the calling preventDefault() function of the object */
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //by default all the inputs are strings,we need to explictly convert them to desired data type.
      date: new Date(enteredDate),
    };
    /*Here we are storing the input values in the object, the keys of the object are up to us.
    enteredDate is the string object, Date method parses it and convert it into the date object */
    props.importDataToNewExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.expand();
  };
  const cancelHandler = () => {
    props.expand();
  };
  /*Two-way binding
  When the input is entered,the input doesn't resets when the form is submitted.
  We requrie to reset the input,without loosing the entered input.
  This is where 2 way binding come into picture.
  Every input element has the attribute {value = ""} which sets the interanl value of the input. 
  To bring back the value, we can set the internal value to the enteredinput,after getting the input
  call the state updating function,and change the value. As the internal value is set to the enteredInput
  internal value also changes.
  */
  return (
    <form>
      <div className="new-expense__actions">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
            {/* later we add the filter, for that we need minimum and maximum time period */}
          </div>
        </div>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
