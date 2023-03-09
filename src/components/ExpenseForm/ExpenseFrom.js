import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [addButton, setAddButton] = useState(false);

  function prevent(e) {
    e.preventDefault();

    const data ={
      title: title,
      amount: amount,
      date: new Date(date)
    }

    props.expenseData(data);
    setAddButton(false);
  }

  return(
    <form>
      {addButton === true ? (
      <div>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' onChange={(e) => setDate(e.target.value)}/>
          </div>
        </div>
        <div className='new-expense__actions'>
          <button onClick={() => setAddButton(false)}>Cancel</button>
          <button type='submit' onClick={prevent}>Add Expense</button>
        </div>
      </div>
      ) : (
        <div>
          <button onClick={() => setAddButton(true)}>Add New Expense</button>
        </div>
      )}
    </form>
  );
}

export default ExpenseForm;