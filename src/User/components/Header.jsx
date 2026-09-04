import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";





function Header() {

  const [dropdown, setDropdown] = useState(false);
  return (
    <>
    <div className='w-full'>
      <div className='px-4 py-2'>
        {/* <img src="https://img.magnific.com/premium-vector/book-store-logo_848918-9463.jpg?semt=ais_hybrid&w=740&q=80" alt='icon' className='w-20 h-20'/> */}
        <h1 className='text-3xl font-bold flex justify-center'>BOOKSTORE</h1>
        <div className='justify-end  mx-4 py-1 flex gap-4 items-center'>
          <Link to={'/auth'} className='bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900'>
            Login
          </Link>
          <button className="flex gap-1 bg-blue-800 text-white items-center border-2 px-4 py-2 rounded-lg hover:bg-blue-900" onClick={() => setDropdown(!dropdown)}>
            <FaUser/>{' '}
            User{' '}
            {
              dropdown ? 
              <FaCaretUp/>
              :
              <FaCaretDown/>  

            }
          </button>
          {
            dropdown && 
            <div clasName=" border-2 rounded-sm shadow-lg absolute right-4 bg-white text-black w-40">
              <Link to={'/profile'} className='block px-4 py-2 hover:bg-gray-200'>Profile</Link>
              <p className='block px-4 py-2 hover:bg-gray-200'>Logout</p>
            </div>
          }
        </div>
          <div className="flex justify-end items-center gap-4 mx-4 py-2">
          <FaInstagram/>
          <FaFacebook/>
          <FaTwitter/>
{/* 
          <Link to={'/auth'} className='flex gap-1 items-center border-2 px-1 rounded-lg hover:bg-black hover:text-white'>
          <FaUser/>{''}
           </Link> */}
        </div>
      </div>
    </div>
    <div className='w-full bg-blue-600 text-white py-3.5 flex justify-center gap-4'>
      <Link to={'/'}>Home</Link>
      <Link to={'/books'}>Books</Link>
      <Link to={'/contact'}>Contact</Link>
    </div>
    </>
  )
}

export default Header