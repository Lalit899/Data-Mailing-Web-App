import React, { useContext, useState } from 'react';
import { States } from '../Context/Contextapi';

function Form() {
  const formdata = useContext(States);
  const [name, setName] = useState(formdata.name);
  const [phone, setPhone] = useState(formdata.phone);
  const [email, setEmail] = useState(formdata.email);
  const [hobbies, setHobbies] = useState(formdata.hobbies);
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    hobbies: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!phone.match(/^\d{10}$/)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!email.match(/\S+@\S+\.\S+/)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!hobbies.trim()) {
      newErrors.hobbies = 'Please enter your hobbies.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passed, submit the form
    try {
      const response = await fetch('/api/formdata', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ name, phone, email, hobbies })
      });
      if (!response.ok) {
        throw new Error('Failed to submit form data.');
      }
      // Reset form and errors
      setName('');
      setPhone('');
      setEmail('');
      setHobbies('');
      setErrors({});
      formdata.setcondition(false); // Assuming you want to close the form after submission
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="absolute w-screen h-screen left-0 top-0 bg-gray-600/80 ">
      <form className="m-36 max-w-md mx-auto border-blue-950 border-2 p-5 rounded-xl bg-slate-800" onSubmit={handleSubmit} noValidate>
        <div className="grid md:gap-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="font-bold text-left text-2xl text-blue-600 drop-shadow-[0_1px_1px_black]">Data Form</h1>
            <div className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-xl text-sm px-2 py-1 font-bold  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer" onClick={() => formdata.setcondition(false)}>X</div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            name="phone"
            id="phone"
            pattern="[0-9]{10}"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label
            htmlFor="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (1234567890)
          </label>
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="hobbies"
            id="hobbies"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            required
          />
          <label
            htmlFor="hobbies"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Hobbies
          </label>
          {errors.hobbies && <span className="text-red-500 text-sm">{errors.hobbies}</span>}
        </div>
        <button
          type="submit"
          className="text-white my-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
