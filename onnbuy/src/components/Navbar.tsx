'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/logowhite.jpg"
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { usePathname } from 'next/navigation'


function Navbar() {
    //to know if the link is active or which page are you on.
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('')
    //make the array of the navbarlinks
    const navbarLinks =[
        {title:'home', href:'/'},
        {title:'shop',href:'/shop'},
        {title:'cart', href:'/cart'},
        {title:'profile', href:'/profile'},
        {title:'studio', href:'/studio'}
    ]
  return (
    <div className='w-full h-20 border-b-[2px] border-b-gray-300 bg-white'>
      <nav className='h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2'>
        <Link href={'/'}>
            <Image src={logo} alt='logoo' className=' w-20'/>
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
        <div className='flex gap-2 items-center md:inline-flex'>
            {navbarLinks.map((item)=>(
                <Link href={item?.href} key={item?.href} className={`'flex items-center justify-center hover:font-semibold w-20 h-6 hover:underline hover:text-gray-700 underline-offset-4 decoration-[1px] last:border-r-0 border-r-[2px] border-r-gray-600'
             ${pathname === item?.href && ' text-gray-900 underline'}`}>{item?.title}</Link>
            ))}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
