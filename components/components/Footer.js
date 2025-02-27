import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='flex justify-around bg-slate-800 text-white py-4 text-xs'>
        <div className='text-center'>Cpyright  Facebook | All rights reserved</div>
        <ul className='flex gap-2 text-sm'>
        <a href='/'><li>Home</li></a>
        <a href='/about'><li>About</li></a>
        <a href='/contact'><li>Contact</li></a>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
