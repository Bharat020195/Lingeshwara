import React from 'react'
import Image from 'next/image'
import Image1 from '../../public/Home2.png'

const works = () => {
  return (
    <div className='mt-20 mx-10 lg:mb-40'>
        <div className='text-center lg:text-4xl text-md mb-2'> Our Happy Clients</div>
        <div className='text-center underline lg:text-[10px] text-[5px]'>Nothing makes us happy than seeing our customers satisfied </div>
        <div className='grid grid-cols-2 grid-rows-4 lg:mx-20 justify-center items-center text-center gap-y-20 gap-x-10 mt-20'>
          <div><Image src={Image1} alt='No image found' className='w-[100%] h-96 lg:h-96 hover:rounded-xl'/></div>
          <div className='w-[100%] h-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl aliquet scelerisque.</div>
          <div className='w-[100%] h-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl aliquet scelerisque.</div>
          <div><Image src={Image1} alt='No image found' className='w-[100%] h-96 hover:rounded-2xl'/></div>
          <div><Image src={Image1}  alt='No image found' className='w-[100%] h-96 hover:rounded-2xl'/></div>
          <div className='w-[100%] h-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl aliquet scelerisque.</div>
          <div className='w-[100%] h-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl aliquet scelerisque.</div>
          <div><Image src={Image1} alt='No image found' className='w-[100%] h-96 hover:rounded-2xl'/></div>

        </div>
         
    </div>
  )
}

export default works