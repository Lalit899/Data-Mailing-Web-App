import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { States } from '../Context/Contextapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Email = () => {
  const form = useRef();
  const data = useContext(States);
  const notify1 = () => toast.success('Mail Sent Successfully', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });


  const formData = {
    user_name: data.mailid.map(d => d.name).join(', '), // Join names if there are multiple
    user_phone: data.mailid.map(d => d.phone).join(', '), // Join phones if there are multiple
    user_email: data.mailid.map(d => d.email).join(', '), // Join emails if there are multiple
    user_hobbies: data.mailid.map(d => d.hobbies).join(', '), // Join hobbies if there are multiple
  };
  
  const name = formData.user_name
  const email = formData.user_email
  const phone = formData.user_phone
  const hobbies = formData.user_hobbies


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_41uzoo3', 'template_hpwhl6p', form.current, {
        publicKey: 'cmG1Lov4pTMBd1SWT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          notify1();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <ToastContainer />
      <input type="text" defaultValue={name} name="user_name" className='hidden' />
      <input type="text" defaultValue={email} name="user_email" className='hidden' />
      <input type="text" defaultValue={phone} name="user_phone" className='hidden' />
      <input type="text" defaultValue={hobbies} name="user_hobbies" className='hidden' />
      <input type="submit" value="Send" className=' absolute top-28 left-44 cursor-pointer focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900' />
    </form>
  );
};