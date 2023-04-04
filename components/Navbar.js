import React from 'react'
import Script from 'next/script'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='p-5 my-5  font-poppins'>
      
      <nav className='flex flex-row items-center justify-center space-x-10 font-poppins font-extralight text-sm '>
        <Link href='/' legacyBehavior><a className='cursor-pointer hover:underline-offset-8 hover:underline '><div>Home</div></a></Link>
        <Link href='/blogs' legacyBehavior><a className='cursor-pointer hover:underline-offset-8 hover:underline '><div>Blogs</div></a></Link>
        <Link href='/about' legacyBehavior><a className='cursor-pointer hover:underline-offset-8 hover:underline '><div>About</div></a></Link>
        <Link href='/contact' legacyBehavior><a className='cursor-pointer hover:underline-offset-8 hover:underline '><div>Contact</div></a></Link>
      </nav>

      {/* <Script src='new.js' strategy='lazyOnload'></Script> */}
    </div>
  )
}

export default Navbar
