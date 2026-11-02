import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import { profileEditApi } from "../../services/allAPis";
import { useNavigate } from "react-router-dom";


function Profileupdate({ setSidebar }) {
  const [userData, setUserData] = useState({
    id: "", username: "", email: "", password: "", bio: "", picture: "", role: ''
  })
  const [existingPicture, setExistingpicture] = useState("")

  const [fileType, setFileType] = useState(true)
  const [preview, setPreview] = useState("")
  const nav = useNavigate()



  useEffect(() => {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('user')) {
      const user = JSON.parse(sessionStorage.getItem('user'))
      setUserData({ ...userData, email: user.email, username: user.username, role: user.role, bio: user.bio, id: user._id })
      setExistingpicture(user.picture)
    }
  }, [])

  const handleFileUpload = (e) => {
    // console.log(e.target.files[0])
    if (e.target.files[0].type.includes("image/")) {
      setFileType(true)
      setUserData({ ...userData, picture: e.target.files[0] })
      setPreview(URL.createObjectURL(e.target.files[0]))
    }
    else {
      setFileType(false)
    }
  }

  const handleCancel = () => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    setUserData({ ...userData, email: user.email, username: user.username, role: user.role, bio: user.bio, id: user._id })
    setFileType(true)
    setPreview("")
    setSidebar(false)
  }

  const handleProfileUpdate = async () => {
    console.log(userData)
    const { username, email, password, bio } = userData
    if (!username || !email || !password || !bio) {
      toast.warning("Enter valid Inputs!!");
    }
    else {
      if (userData.picture) {
        const formData = new FormData()
        formData.append('id', userData.id)
        formData.append('username', userData.username)
        formData.append('email', userData.email)
        formData.append('password', userData.password)
        formData.append('bio', userData.bio)
        formData.append('role', userData.role)
        formData.append('picture', userData.picture)
        
        const response = await profileEditApi(formData)
        console.log(response)
        if (response.status === 200) {
          toast.success("profile Updated!!")
          setTimeout(() => {
            handleCancel()
            nav('/auth')
          }, 2000)
        }
        else {
          toast.error("Something Went Wrong!!")
          handleCancel()
        }
      }

      else {
        const response = await profileEditApi(userData)
        console.log(response)
        if (response.status === 200) {
          toast.success("profile Updated!!")
          setTimeout(() => {
            handleCancel()
            nav('/auth')
          }, 2000)
        }
        else {
          toast.error("Something Went Wrong!!")
          handleCancel()
        }
      }
    }
  }


  return (
    <div className="fixed top-0 z-10 h-screen w-screen bg-black/30">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        style={{ zIndex: 99999 }}
      />
      <div className="h-screen w-[50vh] rounded-t-lg border-r border-gray-400 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-lg bg-gray-800 px-5 py-5 text-white">
          <h1 className="text-xl font-bold">
            Edit <span className="text-amber-400">Profile</span>
          </h1>

          <button
            type="button"
            onClick={() => setSidebar(false)}
            className="cursor-pointer rounded-md px-2 py-1 text-lg text-gray-300 transition hover:bg-red-500 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="px-5 py-6">
          {/* Profile Image */}
          <label
            htmlFor="fileinp"
            className="mb-6 flex cursor-pointer justify-center"
          >
            <input
              type="file"
              name="profile"
              className="hidden"
              id="fileinp"
              onChange={handleFileUpload}
            />

            {existingPicture === "" ? (
              <img
                src="https://static.thenounproject.com/png/3270782-200.png"
                alt="profileicon"
                className="h-30 w-30 rounded-lg border-4 border-gray-200 bg-gray-100 object-contain p-2 transition hover:border-amber-400"
              />
            ) : existingPicture.includes("lh3.googleusercontent") ? (
              <img
                src={preview ? preview : existingPicture}
                alt="pro-pic"
                referrerPolicy="no-referrer"
                className="h-30 w-30 rounded-lg border-4 border-gray-200 object-cover transition hover:border-amber-400"
              />
            ) : (
              <img
                src={
                  preview
                    ? preview
                    : `${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`
                }
                alt="profile"
                className="h-30 w-30 rounded-lg border-4 border-gray-200 object-cover transition hover:border-amber-400"
              />
            )}

            {!fileType && (
              <span className="text-amber-500">
                File must be an image!
              </span>
            )}

          </label>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            className="mb-3 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-2 focus:border-green-700"
          />

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="UserName"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            className="mb-3 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-2 focus:border-green-700"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="mb-3 w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-2 focus:border-green-700"
          />

          {/* Bio */}
          <textarea
            name="bio"
            placeholder="Bio"
            rows="4"
            value={userData.bio}
            onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
            className="mb-5 w-full resize-none rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-2 focus:border-green-700"
          />

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={handleProfileUpdate}
              className="w-full cursor-pointer rounded-md bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Update
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="w-full cursor-pointer rounded-md bg-gray-200 py-3 font-semibold text-gray-700 transition hover:bg-red-500 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profileupdate;