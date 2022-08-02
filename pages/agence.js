import React from 'react'
import Head from "next/head"
import { useRouter } from "next/router";



function Agence(agence) {
  const router = useRouter();
  console.log(agence);
  return (
    <div>
    <Head >
        <title>{router.query.term} NE - Agence</title>
        <link rel="icon" href="/favicon.ico" />
    </Head> 
<main className="flex flex-col items-center justify-center" >
<div  className=''>
 <h1 className='flex flex-container items-center justify-center font-bold italic'> NOTRE AGENCE</h1> </div>

</main>
</div>
  )
}

export default Agence