import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

function Left() {
  return (
    <div className=' bg-black text-gray-300 w-[30%] '>
      <Search/>
      <Users/>
      <Logout/>
    </div>
  )
}

export default Left
