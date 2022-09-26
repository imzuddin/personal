import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assets/Imran_light.png'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-white'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '150px'}}/>
        </div>
        {/* Menu */}
        <div>
            <ul className='hidden md:flex'>
                <li> Home </li>
                <li> About </li>
                <li> Skills </li>
                <li> Work </li>
                <li> Contact </li>
            </ul>
        </div>

        {/* Hamburger */}
        <div className='z-10 md:hidden' onClick={handleClick}>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>
        {/* Mobile Menu */}
        <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-white': "hidden"}>
            <li className='py-6 text-4xl'> Home </li>
            <li className='py-6 text-4xl'> About </li>
            <li className='py-6 text-4xl'> Skills </li>
            <li className='py-6 text-4xl'> Work </li>
            <li className='py-6 text-4xl'> Contact </li>
        </ul>

        {/* Social Icons */}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                {/* Add List item to add links to the side bar */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1] rounded'> <a href="" className='flex items-center justify-between w-full text-white'> LinkedIn <FaLinkedin size={40}/> </a> </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#808080] rounded' > <a href="" className='flex items-center justify-between w-full text-white'> GitHub <FaGithub size={40}/> </a> </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E8AA42] rounded'> <a href="" className='flex items-center justify-between w-full text-white'> Mail <HiOutlineMail size={40}/> </a> </li>
            </ul>
        </div>      

    </div>
  )
}

export default Navbar