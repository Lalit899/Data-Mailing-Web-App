"use client"
import React, { createContext, useState } from 'react'
export const States = createContext()

function Contextapi({children}) {

    const [condition, setcondition] = useState(false)

    const [name, setname] = useState("")
    const [phone, setphone] = useState()
    const [email, setemail] = useState("")
    const [hobbies, sethobbies] = useState("")

    const [mainstack, setmainstack] = useState([])

    const [ids, setids] = useState([])

    const [mailid, setmailid] = useState([])
    
  return (
    <>
    <States.Provider value={{name,phone,email,hobbies,setname,setphone,setemail,sethobbies,condition,setcondition,mainstack,setmainstack,ids,setids,mailid,setmailid}}>
        {children}
    </States.Provider>
    </>
  )
}

export default Contextapi