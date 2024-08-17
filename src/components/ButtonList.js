import React from 'react'
import Button from './Button'

const list = ["All","Recent","Music","News","Films","Comedy","Trailers","Education","Sports","Romance","Podcast","Dramedy"];

const ButtonList = () => {
  return (
    <div className='flex'>

      
      {
        list.map((item)=> <div ><Button  name={item} /> </div>)
      }
      
       
    </div>
  )
}

export default ButtonList