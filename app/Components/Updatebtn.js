"use client"
import React, { useContext } from 'react'
import { States } from '../Context/Contextapi'

function Updatebtn({id}) {
  const formdata = useContext(States)
  const condition1 = formdata.condition1

  const handleupdate = () => {
    formdata.setcondition1(!condition1)
    formdata.setupdateid({id})
  }

  return (
    <>
    <button onClick={handleupdate} className="text-white ml-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
    </>
  )
}

export default Updatebtn