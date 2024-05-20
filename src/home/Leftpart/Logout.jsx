import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";

function Logout() {
    return (
        <div className='h-[10vh] flex items-center '>
            <div className='flex px-4 py-3 cursor-pointer space-x-3 items-center '>
                <div className='text-4xl'>
                    <BiLogOutCircle />
                </div>
                <h1 className='text-2xl text-red-500'>Logout</h1>
            </div>

        </div>
    )
}

export default Logout
