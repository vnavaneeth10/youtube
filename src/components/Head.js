import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
      dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg '>

        <div className='flex col-span-1'>

        <img 
        onClick={()=>toggleMenuHandler()}
        className='h-8 cursor-pointer'
        src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg' 
        alt='Menu-icon' 
        />

        <img 
        className='h-8 mx-2'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png' 
        alt='Youtube-Logo'
        />

        </div>

        <div className='col-span-10 place-items-center'>
            <input 
            type='text' 
            placeholder='Search'
            className='w-3/4 border border-gray-500 py-2 px-4 rounded-s-full font-semibold text-center'
            />

            <button 
            className='border border-gray-500 py-2 px-4 rounded-e-full bg-gray-100'>
              🔍 
            </button>

        </div>

        <div className='col-span-1'>

            <img
            className='h-8'
            alt='user-icon'
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />

        </div>

    </div>
  )
}

export default Head
