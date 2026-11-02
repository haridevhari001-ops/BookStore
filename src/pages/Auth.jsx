import React, { useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { userRegisterAPI, userLoginAPI, googleAuthApi } from '../services/allAPis'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'

function Auth() {

  const [authStatus, setauthStatus] = useState(false)

  const nav = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: 'demo',
      email: '',
      password: ''
    },

    validationSchema: Yup.object({
      username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: (values, { resetForm }) => {
      if (authStatus) {
        console.log('Registration Api')
        handleRegister(values)
      } else {
        // console.log('Login Api')
        handleLogin(values)
      }
      resetForm()
    }
  })

  const handleRegister = async (data) => {
    const response = await userRegisterAPI(data)
    console.log(response)
    if (response.status === 201) {
      toast.success('User Registration Successfull...Please login..')
      setauthStatus(false)
    } else {
      toast.error('Something went wrong')
    }
  }

  const handleLogin = async (data) => {
    try{
    const response = await userLoginAPI(data)
    console.log(response)
    if (response.status === 200) {
      sessionStorage.setItem('token', response.data.token)
      sessionStorage.setItem('user', JSON.stringify(response.data.user))
      toast.success('Login Successfull..')
      if (response.data.user.role === "admin") {
        nav('/admin')
      } else {
        nav('/')
      }
    }
    else {
      toast.error('Something went wrong')
    }
  }
  catch (err) {
  console.log(err.response?.data)
  toast.error(err.response?.data?.message || "Something went wrong!!")
}
}

  const handleGooglelogin = async (credentialResponse) => {
    console.log(credentialResponse)
    const res = jwtDecode(credentialResponse.credential)
    // console.log(res)
    const { name, email, picture } = res
    const response = await googleAuthApi({ name, email, picture })
    if (response.status === 200) {
      sessionStorage.setItem('token', response.data.token)
      sessionStorage.setItem('user', JSON.stringify(response.data.user))
      toast.success('Login Successfully')
      if (response.data.user.role == "admin") {
        nav('/admin')
      }
      else {
        nav('/')
      }
    }
    else {
      toast.error('Login failed')
    }
  }



  return (
    <div className="w-full min-h-screen bg-blue-950 bg-no-repeat bg-cover bg-center">

      <div className="flex flex-col items-center justify-center min-h-screen">

        <h1 className="text-white text-4xl font-bold mb-6">
          BookStore
        </h1>

        <div className="bg-gray-900 p-8 md:p-10 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] text-white rounded-lg">

          <div className="flex flex-col items-center">

            <IoPersonCircleSharp className="text-8xl" />

            {
              authStatus ?
                <h1 className="text-2xl font-bold mb-5">
                  Register
                </h1>
                :
                <h1 className="text-2xl font-bold mb-5">
                  Login
                </h1>
            }

            <form
              onSubmit={formik.handleSubmit} className="w-full">


              <input type="email" placeholder="Email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="w-full bg-white text-black rounded-xl p-3 mb-1 outline-none" />

              {
                formik.touched.email && formik.errors.email &&
                <div className="text-red-500 text-sm mb-3">{formik.errors.email}</div>
              }




              {
                authStatus &&
                <>
                  <input type="text" placeholder="Username" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} className="w-full bg-white text-black rounded-xl p-3 mb-1 outline-none" />

                  {
                    formik.touched.username && formik.errors.username &&
                    <div className="text-red-500 text-sm mb-3">{formik.errors.username}</div>
                  }
                </>
              }



              <input type="password" placeholder="Password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="w-full bg-white text-black rounded-2xl p-3 mb-1 outline-none" />

              {
                formik.touched.password && formik.errors.password &&
                <div className="text-red-500 text-sm mb-3">
                  {formik.errors.password}
                </div>
              }


              {/* Forgot password */}

              <div className="w-full flex flex-col sm:flex-row justify-between gap-2 mb-4 text-sm">
                <p className="text-yellow-500">Don't share password with others</p>
                <p className="text-blue-500 underline cursor-pointer">Forgot password</p>
              </div>


              {/* Submit button */}

              {
                authStatus ?
                  <button
                    type="submit"
                    className="w-full p-3 rounded-2xl bg-green-800 hover:bg-green-700 font-bold"
                  >
                    Register
                  </button>
                  :
                  <button
                    type="submit"
                    className="w-full p-3 rounded-2xl bg-green-800 hover:bg-green-700 font-bold"
                  >
                    Login
                  </button>
              }

            </form>


            {/* google auth */}
            <div className='m-2'>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  handleGooglelogin(credentialResponse)
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                useOneTap
              />
            </div>


            {/* Change Login/Register */}

            <p className="mt-4">

              {
                authStatus ?
                  <span>Already a User</span>
                  :
                  <span>Are you new?</span>
              }

              {
                authStatus ?
                  <span
                    className="text-blue-500 underline cursor-pointer ml-1"
                    onClick={() => setauthStatus(!authStatus)}
                  >
                    Login
                  </span>
                  :
                  <span
                    className="text-blue-500 underline cursor-pointer ml-1"
                    onClick={() => setauthStatus(!authStatus)}
                  >
                    Register
                  </span>
              }

            </p>

          </div>
        </div>

        <ToastContainer position='top-center' autoClose={'3000'} />

      </div>
    </div>
  )
}

export default Auth