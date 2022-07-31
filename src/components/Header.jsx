import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-20 bg-teal-800 flex
      items-center justify-between '
      >
      <li className='text-white flex ml-14 font-sans font-extrabold'>
        CG
        </li>

      <div className='flex mr-10 list-none'>
        <li className='mr-2 font-sans font-medium text-white'>
            Login | Criar 
            </li> 
            
      </div>

    </div>
  )
}

export default Header