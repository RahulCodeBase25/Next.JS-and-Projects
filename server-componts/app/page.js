"use client"
import Navbar from '@/components/Navbar'
import React from 'react'
import { useState } from 'react'

const page = () => {
  
  const [count, setcount] = useState(0)
  return (
   
    <div>
       <Navbar/>  {/*here i am using server-side component in client-side data*/ }
      This is where we we count {count}
      <button className='h-20 w-30 px-3 py-2 m-7 rounded-xl bg-sky-600 ' onClick={()=>{setcount(count + 1)}}>Click me!!!!</button>
    </div>
  )
}

export default page
