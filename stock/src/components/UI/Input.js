import React from 'react'

const Input = ({field,form:{touched, errors}, ...props})=>{
    return (
        <input {...field} {...props}/>

    )
}
export default Input