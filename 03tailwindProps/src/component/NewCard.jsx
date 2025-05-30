import React from 'react'

function NewCard({ username, btnText = "visit" }) { // <- we can also able to add default value here
    // console.log(props.username)      -- Distructuring 
    console.log(username)
    return (
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
            <div>
                <img className="size-48 shadow-xl rounded-md" alt="" src="./public/img3.jpg" />
            </div>
            <div className="flex items-center md:items-start">
                <span className="text-2xl font-medium">{username}</span>
                <span className="font-medium text-sky-500">The Anti-Patterns</span>
                <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                    <span>No. 4</span>
                    <span>·</span>
                    <span>2025</span>
                </span>
            </div>
            {/* Here we mention default value if any one does not pass props btnText value */}
            <div><button>{btnText || "visit the website"}</button></div>
        </div>
    )
}

export default NewCard
