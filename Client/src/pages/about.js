import React from "react";
import "../app/globals.css";
import Image from "next/image";
import Header from '../pages/header'
import Footer from '../pages/footer'



const about = () => {
  return (
    <div>
      <Header/>
      <div className="grid grid-flow-col lg:space-x-60 lg:m-20 md:m-10 md:space-x-24 m-6 space-x-20">
        <Image
          src="/My.jpeg"
          width={200}
          height={100}
          alt="Picture of the author"
        ></Image>
        <div className=" lg:text-xl md:text-xl lg:justify-center md:justify-center lg:leading-loose md:leading-loose text-[10px]"> 
          Lingeshwara Tiles was formed in the year of 2021 with a sense of
          providing quality tiles at budget price to the customer. <p> N. Anil Kumar the
          founder is a government employee who is parallelly running the
          buisness and we are proud to inform that we are growing really fast in
          the market because of the quality and the price we provide.</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-[12px]  ml-40   lg:text-lg md:text-lg">
<div className=" lg:leading-10 md:leading-6 lg:my-10 md:my-6 my-4" >
  <p className=" underline ">Our shop location:</p>
  <p>Lingeshwara Tiles </p>
  <p>opp SMR Bar and Restaurant</p>
  <p>Mallapur</p>
</div>
    <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.7774326553497!2d78.53952652019326!3d17.415039323359196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bfc5bb3897b%3A0x504e385fc0d741ff!2sNacharam%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1697133416493!5m2!1sen!2sin" className="w-40 h-auto lg:w-96 lg:h-80 md:w-60 md:h-auto"  loading="lazy"></iframe></div>
    </div>
    <Footer/>
    </div>
  );
};

export default about;
