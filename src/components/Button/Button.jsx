import React from 'react'
import './Button.Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
export const Button =  ({text,validate}) => {
  const AnythingPost = async () => { const url=`https://httpbin.org/anything/${validate}`
  const options={
    headers: {
      Accept: "application/json"
    },
    method: "POST"
  }
  const response = await fetch(url, options);
        const responseFormat = await (response).json()
       alert('Cтатус '+ response.status+' '+'Ответ от сервера '+responseFormat.url+response.status)
      }
      const name=validate? text : <FontAwesomeIcon icon={faCircleExclamation}/>
  return (<>

  <button  onClick={AnythingPost} disabled={!validate} className= {validate?'botton_rombica':'botton_disable'}>{name}</button>
 
  </>
  )
}
