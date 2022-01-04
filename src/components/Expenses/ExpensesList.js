import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  if (props.items.length > 0) {
    return (
      <ul className="expenses-list">
        {props.items.map((item, index) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={index}
          />
        ))}
      </ul>
    );
  }
};

export default ExpenseList;
