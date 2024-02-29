import React from "react";
import "../app/globals.css";
import Header from "./header";
import Footer from './footer'
import Footer1 from './footer1'
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {BsWhatsapp} from 'react-icons/bs'
import Link from "next/link";
import Image1 from '../../public/Contact.png';
import Image from "next/image";


const contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());
    if (Object.values(values).some(value => !value)) {
      alert('Please fill in all required fields.');
      return;
    }


    emailjs.sendForm('service_4qz4jej', 'template_pwjf3er', form.current, 'fAyqMNCo_nnEZc7qV')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          alert('Thank you for details we will reach you soon!')
          setIsSubmitted(true);
        
        form.current.reset();
      }, (error) => {
          console.log(error.text);
      });

  };


  return (
    <div>
      <Image src={Image1} className="absolute w-screen lg:h-[1300px] h-[1100px] md:h-[1200px] "/>
     
      <Header />
      <div className="space-y-20 mt-20 relative ">
        
      <div className="text-center text-xl lg:text-2xl ">We would love to hear from you</div>
        <div  className=" flex justify-center ">
        
          
         
          <form className="space-y-10  " ref={form} onSubmit={sendEmail}>
            <div className="">
              <div className="text-xl ">Full Name:</div>
              <input
                type="text" name="user_name" placeholder="Full Name"
                className="lg:h-14 md:lg:h-10 lg:w-96 md:w-96 w-52 h-5 p-4 border border-1 rounded-xl"
              ></input>
            </div>
            <div>
              
              <div className="text-xl "> Email: </div>
              <input
               type="email" name="user_email"
                placeholder="Email address"
                className="lg:h-14 md:lg:h-10 lg:w-96 md:w-96 w-52 h-5 p-4 border border-1 rounded-xl"
              ></input>
            </div>
            <div>
          
              <div className="text-xl "> Phone Number: </div>
              <input
                placeholder="Phone Number"
                name="phone_number"
                className="lg:h-14 md:lg:h-10 lg:w-96 md:w-96 w-52 h-5 p-4 border border-1 rounded-xl"
              ></input>
            </div>
            <div>
             
              <div className="text-xl">A Brief Note: </div>
              <textarea
                type="text"
                name="message"
                className="lg:h-14 md:lg:h-10 lg:w-96 md:w-96 w-52 h-5 p-4 border border-1 rounded-xl"
              ></textarea>
            </div>
            <div className=" text-center">
          <button type="submit" value="Send" className="bg-gradient-to-r from-blue-950 to-blue-400 h-10 w-20 hover:text-red-300 rounded-lg text-white" >
            Submit
          </button>
          </div>
          </form>
        </div>
       
      </div>

      <div className="flex  justify-center space-x-4 mt-16 relative ">
        <div className="md:mb-24 lg:mt-2 md:mt-2">You can also reach us on Whatsapp </div>
    
       <Link href="https://wa.me/917993291554"><BsWhatsapp className="bg-green-400 rounded-xl h-7 w-8 md:h-10 md:w-12 lg:w-20 lg:h-14"/></Link>
       
    
      </div>
      <Footer1/>
      <Footer />
    </div>
  );
};

export default contact;
