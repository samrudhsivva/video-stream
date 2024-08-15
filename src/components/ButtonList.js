import React from 'react'
import Button from './Button';

const ButtonList = () => {
  const buttonNames = [
    "All", 
    "Mixes", 
    "Music", 
    "Data Structures", 
    "Gaming", 
    "Live", 
    "Satire",
    "News", 
    "Podcasts", 
    "Tech", 
    "Programming", 
    "Sports", 
    "Comedy"
    
  ];
  
  return (
    
    <div>{buttonNames.map((button)=> {

      return <Button name={button}/>
    }  )}</div>
  )
}

export default ButtonList