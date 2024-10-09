import '../index.css'
function Home(props) {

    // const month = props.creatDate.toLocaleString('en-US', { month: 'long' })
    // const date = props.creatDate.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.creatDate.getFullYear()

    return (
        <div>
            <div className='flex gap-9 font-bold text-3xl justify-center bg-green-400'>
                <div>
                    {/* Created At: <span className='bg-red-500'>{date},{month} {year}</span> */}
                </div>
                <div>
                    ITEM NAME: <span className='bg-red-500'>{props.title}</span>
                </div>
                <div>
                    AMOUNT: <span className='bg-red-500'>{props.amount}</span>
                </div>
            </div>
            <div className='flex gap-9 font-bold text-3xl justify-center bg-green-400'>
                <div>
                    {/* Created At: <span className='bg-red-500'>{date},{month} {year}</span> */}
                </div>
                <div>
                    ITEM NAME: <span className='bg-red-500'>{props.title}</span>
                </div>
                <div>
                    AMOUNT: <span className='bg-red-500'>{props.amount}</span>
                </div>
            </div>
            <div className='flex gap-9 font-bold text-3xl justify-center bg-green-400'>
                <div>
                    {/* Created At: <span className='bg-red-500'>{date},{month} {year}</span> */}
                </div>
                <div>
                    ITEM NAME: <span className='bg-red-500'>{props.title}</span>
                </div>
                <div>
                    AMOUNT: <span className='bg-red-500'>{props.amount}</span>
                </div>
            </div>
            <div className='flex gap-9 font-bold text-3xl justify-center bg-green-400'>
                <div>
                    {/* Created At: <span className='bg-red-500'>{date},{month} {year}</span> */}
                </div>
                <div>
                    ITEM NAME: <span className='bg-red-500'>{props.title}</span>
                </div>
                <div>
                    AMOUNT: <span className='bg-red-500'>{props.amount}</span>
                </div>
            </div>
            <div className='flex gap-9 font-bold text-3xl justify-center bg-green-400'>
                <div>
                    {/* Created At: <span className='bg-red-500'>{date},{month} {year}</span> */}
                </div>
                <div>
                    ITEM NAME: <span className='bg-red-500'>{props.title}</span>
                </div>
                <div>
                    AMOUNT: <span className='bg-red-500'>{props.amount}</span>
                </div>
            </div>
        </div>
    );

}

export default Home