import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }  
 
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesOutput = <p>No Expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesOutput = filteredExpenses.map(expense => (
      <ExpenseItem 
        key = {expense.id}
        title = {expense.title} 
        amount = {expense.amount} 
        date = {expense.date}
      />
    ));
  }
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter 
      selected = {filteredYear} 
      onChangeFilter ={filterChangeHandler} />
     {expensesOutput}
    </Card>
    </div>
  );
};

export default Expenses;
