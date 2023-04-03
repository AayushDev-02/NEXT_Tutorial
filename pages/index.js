import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React, { Component } from 'react'

export class index extends Component {
  render() {
    return (
      <div className='bg-[##e5e6ed]'>
        <Navbar/>
        <Hero/>
      </div>
    )
  }
}

export default index
