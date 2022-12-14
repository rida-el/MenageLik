import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#504A77] text-white hover:text-black py-2 px-6 rounded md:ml-8 hover:bg-[#C4DFFD] duration-500'>
      {props.children}
    </button>
  )
}

export default Button
