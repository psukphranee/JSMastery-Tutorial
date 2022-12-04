import React from 'react'
import { useState } from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants'

const NavBar = () => {


  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center navbar py-6'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

      {/* desktop navbar */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {
          navLinks.map(
            (nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === (navLinks.length - 1) ? 'mr-0' : 'mr-10'}`}
                >
                  <a href={`#${navLinks.id}`}>
                    {nav.title}
                  </a>
                </li>
            )
          )
        }
      </ul>

      {/* mobile navbar */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} 
        alt="menu"
        className="w-[28px] h-[28px] object-contain" 
        onClick={() => setToggle((prev) => (!prev))}
        />

        <div >

        </div>
      </div>

    </nav>
  )
}

export default NavBar