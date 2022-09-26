import React from 'react'
import {HiArrowNarrowRight, HIArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-2xl text-pink-600'> Hi, my name is </p>
          <h1 className='text-4xl font-bold text-white sm:text-7xl'> Imran Uddin </h1>
          <h2 className='text-4xl font-bold text-gray-400 sm:text-7xl'> I'm a Junior Software Engineer @P1T</h2>
          <p className='text-pink-600 py-4 max-w-[700]'> I am a student developer looking for oppertunities in the front-end and back-end development </p>
        </div>
        {/* <div>
          <button className='text-black'> </button>
        </div> */}

    </div>
  )
}

export default Home