import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../User/components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { SiBookstack } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";



function Dashboard() {
  return (
    <>
      <AdminHeader />
      <div className=''>
        <div className='w-full h-full grid grid-cols-1  lg:grid-cols-12 '>
          <div className='lg:col-span-3'>
            <AdminSidebar />
          </div>

          <div className='md:col-span-9 p-5'>
            <h1 className='text-3xl'>Dashboard</h1>
            <div className='grid md:grid-cols-3 gap-2 m-2'>
              <div className='bg-violet-500 text-white p-10 rounded-lg text-lg'>
                 <SiBookstack/>  {''}
                Total number of books
                100+
              </div>
              <div className='bg-green-400 text-white p-10 rounded-lg text-lg'>
               <FaUser/> {''}
                 Total number of USers
                100+
              </div>
              <div className='bg-orange-400 text-white p-10 rounded-lg text-lg'>
                <GrUserWorker/> {''}
                 Total number of Employees
                100+
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
