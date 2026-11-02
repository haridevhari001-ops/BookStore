import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { Navigate } from 'react-router-dom';





function Header() {

  const [dropdown, setDropdown] = useState(false);
  const [token, setToken] = useState("")
  const [dp, setDP] = useState("")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('user')) {
      const userToken = sessionStorage.getItem('token')
      const userobj = JSON.parse(sessionStorage.getItem('user'))
      console.log(userobj)
      setToken(userToken)
      setDP(userobj.picture)
      setUserName(userobj.Username)
    }
  }, [token])

  const logout=()=>{
    sessionStorage.clear()
    nav('/auth')
  }

  return (
    <>
      <div className='w-full bg-gradient-to-r from-[#073451] via-[#0c6170] to-[#102F50] text-[#F4E4C8] shadow-lg bg-[#2A1B13]   bg-[repeating-linear-gradient(0deg,transparent_0px,rgba(0,0,0,0.18)_2px,transparent_4px,transparent_10px),linear-gradient(110deg,#21140E,#493020_35%,#2A1B13_65%,#3B261A)]">'>
        <div className='px-4 py-2 '>
          <h1 className='text-3xl font-bold flex justify-center'>BOOKSTORE</h1>
          <div className='justify-end  mx-4 py-1 flex gap-4 items-center'>
            <Link to={'/auth'} className='bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900'>
              Login
            </Link>
            <button
              className="flex gap-1 bg- text-white items-center border-2 px-4 py-2 rounded-lg hover:bg-blue-900"
              onClick={() => setDropdown(!dropdown)}
            >
              {
                dp === "" ?
                  <FaUser />
                  :
                  <img src={dp} alt="" />
              }

              {
                userName === "" ?
                  <>User </>
                  :
                  userName
              }

              {
                dropdown ?
                  <FaCaretUp />
                  :
                  <FaCaretDown />
              }
            </button>
            {
              dropdown &&
              <div className=" border-2 rounded-sm shadow-lg absolute right-4 bg-white text-black w-40">
                <Link to={'/profile'} className='block px-4 py-2 hover:bg-gray-200'>Profile</Link>
                <p className='block px-4 py-2 hover:bg-gray-200'onClick={logout}>Logout</p>
              </div>
            }
          </div>
          <div className="flex justify-end items-center gap-4 mx-4 py-2">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            {/* 
          <Link to={'/auth'} className='flex gap-1 items-center border-2 px-1 rounded-lg hover:bg-black hover:text-white'>
          <FaUser/>{''}
           </Link> */}
          </div>
        </div>
      </div>
      <div className='w-full  bg-gray-800 text-white py-3.5 flex justify-center gap-4'>
        <Link to={'/'}>Home</Link>
        <Link to={'/books'}>Books</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
    </>
  )
}

export default Header