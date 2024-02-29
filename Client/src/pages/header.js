"use client"
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {BsWhatsapp} from 'react-icons/bs'
import Lingam from '../../public/Lingam.png'
import Image from "next/image";


const Header = () => {
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const categoriesRef = useRef(null);

  const handleCategoriesClick = () => {
    setCategoriesVisible(!categoriesVisible);
  };

  useEffect(() => {
    const closeCategoriesOnOutsideClick = (e) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(e.target) &&
        categoriesVisible
      ) {
        setCategoriesVisible(false);
      }
    };

    window.addEventListener("click", closeCategoriesOnOutsideClick);
    return () => {
      window.removeEventListener("click", closeCategoriesOnOutsideClick);
    };
  }, [categoriesVisible]);



  return (
    
    <div className="flex lg:h-20 h-16 lg:w-auto md:w-auto w-screen justify-between items-center lg:px-16 md:px-12 px-4 lg:space-x-4  space-x-2 relative">
      <div className="lg:text-2xl md:text-lg text-sm flex flex-row lg:flex lg:flex-row md:flex-row md:flex"> <Image src={Lingam} alt="No image found" width='0' height='0' className="lg:h-14 lg:w-14 h-8 w-8 lg:mr-2 mr-1"/><div className='lg:ml-2 md:ml-2 text-orange-500  text-[10px] mt-2 lg:text-xl font-mono lg:mt-3'>Lingeshwara Tiles</div> </div>
      <div>
        <ul className="flex lg:space-x-10 md:space-x-6 space-x-3 mt-1">
          <Link href="/" className="hover:text-gray-400 lg:text-lg md:text-sm text-[10px] text-black"><li>Home</li></Link>
          <li
            className=" lg:text-lg md:text-sm text-[10px] cursor-pointer justify-center flex relative"
            onClick={handleCategoriesClick}
          >
            Categories
            {categoriesVisible && (
              <ul className="absolute shadow-2xl  rounded-xl  lg:text-lg p-4 lg:mt-12 mt-7 font-mono space-y-4 text-center lg:h-[550px] lg:w-64 lg:ml-64 lg:-mr-40 ml-[170px] md:ml-[350px]  bg-white w-36 opacity-80 ">
                <li className="lg:text-xl lg:hover:bg-gray-400 text-sm  text-black mt-4"><Link href='/hall'>Hall</Link></li>
                <li className="lg:text-xl lg:hover:bg-gray-400 text-sm  text-black"><Link href='/bedroom'>Bedroom</Link></li>
                <li className="lg:text-xl  lg:hover:bg-gray-400 text-sm  text-black"><Link href='/kitchen'>Kitchen</Link></li>
                <li className="lg:text-xl lg:hover:bg-gray-400 text-sm  text-black"><Link href='/pooja'>Pooja</Link></li>
                <li className="lg:text-xl lg:hover:bg-gray-400 text-sm  text-black"><Link href='/bathroom'>Bathroom</Link></li>
                <li className="lg:text-xl lg:hover:bg-gray-400 text-sm  text-black"><Link href='/elevation'>Elevation</Link></li>
                <li className="lg:text-xl lg:hover:bg-gray-400 text-sm  text-black"><Link href='/parking'>Parking</Link></li>
                <div className="lg:text-xl text-md  text-black lg:pt-20 pt-4" >Reach us on Whatsapp </div>
                <Link href="https://wa.me/917993291664"><BsWhatsapp className="h-8 w-8 text-black lg:mt-2 lg:ml-24 ml-8 md:ml-10"/></Link>
              </ul>
             
            )}
          </li>
          <Link href="/about" className="hover:text-gray-400 lg:text-lg md:text-sm text-[10px]"><li>About</li></Link>
          <Link href="/contact" className="hover:text-gray-400 lg:text-lg md:text-sm text-[10px]"><li>Contact Us</li></Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
