import React from 'react'
import Filter from './Filter'
import Card from'./Card'
const Body = () => {
    const priority = ["P1", "P2", "P3", "P4"]
    const Assignee_Name = ["Hassu", "ravi", "Rahul", "Joker"]
    const dateTime = ['1/3/2024 - 2/3/2024', '1/3/2024 - 2/3/2024', '1/3/2024 - 2/3/2024', '1/3/2024 - 2/3/2024']
  return (
    <div className='  h-full w-full border-white shadow rounded-2xl shadow-gray-400 border-x-4 border-y-4'>
      <div className=' md:flex justify-between inline'>
        <div className='ml-4 mr-2 my-5'>
          <h1 className='md:inline block'>Filter By:</h1>
          <Filter options={Assignee_Name} className={'ml-3'} defaultValue={'Assignee'} showIcon={false} />
          <Filter options={priority} className={'ml-3'} defaultValue={'Priority'} showIcon={true} />
          <Filter options={dateTime} className={'ml-3'} defaultValue={'DD/MM/YYY'} showIcon={true} />
        </div>
        <button className='bg-[#26689C] shadow-sm rounded-sm text-xs font-semibold text-white self-center px-16 py-2 mx-4 md:inline hidden'>Add New Task</button>
      </div>
      <div className='mx-4 mb-5'>
      <div className='md:inline hidden'>
      <h1 className=' inline mr-4 '>Sort By:</h1>
      <Filter options={priority} className={''} defaultValue={'Priority'} showIcon={true} />
      </div>
      </div>
      <div>
      <div className='overflow-x-scroll flex justify-evenly'>
      <Card color='bg-gray-400' statusText={'Pending'}/>
      <Card color='bg-yellow-400' statusText={'In Progress'}/>
      <Card color='bg-green-400' statusText={'Completed'}/>
      <Card color='bg-purple-400' statusText={'Deployed'}/>
      <Card color='bg-pink-400' statusText={'Deffered'}/>
      </div>
      </div>
      <div className='flex justify-center items-center py-8 md:hidden'>
      <button className='bg-[#26689C] shadow-sm rounded-sm text-xs font-semibold text-white self-center px-16 py-2 md:hidden block'>Add New Task</button>
      </div>
    </div>
  )
}

export default Body

