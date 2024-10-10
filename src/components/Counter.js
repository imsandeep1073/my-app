import React, { useState } from "react";

const Counter = () => {
    let [countnum, setCountNum] = useState(0)

    function all() {
        setCountNum( countnum++)
    }

    


    return (
        <div className="flex">
            <button className="border rounded-xl p-3 bg-gray-500" onClick={()=>setCountNum(countnum++)}>Incress</button>
            <h1 className="text-3xl p-4 bg-sky-300">{countnum}</h1>
            <button className="border rounded-xl p-3 bg-gray-500" onClick={()=>setCountNum(countnum--)}>Decress</button>
        </div>
    )

}

export default Counter