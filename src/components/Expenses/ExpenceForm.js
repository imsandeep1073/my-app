import React from "react";
import { useState } from "react";

const ExpenceForm = (props) => {
    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHendler = (event) => {
        event.preventDefault();

        const expenceData = {
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate),
        }
        // console.log(expenceData);        
        props.onSaveExpenseData(expenceData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={submitHendler}>
            <div className="bg-sky-400 flex flex-wrap gap-10 p-4 w-80 mx-auto">
                <div>
                    <label>Title</label>
                    <input type="text" value={enterdTitle} onChange={titleChangeHandler} />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" value={enterdAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" value={enterdDate} onChange={dateChangeHandler} />
                </div>
                <div>
                    <button className="border border-green-300 shadow ps-4 pe-4 bg-green-400 rounded" type="submit">Add</button>
                </div>
            </div>
        </form>
    )

}

export default ExpenceForm