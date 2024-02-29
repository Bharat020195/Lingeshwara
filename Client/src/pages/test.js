import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../app/globals.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4qz4jej', 'template_pwjf3er', form.current, 'fAyqMNCo_nnEZc7qV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} >
      <label>Name</label>
      <input type="text" name="user_name" className='text-black' />
      <label>Email</label>
      <input type="email" name="user_email"  className='text-black'/>
      <label>Message</label>
      <textarea name="message"  className='text-black'/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;


