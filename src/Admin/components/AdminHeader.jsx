import React from 'react'
import { CiLogout } from "react-icons/ci";
import Footer from '../../User/components/Footer';


function AdminHeader() {
  return (
    <>
      <div className='w-full'>
        <div className='w-full p-3 flex justify-between'>
          <div className='flex gap-3 items-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi0RiKX7VTQHIX4nY0BUdFgZj0uL4R71aolsciYN05TYfDzdDOtS8mw1y&s=10" alt="dashboard" className='w-[60px]' />
            <h1 className="text-2xl font-bold">BOOKSTORE</h1>
          </div>
          <button className="flex gap-1 items-center p-3 border-2 rounded-lg hover:bg-black hover:text-white">
            LogOut
            <CiLogout />
          </button>
        </div>
        <div className="bg-black w-full p-1.5">
          <marquee behaviour="" direction="">
            <h1 className='text-white'>Welcome, Admin! You're all set to manage and monitor the system</h1>
          </marquee>
        </div>
      </div>
    </>
  )
}

export default AdminHeader