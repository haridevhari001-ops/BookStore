import React from 'react'
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";




function AdminSidebar() {
    return (
        <div className='bg-sky-500 min-h-[90vh] flex items-center '>
            <div className='flex flex-col items-start gap-3'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VimCMeUSycA_Rsw_HL2WEBeW0xsBxzwstcMezlZTJL2ppSTNH6PuxW2b&s=10'
                    width={'60%'} className='rounded-full mx-5'  />
                <h1 className='text-xl font-bold mx-5'>Admin Dashboard</h1>
              <div className='flex flex-col items-start gap-3'>
                <Link to={'/admin'}>
                    <label htmlFor='op' className='flex justify-start items-center gap-2  mx-5'>
                        <input type='radio' checked={location.pathname=="/admin"} name='option' id='op' />{''}
                        <MdDashboard />{''}
                        Dashboard
                    </label>
                </Link>
                <Link to={'/admin/resources'}>
                    <label htmlFor='op' className='flex justify-center items-center gap-2  mx-5'>
                        <input type='radio' checked={location.pathname=="/admin/resources"} name='option' id='op' />{''}
                        <GrResources />{''}
                        Resources
                    </label>
                </Link>
                <Link to={'/admin/settings'}>
                    <label htmlFor='op' className='flex justify-center items-center gap-2  mx-5'>
                        <input type='radio'  checked={location.pathname=="/admin/settings"} name='option' id='op' />{''}
                        <IoSettingsSharp />{''}
                        Settings
                    </label>
                </Link>
                </div>

            </div>
        </div>
    )
}

export default AdminSidebar