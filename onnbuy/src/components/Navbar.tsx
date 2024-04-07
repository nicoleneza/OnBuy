'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/logowhite.jpg"
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


function Navbar() {
    const [searchQuery, setSearchQuery] = useState('')
    //make the array of the navbarlinks
    const navbarLinks =[{title:'home', href:'/'},{title:'shop',href:'/shop'},{title:'cart', href:'/cart'},{title:'profile', href:'/profile'}]
  return (
    <div className='w-full h-20 border-b-[2px] border-b-gray-300 bg-white'>
      <nav className='h-full max-w-screen-xl mx-auto xl:px-4 flex items-center justify-between gap-2'>
        <Link href={'/'}>
            <Image src={logo} alt='logoo' className=' w-16'/>
        </Link>
        <div className='relative w-full hidden lg:inline-flex lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black px-6 rounded-md'>
            <input type="text" 
            placeholder='Search the product'  
            className='flex-1 h-full bg-transparent  placeholder:text-gray-600 outline-none '
            onChange={(e)=>setSearchQuery(e.target.value)}
            value={searchQuery}/>
            {searchQuery ? <IoMdClose 
            className=' h-full w-5 hover:cursor-pointer' 
            onClick={()=>setSearchQuery("")}/> :
             <IoSearchSharp className=' h-full w-5 hover:cursor-pointer'/>}
        </div>
        <div>
            <p>navlinks</p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
