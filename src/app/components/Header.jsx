"use client"


import Image from 'next/image'
import DropdownMenu from './DropdownMenu'
// import { useEffect } from 'react'

//http://localhost:3000/?code=e2c56ca3fb3633b97aec
let ClientID="0803f555e0a8af22f6c4"

export default function Header(props) {
  
  // useEffect(()=>{
  //   const queryString=window.location.search; 
  //   const urlParams = new URLSearchParams(queryString);
  //   const codeParam=urlParams.get("code");
  // },[])

  const  loginWithGithub=()=>{
     window.location.assign("https://github.com/login/oauth/authorize?client_id="+ClientID)
   };

  return (
  <main className='bg-black p-1  h-16 flex '>
      
         <DropdownMenu/>
            {/* <Image
              src="/vercel.svg"
              alt="Logo"
              width={100}
              height={24}
              priority
            /> */}
            <input placeholder='Search...' 
            className=' justify-center p-2 border-2 w-[50%] border-gray-200 m-1 rounded-[24px] hover:border-yellow-100 focus:border-yellow-100' 
            type='text'></input>
            <div className='ml-auto' >
            <button onClick={loginWithGithub} className='bg-gray-400 text-white p-2 m-1 rounded-[12px] hover:bg-gray-300 '>Sign In</button>
             <button  className='bg-yellow-200 p-2 m-1 rounded-[12px] hover:bg-yellow-100 '>Sign Out</button>
      
            </div>
           
    </main>
  )
}
