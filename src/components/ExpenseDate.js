function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const date = props.date.toLocaleString('en-US',{day:'2-digit'})

    return (
        <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
      </div>
    );

}

export default ExpenseDate;