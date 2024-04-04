import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-center items-center fixed w-full h-24 bg-white shadow-lg'>
      <Link href={"/#"}><Image src={'/Logo.webp'} width={200} height={200}></Image></Link>
      
    </div>
  )
}

export default Navbar
