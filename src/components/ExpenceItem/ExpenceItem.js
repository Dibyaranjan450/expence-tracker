import './ExpenceItem.css';
import ExpenceDate from '../ExpenceDate/ExpenceDate';

function ExpenceItem(props) {

    function Removed(data) {
        console.log("Removed");
        props.deleteItem(data);
    }

    return (
        <div className='expense-item'>
            <ExpenceDate date={props.Date} />
            <div className='expense-item__description'>
                <h2>{props.Title}</h2>
                <div className='expense-item__price'>${props.Amount}</div>
            </div>
            <button onClick={() => {Removed(props)}} className='expense-item__price'>Remove</button>
        </div>
    );
}

export default ExpenceItem;