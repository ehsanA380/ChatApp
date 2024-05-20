import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typesend from './Typesend'

function Right() {
  return (
    <div className='text-gray-300 bg-slate-900 w-[70%] '>
      <Chatuser  className='' />
      <div className=' overflow-y-auto flex-1 '  style={{maxHeight:"calc(92vh - 8vh)"}}>
        <Messages />
      </div>
      <Typesend />
    </div>
  )
}

export default Right
