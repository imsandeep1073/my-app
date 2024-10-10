import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate"

const Page = (props) => {

    const [title, setTitle] = useState(props.title);
    // change title on click
    const clickHendler = () => {
        setTitle('New Title...')
    }



    return (
        <div className="flex gap-5 p-3">
            <h2 className="bg-red-500">{title}</h2>
            <p className="bg-green-500">{props.amount}</p>
            <p className="bg-blue-600">
                <ExpenseDate date={props.date} />
            </p>
            <div>
                <button className='bg-red-600 ' onClick={clickHendler}>Change Title</button>
            </div>
        </div>
    )

}





// how to use state Class 11

/*
1 we store a variable in [use state function]
form React Libarary in top 

import React , { useState } from 'react';

and add in a function like useState() // this hold a name, value, & blanck ("")

we use for title so we pass useState(props.title)

:-next step array Disturing

----  const [title , setTitle] =  useState(props.title);
title = variable 
setTitle = function  (function change the value of variable)
 new we ccan change the title on click but we dont use any js method we use rc method
 
  const clickHendler = () => {
       setTitle('Change title...')
    }

    we assing a new value like this 

note --State hr ak ke liye alag alag hoga


*/