import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [currentYear, setCurrentYear] = useState('2020');

  const implementFilter = (year) => {
    setCurrentYear(year);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === currentYear
  );

  let expensesContent = <p>No Expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item, index) => (
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        key={index}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={currentYear}
          onImplementFilter={implementFilter}
        />

        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
