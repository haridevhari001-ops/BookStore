import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GiHamburgerMenu } from "react-icons/gi";


function Books() {
  return (
    <>
      <Header />
      {/* Book List */}
      <div className='w-full px-30 py-10 my-3'>
        <h1 className='text-center text-3xl mb-4'>Our Books</h1>
        <input type="text" placeholder='Search books...' className='w-full px-4 py-2 border rounded-lg mb-4' />
      </div>
      <div className='grid gap-1 sm:gap-4 md:gap-6 lg:gap-8'>
        <div>
          <div className='flex justify-between'>
            <h1 className='text-xl'>Filter</h1>
            <GiHamburgerMenu className='text-2xl' />
          </div>
          <div className='my-3'>
            <label>
              <input type="radio" name="" id="" />{''}
              No Filter
            </label>
          </div>
        </div>
        <div className="py-5 col-span-18">
          <div className="w-fill flex flex-wrap justify-around">
              {/* Card */}
            <div className='bg-gray-200 border border-gray-300 rounded-lg p-4 m-2'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQUyHRIJQpzbIUSNLJgsj-tlA9ZF4xxa0XuV2r4fI-svplmiLmFn9vgFx&s=10" alt="Book Cover" className='w-full h-auto' />
              <h2 className='text-lg font-bold mt-2'>Book Title</h2>
              <p className='text-gray-600'>Author Name</p>
              <p className='text-xl font-bold'>$19.99</p>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default Books
      