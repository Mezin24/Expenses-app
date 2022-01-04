import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
  const [currentYear, setCurrentYear] = useState('2020');

  const implementFilter = (year) => {
    setCurrentYear(year);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === currentYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesFilter
          year={currentYear}
          onImplementFilter={implementFilter}
        />

        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
