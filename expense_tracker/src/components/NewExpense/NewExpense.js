import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';



const NewExpense = (props) => {
    const[isEditing, setIsEditing]= useState(false);
    const onSaveExpenseDataHandler = (enteredEspenseData) => {
        const expenseData = {
            ...enteredEspenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHnadler = () => {
        setIsEditing(false);
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick = {startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHnadler}/>}
    </div>
}

export default NewExpense;