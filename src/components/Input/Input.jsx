import React, { useState } from 'react'
import'./Input.Style.css'
export const Input = ({placeholder,onChange}) => {
   const[valid, setValid]=useState(null)
   const handleVaildate=(event)=>{
      setValid(event.target.value)
      onChange(event.target.value)
   }
  return (
   <input 
        onChange={handleVaildate}
        className='input_rombica' placeholder={placeholder}
        value={valid}
  />
   
  )
}
