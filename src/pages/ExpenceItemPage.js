import "./ExpenceItemPage.css";
import ExpenceItem from "../components/ExpenceItem/ExpenceItem";
import NewExpense from "../components/NewExpense/NewExpense";
import ExpensesFilter from "../components/ExpenceFilter/ExpenseFilter";
import ExpensesChart from "../components/ExpenceChart/ExpenseChart";
import { useState } from "react";


const expense = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e2',
    title: 'Napper Sofa',
    amount: 143.30,
    date: new Date(2020, 7, 14)
  },
  { 
    id: 'e3',
    title: 'LG 4k TV',
    amount: 399.83,
    date: new Date(2021, 4, 12) 
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 43.62,
    date: new Date(2021, 7, 12),
  },
  {
    id: 'e5',
    title: 'PS5',
    amount: 714.94,
    date: new Date(2019, 3, 12),
  },
  {
    id: 'e6',
    title: 'Sony PS Headphone',
    amount: 90.89,
    date: new Date(2019, 7, 12),
  },
  {
    id: 'e7',
    title: 'Meta Quest 2',
    amount: 448.31,
    date: new Date(2020, 4, 12),
  },
  {
    id: 'e8',
    title: 'Gran Turismo DD',
    amount: 479.95,
    date: new Date(2019, 10, 12),
  },
];


function ExpenceItemPage () {
  
  const [filterYear, setFilterYear] = useState('2019');
  const [items, setItems] = useState(expense);


  function getNewExpense(newExpence) {
    // console.log(newExpence);
    expense.push(newExpence);
    setItems([...expense]);
    // setItems([newExpence, ...expense]);
  }

  function getFilterData(data) {
    // console.log(data);
    setFilterYear(data);
  }

  const arr = items.filter((i) => {
    return i.date.getFullYear().toString() === filterYear;
  })

  function getDeleteItem(item) {
    expense.splice(expense.findIndex(a => a.title === item.Title), 1);
    setItems([...expense]);
  }


  return(
    <div>
      <NewExpense getExpense={getNewExpense} />
      <div className="expenses">
        <ExpensesFilter selected={filterYear} filterData={getFilterData}/>
        <ExpensesChart expenses={arr} />

        {/* {items.map((i) => <ExpenceItem key={i.id} Title={i.title} Amount={i.amount} Date={i.date}/>)} */}
        
        {arr.length === 0 ? (
          <p className="error_message"> No Expenses Found !</p>
        ) : (
          arr.map((i) =>
            <ExpenceItem key={i.id} Title={i.title} Amount={i.amount} Date={i.date} deleteItem={getDeleteItem} />
          )
        )}

        {/* <ExpenceItem Title={items[0].title} Amount={items[0].amount} Date={items[0].date}/>
        <ExpenceItem Title={items[1].title} Amount={items[1].amount} Date={items[1].date}/>
        <ExpenceItem Title={items[2].title} Amount={items[2].amount} Date={items[2].date}/>
        <ExpenceItem Title={items[3].title} Amount={items[3].amount} Date={items[3].date}/> */}

      </div>
    </div>
  );
}

export default ExpenceItemPage;