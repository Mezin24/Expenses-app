import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDateEntered = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random() + '',
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseDate={saveExpenseDateEntered} />
    </div>
  );
};

export default NewExpense;
