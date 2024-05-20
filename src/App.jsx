import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'

function app() {
  return (
    <div className='flex min-h-screen'>
      <Left/>
      <Right/>
    </div>
  )
}

export default app
