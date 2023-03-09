import "./NewExpense.css";
import ExpenseForm from '../ExpenseForm/ExpenseFrom';

function NewExpense(props) {

    function getData(formData) {
        const expenseFormData = {
            id: Math.random().toString(),
            ...formData
        }
        
        // console.log(expenseFormData);
        props.getExpense(expenseFormData);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm expenseData={getData} />
        </div>
    );
}

export default NewExpense;