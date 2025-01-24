import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    return (

        <footer  className='h-32 mt-20 bg-teal-100'> 


            <div className='flex justify-center  gap-28 font-extrabold bg-blue-200 h-12 '>


                <Link className='hover:text-left ' href={"/Home"}>Archweb</Link>
                <Link href={"/Products"}>Links</Link>
                <Link href={"/About"}>About</Link>
                <Link className='' href={"/Contact"}>Contact</Link>

            </div>





        </footer>
    )
}; export default Navbar
