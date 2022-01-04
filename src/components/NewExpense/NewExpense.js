import React, { useState } from 'react';

import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDateEntered = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random() + '',
    };

    props.onAddExpense(expenseData);
  };

  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseDate={saveExpenseDateEntered}
          onCancelEditing={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
