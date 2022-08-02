import React from 'react'
import Link from 'next/link'
import Footer from './Footer'
function Sidebar() {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-white gap-5">
         <div className='float-center'>
    <button type="button" className="p-10 block text-gray-400 hover:text-black cursor-pointer focus:text-gray-700 focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
</svg>
    </button>
    </div>
    <div className="h-screen px-4 pt-8 pb-4 flex justify-between flex-col w-40">
    <div className="h-screen flex justify-center flex-col-2">

    <aside className="flex flex-col items-center justify-center">
        <ul className=" ">
        <li> <Link href="/agence"><a className="font-bold  text-gray-400 hover:text-black"> AGENCE </a></Link></li>
        <li><Link href="/services"><a className="font-bold  text-gray-400 hover:text-black"> SERVICES </a></Link></li>
        <li><Link href="/contact"><a className="font-bold  text-gray-400 hover:text-black"> CONTACT </a></Link></li>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </ul>
      </aside> 
  
      </div>

    </div>
  </div>
  )
}

export default Sidebar