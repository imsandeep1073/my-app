import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate"

const Page = (props) => {
  
    return (
        <div className="flex gap-5 p-3">
            <h2 className="bg-red-500">{props.title}</h2>
            <p className="bg-green-500">{props.amount}</p>
            <p className="bg-blue-600">
                <ExpenseDate date={props.date} />
            </p>
            <div>
                <button className='border rounded-xl ps-2  pe-2 bg-red-500 shadow' > Add Title</button>
                
            </div>
            {/* <div>
                <input type="text" className='border' value={newTitle} onChange={changeHendler} />
                <button className='bg-red-600 ' onClick={clickHendler}>Change Title</button>
            </div> */}
        </div>
    )

}

export default Page



// Hendle Input Class 12
/*
-- Create Input Field and assing a Variable but its always change so we dont make normal method to create variable we use {useState} for creating variable becouse he change according to requirment

const [newTitle,setNewTitle] = useState("");
  
add new value value={newTitle} inside 
 <input type="text" className='border' value={newTitle}/>


 const [newTitle,setNewTitle] = useState("hello");
 hello = show in input box but we can not edit deleted this value iska Solution bhi h

 we create new Function onChange = {changeHendler} in input and create function

 function changeHendler(event){
    setNewTitle(event.target.value); //this change the value of input event show change event
 }

*/