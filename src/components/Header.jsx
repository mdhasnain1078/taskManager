import React from 'react'
import { Avatar } from '@mui/material'
import { Person2 } from '@mui/icons-material'
const Header = () => {
  return (
    <div className='flex justify-between my-6  md:my-10 items-center md:mx-10'>
        <h1 className='font-bold text-3xl'>Task Board</h1>
        <Avatar style={{color:"black", height:50, width:50, backgroundColor:"white"}}>
        </Avatar>
    </div>
  )
}

export default Header