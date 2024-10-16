
import React from "react";
import ExpenceForm from "./ExpenceForm";


const NewExpence = () => {
    const saveExpenceDataHandler = (enternedExpanceData) => {
        const expenceData = {
            ...enternedExpanceData,
            id:Math.random().toString()
        }
        console.log(expenceData)
    }

    return (
        <div className="">
            <ExpenceForm onSaveExpenseData={saveExpenceDataHandler}></ExpenceForm>
        </div>
    )
}

export default NewExpence