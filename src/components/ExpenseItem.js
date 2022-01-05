import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate= new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const amount = 250.50;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
