import React from 'react'
import Image from 'next/image'

const footer = () => {
    return (
        <div className='h-32 bg-[#94b9b9] mt-10 '>


            <div className='flex justify-between space-x-2'>

                <Image src={"/img1.png"} alt='img' width={103} height={103}></Image>

                <h2>Planig</h2>
                <span>Our Services Line one
                    Servive line two</span>

                <Image src={"/img2.png"} alt='img' width={103} height={103}></Image>

                <h2>Planig</h2>
                <span>Our Services Line one
                    Servive line two</span>

                <Image src={"/img3.png"} alt='img' width={103} height={103}></Image>

                <h2>Planig</h2>
                <span>Our Services Line one
                    Servive line two</span>

            </div>


        </div>
    )
}

export default footer
