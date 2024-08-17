import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-300 px-5 py-2 m-2 rounded-lg hover:bg-gray-300 font-semibold '>
            {name}
        </button>
    </div>
  )
}

export default Button