import React from 'react'

const Button = ({name}) => {
  return (
    <button className='p-2 m-2 shadow-lg bg-gray-100 border rounded-full '>{name}</button>
  )
}

export default Button