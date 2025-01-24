import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    return (

        <nav>

            <div className='flex justify-center  gap-28 font-extrabold bg-blue-200 h-12 '>

                <Link className='hover:text-left ' href={"/Home"}>Home</Link>
                <Link href={"/Products"}>Products</Link>
                <Link href={"/About"}>About</Link>
                <Link className='' href={"/Contact"}>Contact</Link>

            </div>





        </nav>
    )
}; export default Navbar
