import Link from "next/link";
import React from 'react'

function Menu() {
  return (
    <div>
<aside className="flex flex-wrap justify-between items-center">
<ul className="flex-row items-center justify-center ">
<li> <Link href="/agence"><a className="font-bold  text-gray-400 hover:text-black"> AGENCE </a></Link></li>
<li><Link href="/services"><a className="font-bold  text-gray-400 hover:text-black"> SERVICES </a></Link></li>
<li><Link href="/contact"><a className="font-bold  text-gray-400 hover:text-black"> CONTACT </a></Link></li>
</ul>
</aside> 
    </div>
  )
}

export default Menu


