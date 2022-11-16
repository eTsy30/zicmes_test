import React from 'react'
import './Button.Style.scss'

export function Button(props) {
    const className = props.disabled ? 'botton_disable' : 'botton_rombica'
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={className}
        >
            {props.children}
        </button>
    )
}
