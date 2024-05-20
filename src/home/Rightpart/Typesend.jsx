import React from 'react'
import { IoMdSend } from "react-icons/io";

function Typesend() {
    return (
        <div className='flex space-x-1 items-center  h-[8vh] bg-gray-800'>
            <div className='w-[70%] mx-4'> 
                <input type="text" placeholder="Type here" className="border border-gray-700 rounded-xl outline-none mt-1 py-3 px-4 w-full" />
            </div>
            <button className='text-3xl'>
                <IoMdSend />
            </button>
        </div>
    )
}

export default Typesend
