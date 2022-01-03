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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={currentYear}
          onImplementFilter={implementFilter}
        />
        {props.items
          .filter((item) => item.date.getFullYear() === +currentYear)
          .map((item, index) => {
            return (
              <ExpenseItem
                title={item.title}
                amount={item.amount}
                date={item.date}
                key={index}
              />
            );
          })}
      </Card>
    </div>
  );
}

export default Expenses;
