import React from 'react'
import { Link } from 'react-router-dom'

function PaymentSuccess() {
  return (
   <>
            <Header />
            <div className='min-h-[60vh]'>
                <div className='grid grid-cols-2'>
                    <div className='flex justify-center'>
                        <img src='https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1' />
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <h1 className='flex justify-center flex-col item-center'>Something went wrong!</h1>
                        <h1 className='text-3xl text-green-500'>Payment Success!!!</h1>
                        <Link to={'/'} className='underline text-blue-500'>{'<<'}Go Home</Link>

                    </div>
                </div>
            </div>
        </>  )
}

export default PaymentSuccess