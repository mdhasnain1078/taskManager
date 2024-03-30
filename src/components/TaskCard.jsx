import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";

const TaskCard = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full mx-2 h-[160px] bg-gray-200 my-2 rounded px-2'>
        <div className='flex justify-between py-2'>
          <h1 className=' font-semibold '>Task 1</h1>
          <div className='bg-[#26689C] inline shadow-sm p-[2px] rounded-sm text-xs font-semibold text-white self-center'>P0</div>
        </div>
        <div class="border-t border-gray-300 mb-2"></div>
        <p className='text-ellipsis text-[10px] text-left'>it is a long establish fact that a reader will ditracted by the readable content of a page when looking at its layout.</p>
        <div className='flex justify-between my-1'>
        <h1 className=' font-semibold text-sm'>@Praveen</h1>
          <div className='bg-[#26689C] inline shadow-sm px-[1px] rounded-sm text-xs font-semibold text-white self-center'>
          <BiDotsVerticalRounded  size={18}/>
          </div>
        </div>
        <div className='bg-[#26689C] inline shadow-sm rounded-sm text-xs font-semibold text-white self-center px-5 py-1'>
            In Progress
          </div>
      </div>
    </div>
  )
}

export default TaskCard