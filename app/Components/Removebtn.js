"use client"
import React from 'react'

function Removebtn({id,click}) {
    const handledelete = async() => {
    const confirmed = confirm("Deleting data");
    if(confirmed) {
        await fetch(`/api/formdata?id=${id}`, {
            method: "DELETE"
        });
        click()
    }
    };
  return (
    <>
        <button onClick={handledelete} className="text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-400 font-medium rounded-full text-sm px-4 py-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
    </>
  )
}

export default Removebtn