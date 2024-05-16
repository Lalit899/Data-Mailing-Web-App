"use client"
import React, { useContext, useState } from 'react'
import { States } from '../Context/Contextapi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const formdata = useContext(States)
  const name = formdata.name
  const phone = formdata.phone
  const email = formdata.email
  const hobbies = formdata.hobbies

  const condition = formdata.condition

  const notify = () => toast.success('Form Subimtted', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

    let change = condition
    const [close, setclose] = useState(change)
    formdata.setcondition(close)

    const handlesubmit = async() => {
        
        if (/\S+@\S+\.\S+/.test(email)) { 

          try{
            await fetch('/api/formdata', { 
              method:"POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({name,phone,email,hobbies})
              }
            )
            notify();
          }
          catch(error) {
            console.log("error submiting data", error)
          }

          formdata.setname("")
          formdata.setphone("")
          formdata.setemail("")
          formdata.sethobbies("")
        }
        else{
            console.log("form error");
        }
    }

    const handleclose = () =>{
      setclose(!close)
      window.location.reload();
    }
  return (
    <>
    <ToastContainer />
    <div className='absolute w-screen h-screen left-0 top-0 bg-gray-600/80 '>
  <form className="m-36 max-w-md mx-auto border-blue-950 border-2 p-5 rounded-xl bg-slate-800" action={handlesubmit}>
  <div className="grid md:gap-6">
    <div className='flex justify-between items-center mb-2'>
      <h1 className='font-bold text-left text-2xl text-blue-600 drop-shadow-[0_1px_1px_black] '>Data Form</h1>
      <div className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-xl text-sm px-2 py-1 font-bold  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer" onClick={handleclose}>X</div>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={name} onChange={(e)=>formdata.setname(e.target.value)} required />
        <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    </div>
  </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="tel" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " maxLength={10} value={phone} onChange={(e)=>formdata.setphone(e.target.value)} required />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={email} onChange={(e)=>formdata.setemail(e.target.value)} required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="hobbies" id="hobbies" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={hobbies} onChange={(e)=>formdata.sethobbies(e.target.value)} required />
        <label htmlFor="hobbies" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hobbies</label>
    </div>
  <button type="submit" className="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    </div>
    </>
  )
}

export default Form