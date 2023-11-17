import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
// // approach 1: using state slices
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

// // approach2: initializing state with object
// // do not forget to update all key: value pairs in state object

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount:'',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        // // aproach1
        setEnteredTitle(event.target.value);
        // // aproach2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });    
        // // aproach 3
        //// important Note: when you need tp update a state based on !exactly previously state! use this 
        // //function! like counters! 
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value}
        // })
    }
    const amountChangeHandler = (event) => {
        // // aproach1       
        setEnteredAmount(event.target.value);  
        // // aproach2 
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });  
    }
    const dateChangeHandler = (event) => {
        // // aproach1
        setEnteredDate(event.target.value);
        // // aproach2
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });       
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date (enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date"  value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new_expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>

}

export default ExpenseForm;