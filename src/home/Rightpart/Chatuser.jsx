import React from 'react'

function Chatuser() {
    return (
        <div className='flex space-x-3 items-center justify-center bg-gray-800 hover:bg-gray-700 duration-300 h-[8vh]'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div>
                <h1 className='text-xl'>Maira</h1>
                <span className='text-sm'>online</span>
            </div>
        </div>
    )
}

export default Chatuser
