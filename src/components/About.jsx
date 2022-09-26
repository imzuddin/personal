import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-white'>
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='max-w-[1000] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='pb-8 pl-4 sm:text-right'>
                    <p className='inline text-4xl font-bold border-b-4 border-pink-600'> About </p>
                </div>
                <div></div>
            </div>

            <div className='max-w-[1000] w-full px-4 mx-auto grid sm:grid-cols-2 gap-8'>
                <div className='text-4xl font-bold sm:text-right'>
                    <p>Hi. I'm Imran, nice to meet you. Feel free to take a look around!</p>
                </div>
                <div>
                    <p> I am passionate about building</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About