import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextareaAutosize from 'react-textarea-autosize';

export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xukkt3i', 'template_dit5tgk', form.current, '2TdrqSegEDYOgvgI-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <div>
        <h1 className='my-4 font-bold text-2xl text-center'>Please fill up the form below</h1>
        <form ref={form} onSubmit={sendEmail} className='shadow-xl w-[90%] mx-auto my-8'>
        <label className='block text-gray-700 text-sm font-bold my-2'>Name</label>
        <input type="text" name="user_name" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Your Name' />
        <label className='block text-gray-700 text-sm font-bold my-2'>Email</label>
        <input type="email" name="user_email" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Your e-mail'/>
        <br />
        <label className='block text-gray-700 text-sm font-bold my-2'>Message</label>
        {
          <TextareaAutosize name="message" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Type Your Message...'  minRows={3}
          maxRows={6}></TextareaAutosize>
        }
        <br />
        <input type="submit" value="Send" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-bold cursor-pointer'/>
      </form>
      </div>
    );
  };