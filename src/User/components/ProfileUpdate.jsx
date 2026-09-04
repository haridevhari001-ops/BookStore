import React from 'react'

function ProfileUpdate({showProfileUpdate}) {
  return (
    <div className='h-screen fixed z-1 top-0 bg-rgba(255,255,255,0.5) w-[50vh]'>
        <div className="w-[50vh] h-screen bg-white border-2 rounded-lg">
            <div className='bg-black text-white px-2 py-5 rounded-t-lg font-bold flex justify-between'>
              <h1>Update Profile</h1>
              <button onClick={() => showProfileUpdate(false)}>X</button>
            </div>
            <div className='h-full px-5'>
              <label htmlFor='filenp'>
                <input type="file" id='filenp' className='hidden'/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeYvFFZa-ooRQKWf-B0hAV3ZzgQFIHfMUDF0xMLBVvYrxssMmjy0OW8YE&s=10" alt='profile' className='w-full'/>
              </label>
              <input type='text' placeholder='UserName' className='w-full border-2 rounded-lg px-2 py-1 my-2'/>
              <input type='text' placeholder='Email' className='w-full border-2 rounded-lg px-2 py-1 my-2'/>
              <input type='password' placeholder='Password' className='w-full border-2 rounded-lg px-2 py-1 my-2'/>
              <textarea placeholder='Bio' className='w-full border-2 rounded-lg px-2 py-1 my-2' cols='50' rows='4'/>
              <div className='flex justify-between px-5 py-2'>
                <button className='px-2 py-2 bg-green-600 rounded-lg '>
                  Update
                </button>
                <button className='px-2 py-1 bg-red-500 rounded-lg ml-2' onClick={() => showProfileUpdate(false)}>
                  Cancel
                </button>
            </div>  
              </div>
        </div>
    </div>
  )
}

export default ProfileUpdate