import React from 'react'
import Head from "next/head"
import { useRouter } from "next/router";



function Services({ servicestext }) {
  const router = useRouter();
  console.log(servicestext);
  return (
    <div>
    <Head >
        <title>{router.query.term1} NE - Services</title>
        <link rel="icon" href="/favicon.ico" />
    </Head> 
<main className="flex flex-col items-center justify-center" >
<div  className=''>
 <h1 className='flex flex-container items-center justify-center font-bold italic'> NOS SERVICES</h1> </div>

</main>
</div>
  )
}

export default Services