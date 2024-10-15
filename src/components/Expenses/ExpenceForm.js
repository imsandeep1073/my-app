import React from "react";


const ExpenceForm = () => {
    return (
        <form>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" />
                </div>
                <div>
                    <button>Add</button>
                </div>                
            </div>
        </form>
    )

}

export default ExpenceForm