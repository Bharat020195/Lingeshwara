import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import "../app/globals.css";
import Header from './header';
import Footer1 from './footer1';
import Footer from './footer';
import { FiShare2 } from 'react-icons/fi';

const hall = () => {

    const [data, setData] = useState(null);

   useEffect (() => {

    const fetchData = async () => {
try {
  
const response = await fetch('http://localhost:4000/pooja')
const data = await response.json();

setData(data);

} catch (error) {
  
  console.error('Unable to fetch data', error);
}

    }

fetchData();
   } ,[]); 

   const handleShare = (image, title, price) => {
    const base64string = `data:image/jpeg;base64,${image}`;
    const newTab = window.open('', '_blank');
  
    if (newTab) {
      newTab.document.write(`
        <html>
          <head>
            <title>Image Details</title>
          </head>
          <body style="display:grid ;  grid-template-columns: 1fr 1fr; ; margin-top:100px;align-items: center ;  ">
            <div><img src="${base64string}" alt="No Image Found" style="height:600px; width:80%; margin-left:20px;" /></div>
            <div style="margin-right:40px">
            <div style="margin-bottom:40px">Hi this is a Tile which is good at its quality and equation I am here to describe about the tile and the quality of the tile${title}</div>
            <div>Price ₹: ${price} /-</div>
            </div>
          </body>
        </html>
      `);
  
      newTab.document.close();
    } else {
      console.error('Unable to open a new tab');
    }
  };
  
    if (data) {
      
      return (
        <div>
          <Header />
          
          <div className='text-2xl text-center mt-10'>Pooja Room Tiles</div>
          <div className='lg:my-20 lg:mx-32 my-10 mx-10 md:mx-10 md:my-20 grid grid-cols-2 lg:gap-y-16 lg:gap-x-40 md:gap-y-16 md:gap-x-20 gap-y-10 gap-x-14'>
            {data.map((Pooja) => (
              <div key={Pooja._id} className='lg:space-y-3 space-y-2 md:space-y-3'>
                <FiShare2 className='text-black absolute w-6 h-6 m-4 cursor-pointer' onClick={() => handleShare(`data:image/jpeg;base64,${Pooja.image}`)} />
                <Image
                  src={`data:image/jpeg;base64,${Pooja.image}`}
                  alt='No Image Found'
                  onClick={()=>handleShare(Pooja.image, Pooja.Title, Pooja.Price)}
                  width='0'
                  height='0'
                  className='hover:rounded-3xl lg:w-[500px]  lg:h-[300px]  md:w-96 md:h-72 w-40 h-32'
                />
                <div className='text-center'>{Pooja.Title}</div>
                <div className='text-center'>₹: {Pooja.Price} /-</div>
              </div>
            ))}
          </div>
        <Footer1 />
        <Footer/>
      </div>
      )
          
    }
  
    return <div>Loading...</div>;
  }
  

export default hall