import React from 'react'
import {useRouter} from 'next/router';
import Image from 'next/image'
function Logo() {
  const router = useRouter();
  return ( 
     
 <header className=" flex items-center justify-center">
<Image   className="cursor-pointer"
   src="https://media-exp1.licdn.com/dms/image/C4D0BAQEDk3lMpmKiYw/company-logo_200_200/0/1600420727631?e=1666828800&v=beta&t=-B8vo1msqd2YIkJRaAqQfQ3WXT7iQvPfo1Y9p1vAuUQ"
  height={120}  
  width={300}
  onClick={() =>router.push("/")}

   />

  </header>

  )
}

export default Logo