import React from 'react'
import TaskCard from './TaskCard'
const Card = ({color, statusText}) => {
  return (
    <div className='rounded bg-white !w-[220px] h-[400px] m-3 '>
      <div className=' !w-[220px]'>
        <div className={`${color} rounded-t h-10 flex items-center justify-center text-white font-bold `}>
          {statusText}
        </div>
        <div className=' flex flex-col overflow-y-auto overflow-hidden items-center gap-2 h-[360px]'>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
        </div>
      </div>
    </div>
  )
}

export default Card


