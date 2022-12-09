import React from 'react'
import { useState } from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants'

const NavBar = () => {


  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

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
                className={`
                  font-poppins font-normal cursor-pointer text-[16px] text-white 
                  ${index === (navLinks.length - 1) ? 'mr-0' : 'mr-10'}
                  ${nav.title === active ? 'text-white' : 'text-dimWhite' }
                  `}
                onClick={ () => setActive(nav.title) }
                >
                  <a href={`#${navLinks.id}`} >
                    {nav.title}
                  </a>
              </li>
            )
          )
        }
      </ul>

      {/* mobile navbar */}
      <div className='sm:hidden flex flex-1 justify-end items-center border-solid border-white'>

        <img src={toggle ? close : menu} 
        alt="menu"
        className="w-[28px] h-[28px] object-contain" 
        onClick={() => setToggle((prev) => (!prev))}
        />

        {/* render list items */}
        <div className={`
              ${
                toggle ? 'flex' : 'hidden' 
              } 
              right-0 top-20 absolute min-w-[140px]  p-6 w-full
              rounded-xl bg-black-gradient 
              sidebar
              `} >
          <ul className='
                    flex flex-col flex-1
                    px-4 py-2
                    list-none
                    '>
            {
              navLinks.map(
                (nav, index) => (
                  <li
                    key={nav.id}
                    className={`
                      ${active === nav.title ? 'text-white' : 'text-dimWhite'}
                      ${index === (navLinks.length - 1) ? 'mr-0' : 'mr-10'}
                      px-2 py-1 my-2 cursor-pointer 
                      font-poppins font-normal text-[16px] text-white 
                      `}
                    onClick={ () => setActive(nav.title) }
                    >
                      <a href={`#${navLinks.id}`}
                          >
                        {nav.title}
                      </a>
                    </li>
                )
              )
            }
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default NavBar