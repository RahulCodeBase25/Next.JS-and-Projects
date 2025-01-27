import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-slate-800 text-white py-4'>
        <div className='logo font-bold mx-4'>Facebook</div>
        <ul className='flex gap-6'>
        <Link href='/'><li>Home</li></Link>
        <Link href='/about'><li>About</li></Link>
        <Link href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
