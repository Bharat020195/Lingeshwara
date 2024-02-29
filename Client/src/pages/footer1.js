import React from 'react'
import {BiBuilding} from 'react-icons/bi'
import {CiLocationOn} from 'react-icons/ci'
import {BsTelephone} from 'react-icons/bs'
import Link from 'next/link'

const footer1 = () => {
  return (
    <div className='justify-between relative px-4'>
        <div className='h-52 border border-1 mt-10 justify-between flex lg:text-md text-sm'>
            <div className='space-y-2 lg:ml-40 ml-4 md:ml-10'>
                <div className=' pt-4 text-orange-500 underline mr-2'>Quick Contact</div>
                <div className='flex  '><BiBuilding className='w-4 h-6 mr-2'/>Lingeshwara Tiles</div>
                <div className='flex '><CiLocationOn  className='w-4 h-6 mr-2'/> Opp SMR Bar & Restaurant</div>
                <div className='flex '><CiLocationOn  className='w-4 h-6 mr-2'/> Mallapur</div>
                <div className='flex '> <BsTelephone className='w-4 h-6 mr-2'/> 9666570013</div>
                </div>
                <div className='space-y-2 mr-3' >
                <div className=' pt-4 text-orange-500 underline'>Our Company</div>
                <div className=' '><Link href='/about'>About Us</Link></div>
                <div className=' '><Link href=''>Map Direction</Link></div>
                <div className=' '>Terms & Conditions</div>
                </div>
                <div className='space-y-2 lg:mr-40 mr-4 md:mr-10 '>
                <div className=' pt-4 text-orange-500 underline'>Legal Info</div>
                <div className=' '> Terms & Conditions</div>
                <div className=' '> Privacy Policy </div>
                <div className=''> Cookies Policy</div>
                </div>
        </div>
    </div>
  )
}

export default footer1