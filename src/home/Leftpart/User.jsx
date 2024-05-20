import React from 'react'

function User() {
  return (
    <div>
      <div className='flex space-x-4 py-4 px-3 hover:bg-slate-700 duration-300 cu'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div>
                    <h1>Maira</h1>
                    <span>maira@gmail.com</span>
                </div>
            </div>
    </div>
  )
}

export default User
