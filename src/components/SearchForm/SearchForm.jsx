import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './SearchForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import {reqest} from './../../utils/reqest'
const REQEST_URL='https://httpbin.org/anything'
export const SearchForm = () => {
  const [value, setValue]=useState('')
 
  const onSubmit= async()=>{
   
    const resporse=await reqest(REQEST_URL,value)
    resporse.status?onSuccess(resporse):onError(resporse)
  }
  const onSuccess=(resporse)=>{
    alert(`Статус ${resporse.status}  Ответ от сервера  ${resporse.url}`)
  } 
  const onError=(resporse)=>{
    alert(`${resporse.status}`)
  }

      return (
    <div className='searchFormContiner'>
        <Input placeholder='Ваш номер...'  value={value} onChange={setValue}/>
        <Button onClick={onSubmit} disabled={!value}>
          {value? 'Заказать' : <FontAwesomeIcon icon={faCircleExclamation}/>
  }
        </Button>
   </div>
  )
}