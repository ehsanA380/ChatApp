import React from 'react'
import User from './User'

function Users() {
    return (
        <div className='overflow-y-auto flex-1' style={{maxHeight:"calc(90vh - 10vh)"}}>
            <h1 className='px-6 py-2 text-white font-semibold bg-slate-800 rounded-md sticky top-[0px] z-20 '>Messages</h1>
            <div className=' ' >
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
            </div>
        </div>
    )
}

export default Users
