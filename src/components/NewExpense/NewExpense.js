import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react/cjs/react.development';

const NewExpense = (props) => {
    const[isEditing, setIsEditing]=useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }
    
    const startedEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startedEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )

};

export default NewExpense;