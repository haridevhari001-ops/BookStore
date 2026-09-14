import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../User/components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function Resources() {

  const [toggle, setToggle] = useState(true)

  const trueStyle =
    "border-t border-s border-r p-3"

  const falseStyle =
    "border-b p-3"

  return (
    <>
      <AdminHeader />

      <div className=''>
        <div className='w-full min-h-[70vh] grid grid-cols-1 lg:grid-cols-12'>

          {/* Sidebar */}
          <div className='lg:col-span-3'>
            <AdminSidebar />
          </div>

          {/* Main Content */}
          <div className='lg:col-span-9 p-5'>

            <h1 className='text-3xl'>Resources</h1>

            {/* Toggle Buttons */}
            <div className='flex justify-center my-5'>
              <button
                className={toggle ? trueStyle : falseStyle}
                onClick={() => setToggle(true)}
              >
                Books
              </button>

              <button
                className={toggle ? falseStyle : trueStyle}
                onClick={() => setToggle(false)}
              >
                Users
              </button>
            </div>

            {
              toggle ?

                /* Books */
                <div className='w-70 flex flex-col items-start '>

                  <div className='w-full  bg-gray-200 border border-gray-300 rounded-lg p-4 shadow-md mx-100'>

                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQUyHRIJQpzbIUSNLJgsj-tlA9ZF4xxa0XuV2r4fI-svplmiLmFn9vgFx&s=10"
                      alt="Book Cover"
                      className='w-full h-64 object-cover rounded-lg'
                    />

                    <h2 className='text-lg font-bold mt-3'>
                      Harry Potter
                    </h2>

                    <p className='text-xl font-bold my-3'>
                      $19.99
                    </p>

                    <button className='w-full bg-green-500 text-white border p-2 rounded-sm shadow'>
                      Approved
                    </button>

                  </div>

                </div>

                :

                /* Users */
                <div className='flex flex-wrap justify-around gap-2'>

                  <div className='w-[20rem] border p-3 bg-gray-400'>

                    <h1 className='text-center my-2'>
                      User ID : 9878987634567
                    </h1>

                    <div className='flex gap-3'>

                      <img
                        src='https://static.vecteezy.com/system/resources/previews/046/010/545/non_2x/user-icon-simple-design-free-vector.jpg'
                        width='30%'
                        alt='User'
                        className='rounded-full'
                      />

                      <div className='flex flex-col justify-center'>
                        <h1 className='text-amber-700'>
                          UserName :
                        </h1>

                        <div className='flex flex-col justify-center'>
                          <h1 className='text-amber-700'>
                            UserEmail :
                          </h1>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
            }

          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Resources