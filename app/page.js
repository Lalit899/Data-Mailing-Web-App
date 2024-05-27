"use client"
import React, { useContext, useState } from 'react'
import Table from './Components/Table'
import Form from './Components/Form'
import { States } from './Context/Contextapi'
import { Email } from './mail/email'
import Footer from './Components/Footer'
import Updateform from './Components/Updateform'

function Page() {
  
 const data = useContext(States)
 const condition = data.condition
 const condition1 = data.condition1

  return (
  <>
  <h1 className='text-left mt-8 text-4xl text-gray-700 ml-10 font-sans font-semibold '>Data Storage & Mailing Application</h1>
    <div className='m-10'>
      <button disabled={condition==true} onClick={()=>data.setcondition(!condition)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-800 disabled:hover:text-gray-500 '>Add New Data</button>
      <div>{Email()}</div>
      <Table/>
      {condition==true && <Form/>}
      {condition1==true && <Updateform/>}
    </div>
    <Footer/>
  </>
  )
}

export default Page