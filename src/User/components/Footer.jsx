import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-blue-600 text-white py-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* ABOUT US */}
      <div>
        <h4 className="text-md font-bold mb-3">
          ABOUT US
        </h4>

        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem alias, perspiciatis nihil vel ad recusandae
          dolor facilis eaque ut sunt neque et ipsa a?
          Voluptatem libero expedita blanditiis repellat voluptate.
        </p>
      </div>


      {/* NEWSLETTER */}
      <div>
        <h4 className="text-md font-bold mb-3">
          NEWSLETTER
        </h4>

        <p className="mb-2">
          Stay updated with our latest trends
        </p>

        <div className="flex">
          <input
            type="email"
            placeholder="Email"
            className="bg-white text-gray-700 py-2 px-3 outline-none w-full"
          />

          <button className="bg-orange-400 py-2 px-4 border-2 border-orange-400 hover:bg-orange-500">
            <FaArrowRight />
          </button>
        </div>
      </div>


      {/* FOLLOW US */}
      <div>
        <h4 className="font-bold text-md mb-3">
          FOLLOW US
        </h4>

        <p className="mb-3">
          LET US BE SOCIAL
        </p>

        <div className="flex gap-4 text-xl">
          <FaInstagram className="cursor-pointer " />
          <FaFacebook className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
        </div>
      </div>

    </div>
  )
}

export default Footer