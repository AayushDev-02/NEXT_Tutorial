import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const about = () => {
  return (
    <div className='bg-gray-200 w-fit mx-96 mt-40 rounded-xl shadow-xl'>
      <div className='flex flex-row  '>
        <div className='w-1/3'>
          <Image className='h-full w-full rounded-l-xl' src='/images/aboutimg.avif' height={100} width={100} />
        </div>
        <div className='py-10 w-2/3 space-y-10 px-10 flex flex-col justify-center'>
          <h1 className='text-6xl font-semibold'>Aayush Yadav</h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem amet! Sed optio beatae mollitia? Iste voluptas repellendus voluptate blanditiis doloremque quos totam reprehenderit, ad nisi pariatur omnis, ex voluptatibus.</p>
          <div className='flex flex-row space-x-5'>
            <Link href='https://github.com/AayushDev-02' className='text-lg px-3 py-2 bg-black font-bold text-white'>Github</Link>
            <Link href='https://www.linkedin.com/in/aayush-yadav-50ab55239/' className='text-lg px-3 py-2 bg-blue-600 font-bold text-white'>LinkedIn</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
