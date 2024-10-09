
const Page = (props) => {
    // const date = props.date.toLocaleDateString()

    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })


    return (
        <div className="flex gap-5 p-3">
            <h2 className="bg-red-500">{props.title}</h2>
            <p className="bg-green-500">{props.amount}</p>
            <p className="bg-blue-600">
               <span className="text-white">{day} </span>,
               <span>{month} </span>,
               <span>{year} </span>
            </p>
        </div>
    )

}

export default Page