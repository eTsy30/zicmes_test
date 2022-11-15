import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './SearchForm.css'
export const SearchForm = () => {
  const [getValidate, setValidate]=useState(false)
  const handleVilid=(value)=>{
     setValidate(value)
  }
  return (
    <div className='searchFormContiner'>
 
        <Input placeholder='Ваш номер...' onChange={handleVilid}/>
        <Button text='Заказать' validate={getValidate}/>
   </div>
  )
}
