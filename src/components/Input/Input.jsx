import React from 'react'
import './Input.Style.scss'

export const Input = (props) => {
    const onChange = (event) => {
        const { value } = event.target
        props.onChange(value)
    }
    return (
        <input
            onChange={onChange}
            className="input_rombica"
            placeholder={props.placeholder}
            value={props.value}
        />
    )
}
