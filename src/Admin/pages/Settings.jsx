import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../User/components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaEdit } from "react-icons/fa";



function Settings() {
  return (
    <>
      <AdminHeader />
      <div className=''>
        <div className='w-full h-full grid grid-cols-1  lg:grid-cols-12 '>
          <div className='lg:col-span-3'>
            <AdminSidebar />
          </div>

          <div className='lg:col-span-9 p-5'>
            <h1 className='text-3xl text-center'>Settings</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
              <div>
                <p className='text-justify'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus, sapiente aperiam eaque repellat fuga et. Dolore quae ab fugiat, ipsum atque sed quod earum corporis, suscipit pariatur qui sint.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus, sapiente aperiam eaque repellat fuga et. Dolore quae ab fugiat, ipsum atque sed quod earum corporis, suscipit pariatur qui sint.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus, sapiente aperiam eaque repellat fuga et. Dolore quae ab fugiat, ipsum atque sed quod earum corporis, suscipit pariatur qui sint.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus, sapiente aperiam eaque repellat fuga et. Dolore quae ab fugiat, ipsum atque sed quod earum corporis, suscipit pariatur qui sint.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus, sapiente aperiam eaque repellat fuga et. Dolore quae ab fugiat, ipsum atque sed quod earum corporis, suscipit pariatur qui sint.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus, sapiente aperiam eaque repellat fuga et. Dolore quae ab fugiat, ipsum atque sed quod earum corporis, suscipit pariatur qui sint.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus, sapiente aperiam eaque repellat fuga et. Dolore quae ab fugiat, ipsum atque sed quod earum corporis, suscipit pariatur qui sint.
                </p>
              </div>
              <div className='h-full bg-blue-400 px-2'>
                <div className='flex justify-center'>
                  <label htmlFor='profilepic' className='relative'>
                    <input type='file' name='' id='profilepic' className='hidden' />
                    <img src='https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png' alt='logo' className='h-[250px]' />
                    <div className='p-3 absolute bg-yellow-300 text-white bottom-3 right-8 rounded'>
                      <FaEdit />
                    </div>
                  </label>
                </div>
                <input type='text' placeholder='username' className='w-full bg-white my-3 p-2 rounded' />
                <input type='text' placeholder='password' className='w-full bg-white mb-3 p-2 rounded' />
                <input type='text' placeholder='comfirm password' className='w-full bg-white mb-3 p-2 rounded' />
                <div className='grid grid-cols-2 gap-3 mb-5'>
                  <button className='bg-red-500 text-white p-3 hover:bg-white hover:text-red-500'>RESET</button>
                  <button className='bg-green-500 text-white p-3 hover:bg-white hover:text-red-500'>UPDATE</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Settings