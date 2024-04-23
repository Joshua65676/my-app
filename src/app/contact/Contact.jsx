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
     <section>

        <form ref={form} onSubmit={sendEmail}>
        
         <input type="text" placeholder="Name" name="user_name" required />
         
         <input type="email" placeholder="Email" name="user_email" required />
         
         <input type="text" placeholder="Subject" name="subject" required />
        
         <textarea name="message" placeholder="Message" cols="30" row="10" />
         
         <button type="submit">Send Message</button>
       </form>
     
     </section>
  );
};





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
