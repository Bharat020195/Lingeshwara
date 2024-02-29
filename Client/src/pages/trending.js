"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiShare2 } from 'react-icons/fi';
import "../app/globals.css";



const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://20.193.132.245:4000/trending');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('No data to fetch');
      }
    };

    fetchData();
  }, []);


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
      <div className='flex flex-col justify-center items-center mt-20'>
        <div className='lg:text-4xl text-sm font-bold p-4 rounded-2xl shadow-xl shadow-orange-800 text-center text-black bg-gradient-to-r from-red-200 to-red-500 animate-bounce w-48'>
          Trending
        </div>
        <div className='lg:grid lg:grid-rows-2 lg:grid-cols-4 grid grid-rows-4 grid-cols-2 gap-x-6 ml-4 gap-y-2 mt-16 shadow-xl'>
          {data.map((Trending) => (
            <div key={Trending._id} className='lg:w-72 lg:h-80 space-y-2 '>
              <FiShare2 className='text-black absolute w-6 h-6 m-4 cursor-pointer'  />
              <Image
                src={`data:image/jpeg;base64,${Trending.image}`}
                onClick={() => handleShare(Trending.image,Trending.Title, Trending.Price)}
                alt='No Image Found'
                width='0'
                height='0'
                className='hover:rounded-3xl rounded-xl shadow-xl border border-1 lg:w-72 lg:h-60 md:w-72 md:h-80 w-32 h-40'
              />
              <div className='text-center'>{Trending.Title}</div>
              <div className='text-center'>₹: {Trending.Price} /-</div>
            </div>
          ))}
        </div>
      </div>


    );

    
  }
  console.log(Trending.image)

  return <div>No data to display</div>;
};



export default Trending;
