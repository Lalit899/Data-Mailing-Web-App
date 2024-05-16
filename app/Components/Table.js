"use client"
import React, { useContext, useEffect } from 'react'
import { States } from '../Context/Contextapi'
import Removebtn from './Removebtn'
import Checkbox from './Checkbox'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Table() {
    const formdata = useContext(States)
    const mainstack = formdata.mainstack
    const ids = formdata.ids

    const notify2 = () => toast.error('Data deleted !', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    const fetchdata = () => {
        try {
        fetch('/api/formdata', {cache: "no-store"})
        .then(res => res.json())
        .then(obj=> formdata.setmainstack(obj.Formdata))
        }
        catch(error) {
            console.log("error fetching data",error)
        }
      }

    const fetchiddata = async() => {
        try {
        await fetch(`/api/formdata/${ids}`, {cache: "no-store"})
        .then(res => res.json())
        .then(obj=> formdata.setmailid(obj.Formdata))

        }
        catch(error) {
            console.log("error fetching data",error)
        }
      }

    useEffect(() => {
      fetchdata(fetchiddata());
    },[mainstack])

    let data = <th colSpan={7} className='bg-gray-900'><h1 className="text-center text-lg m-4">No Data Available!</h1></th>
    if(mainstack.length>0) {
    data = mainstack.map((data,i)=>{return ( <tr key={i} className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <Checkbox id={data._id}/>
                </td>
                <td scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {i+1}
                </td>
                <td className="px-6 py-4">
                    {data.name}
                </td>
                <td className="px-6 py-4">
                    {data.phone}
                </td>
                <td className="px-6 py-4">
                    {data.email}
                </td>
                <td className="px-6 py-4">
                    {data.hobbies}
                </td>
                <td className="px-1 py-4 text-center">
                    <Removebtn id={data._id} click={notify2}/>
                </td>
            </tr>)})
    }

  return (
    <>
    <ToastContainer />
    <div className='flex justify-center mt-5'>
        <div className="relative overflow-x-auto w-full shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-1">
                </th>
                <th scope="col" className="px-1 py-3">
                    Sr.no.
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Hobbies
                </th>
                <th scope="col" className="px-1 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {data}
        </tbody>
    </table>
    </div>
    </div>
    </>

  )
}

export default Table