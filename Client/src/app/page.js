import React from "react";
import Header from "../pages/header";
import Trending from "../pages/trending";
import Image from "next/image";
import Home from "../../public/Home1.png";
import Work from '../pages/works'
import Footer from '../pages/footer'
import Footer1 from '../pages/footer1'
import "../app/globals.css";

const page = () => {
  return (
    <div className=" justify-center">
      
      <Header />
      <div>
        <div className="absolute lg:mt-44 mt-10 ml-10 lg:ml-48 text-center border border-1 rounded-xl p-6 shadow-lg shadow-blue-100 ">
           <div className="lg:text-4xl text-black">Welcome to</div>
            <div className="lg:text-6xl font-sans text-cyan-700">Lingeshwara Tiles</div>
             <div className="text-black lg:text-lg text-[10px]">Shop the best Tiles in the market here</div> 
              </div>
        <Image
          src={Home}
          alt="No image found"
          width="o"
          height="0"
          className="lg:h-[700px]  lg:w-screen"
        />
      </div>
      <Trending />
      <Work/>
      <Footer1/>
      <Footer/>
     
   
     
     
    </div>
  );
};



export default page;
