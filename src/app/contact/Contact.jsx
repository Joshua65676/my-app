import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'template_nab5oe4', form.current, {
      publicKey: 'r-_5rxD7M89bdTgAT',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
    e.target.reset()
  };

  return (

    <div class="w-full max-w-md">
    <form ref={form} onSubmit={sendEmail} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your Name" name="user_name" required />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="example@gmail.com" name="user_email" required />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="subject">Subject</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your Subject" name="subject" required />
        </div>
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" rows="8" placeholder="Your Message"></textarea>
        </div>
        <div class="flex items-center justify-center">
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send Message</button>
        </div>
    </form>
  </div>


    );
  };
  
    {/* <div>
       <form ref={form} onSubmit={sendEmail}>
        
      </form>    
    </div> */}
{/* <input type="text" placeholder="Name" name="user_name" required />

<input type="email" placeholder="Email" name="user_email" required />

<input type="text" placeholder="Subject" name="subject" required />

<textarea name="message" placeholder="Message" cols="30" row="10" />

<button type="submit">
  Send Message
</button> */}




// import React from 'react'
// import { Form } from 'react-router-dom'

// export default function Contact() {
//   return (
//     <section>
//       <div>
//         <Form></Form>
//       </div>
//     </section>
//   )
// }
