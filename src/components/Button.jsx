import React from 'react'

const Button = ({lable, iconUrl}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
        {lable}
        <img src={iconUrl} alt="arrow right icon" className="m1-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Button