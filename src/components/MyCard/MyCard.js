let defaultUrl = "https://img.freepik.com/premium-photo/close-up-squirrel-wooden-post_1048944-30370286.jpg?t=st=1731893906~exp=1731894506~hmac=a4ea6d942e8f20d00c0ad1eba33579e94fb586f84461502047767df198733d5a"

const MyCard = ({ userName = "Sam", postof = "ai", imgUrl=defaultUrl }) => {
    return (
        <div className="bg-blue-900 text-2xl text-green-300 font-bold p-5">

            <figure className="md:flex bg-slate-400 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={imgUrl} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {userName}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {postof}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}


export default MyCard