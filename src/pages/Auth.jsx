import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Auth() {
  const [authStatus, setAuthStatus] = useState(true);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?fm=jpg&q=60&w=3000&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="w-full min-h-screen bg-black/50 flex flex-col items-center justify-center p-4">

        {/* Title */}
        <h1 className="text-center text-3xl font-extrabold text-white mb-5">
          BOOK STORE
        </h1>

        {/* Auth Card */}
        <div className="bg-gray-900 text-white p-8 md:p-10 w-full max-w-md rounded-lg shadow-2xl">

          {/* User Icon */}
          <div className="flex justify-center mb-3">
            <FaRegUser className="text-5xl" />
          </div>

          {/* Heading */}
          <h1 className="text-center text-2xl mb-6 font-bold">
            {authStatus ? "Login" : "Register"}
          </h1>

          {/* Form */}
          <form>

            {/* Username - Only Register */}
            {!authStatus && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="w-full p-3 bg-gray-800 text-white placeholder:text-gray-400 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
            )}

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-3 bg-gray-800 text-white placeholder:text-gray-400 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full p-3 bg-gray-800 text-white placeholder:text-gray-400 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>



            {/* Password Info - Only Login */}
            {authStatus && (
              <div className="flex items-center justify-between mb-5 gap-3">
                <p className="text-xs text-gray-400">
                  Never share your password with anyone else.
                </p>

                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-500 hover:underline whitespace-nowrap"
                >
                  Forgot Password?
                </Link>
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              className="p-3 bg-green-600 hover:bg-green-700 transition w-full rounded-md mb-4 font-semibold"
            >
              {authStatus ? "Login" : "Register"}
            </button>

            {/* Switch Login/Register */}
            <p className="text-center text-sm text-gray-400">
              {authStatus
                ? "Don't have an account?"
                : "Already have an account?"}{" "}

              <button
                type="button"
                onClick={() => setAuthStatus(!authStatus)}
                className="text-blue-500 hover:underline"
              >
                {authStatus ? "Register" : "Login"}
              </button>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;