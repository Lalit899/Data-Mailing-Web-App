import React, { useContext, useState } from 'react'
import { States } from '../Context/Contextapi'

function Updateform() {
  const formdata = useContext(States)
  const updatename = formdata.name
  const updatephone = formdata.phone
  const updateemail = formdata.email
  const updatehobbies = formdata.hobbies
  const condition1 = formdata.condition1
  const {id} = formdata.updateid

  let change = condition1
    const [close, setclose] = useState(change)
    formdata.setcondition1(close)

  // State variables for field errors
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [hobbiesError, setHobbiesError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    let isValid = true;

    if (!updatename.trim()) {
      setNameError('Name is required');
      isValid = false;
    }

    if (!updatephone.trim()) {
      setPhoneError('Phone number is required');
      isValid = false;
    } else if (!updatephone.match(/^\d{10}$/)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      isValid = false;
    }

    if (!updateemail.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(updateemail)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    if (!updatehobbies.trim()) {
      setHobbiesError('Hobbies are required');
      isValid = false;
    }

    if (updatename.trim()) {
      setNameError('');
    }

    if (updatephone.trim()) {
      setPhoneError('');
    } else if (updatephone.match(/^\d{10}$/)) {
      setPhoneError('');
    }

    if (updateemail.trim()) {
      setEmailError('');
    } else if (/\S+@\S+\.\S+/.test(updateemail)) {
      setEmailError('');
    }

    if (updatehobbies.trim()) {
      setHobbiesError('');
    }

    if (isValid) {
      try {
        await fetch(`/api/formdata/${id}`, { 
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ updatename, updateemail, updatehobbies, updatephone })
        });
        formdata.setname("");
        formdata.setphone("");
        formdata.setemail("");
        formdata.sethobbies("");
        setNameError('');
        setEmailError('');
        setPhoneError('');
        setHobbiesError('');
        setclose(!close);
      } catch (error) {
        console.log("Error submitting data", error);
      }
    }
  };
  const handleclose = () =>{
    setclose(!close)
    formdata.setname("");
    formdata.setphone("");
    formdata.setemail("");
    formdata.sethobbies("");
    // window.location.reload();
  }
  return (
    <>
     <div className='absolute w-screen h-screen left-0 top-0 bg-gray-600/80 '>
    <form className="m-36 max-w-md mx-auto border-blue-950 border-2 p-5 rounded-xl bg-slate-800" onSubmit={handleSubmit} noValidate>
    <div className="grid md:gap-6">
    <div className='flex justify-between items-center mb-2'>
      <h1 className='font-bold text-left text-2xl text-blue-600 drop-shadow-[0_1px_1px_black] '>Data Update</h1>
      <div className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-xl text-sm px-2 py-1 font-bold  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer" onClick={handleclose}>X</div>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={updatename} onChange={(e)=>formdata.setname(e.target.value)} required />
        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        {nameError && <span className="text-red-500">{nameError}</span>}
    </div>
  </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{10}" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " maxLength={10} value={updatephone} onChange={(e)=>formdata.setphone(e.target.value)} required />
        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
        {phoneError && <span className="text-red-500">{phoneError}</span>}
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={updateemail} onChange={(e)=>formdata.setemail(e.target.value)} required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
      {emailError && <span className="text-red-500">{emailError}</span>}
  </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="hobbies" id="hobbies" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={updatehobbies} onChange={(e)=>formdata.sethobbies(e.target.value)} required />
        <label htmlFor="hobbies" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hobbies</label>
        {hobbiesError && <span className="text-red-500">{hobbiesError}</span>}
    </div>
    <button type="submit" className="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    </div>
    </>  )
}

export default Updateform
