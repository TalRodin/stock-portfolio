import React from 'react'

const Button = ({children, disabled, ...rest}) =>{
    return (
        <button disabled={disabled} {...rest}>
            {children}
        </button>
    )
}

export default Button