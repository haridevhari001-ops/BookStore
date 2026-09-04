import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RiEditBoxLine } from "react-icons/ri";
import ProfileUpdate from "../components/ProfileUpdate";

function Profile() {
  const [showProfileUpdate, setShowProfileUpdate] = useState(false);

  const [sellStatus, setSellStatus] = useState(true);
  const [booksStatus, setBooksStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

  const trueClass = "p-3 border-t-1 border-s-1 border-e-1"
  const falseClass = "p-3 border-b-1"

  return (
    <>
      <Header />
      {
        showProfileUpdate &&
        <ProfileUpdate showProfileUpdate={setShowProfileUpdate} />
      }
      <div className="w-full">
        {/* Profile Banner */}
        <div className="h-[50vh] bg-gray-800 relative">

          {/* Profile Image */}
          <div className="h-40 w-40  absolute -bottom-20 left-4">
            <img
              src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Profile" className="h-full w-full object-cover rounded-full border-4 border-white"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="px-10">

          {/* Username */}
          <h1 className="mt-28 font-bold text-2xl">
            UserName
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">

            {/* About */}
            <div>
              <h2 className="font-semibold text-xl mb-2">
                About
              </h2>

              <p className="text-justify text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quod.
              </p>
            </div>

            {/* Edit Button */}
            <div className="flex justify-start md:justify-end items-start">
              <button
                className="p-3 bg-blue-600 text-white rounded-sm flex gap-2 items-center hover:bg-blue-700"
                onClick={() => setShowProfileUpdate(true)}
              >
                Edit
                <RiEditBoxLine />
              </button>
            </div>
          </div>
        </div>

        {/* Profile Update */}
        {showProfileUpdate && (
          <ProfileUpdate
            showProfileUpdate={setShowProfileUpdate}
          />
        )}
      </div>
      <div className="py-30 px-20 w-full">

        {/* Toggle buttons group */}
        <div className="flex justify-center mb-16" >
          <button
            className={sellStatus ? trueClass : falseClass}
            onClick={() => {
              setSellStatus(true);
              setBooksStatus(false);
              setPurchaseStatus(false);
            }}
          >
            Sell status
          </button>
          <button
            className={booksStatus ? trueClass : falseClass}
            onClick={() => {
              setSellStatus(false);
              setBooksStatus(true);
              setPurchaseStatus(false);
            }}
          >
            Books Status
          </button>
          <button
            className={purchaseStatus ? trueClass : falseClass}
            onClick={() => {
              setSellStatus(false);
              setBooksStatus(false);
              setPurchaseStatus(true);
            }}
          >
            Purchase Status
          </button>
        </div>

        <div >
          {/* main container */}
          <div>
            {sellStatus && (
              <div className=" bg-gray-200 rounded-2xl p-5">
                <h1 className="text-2xl font-bold mb-4 flex justify-center">
                  BOOK DETAILS
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                  <div>
                    {/* Book details content */}
                    <input type="text" placeholder="Book TITLE" className="w-full border-2 rounded-lg px-2 py-1 my-2" />
                    <input type="text" placeholder="Author " className="w-full border-2 rounded-lg px-2 py-1 my-2" />
                    <input type="text" placeholder="NP.OF PAGES" className="w-full border-2 rounded-lg px-2 py-1 my-2" />
                    <input type="text" placeholder="IMAGE URL" className="w-full border-2 rounded-lg px-2 py-1 my-2" />
                    <input type="text" placeholder="price" className="w-full border-2 rounded-lg px-2 py-1 my-2" />
                    <input type="text" placeholder="Discount" className="w-full border-2 rounded-lg px-2 py-1 my-2" />
                    <textarea placeholder="abstract" className="w-full border-2 rounded-lg px-2 py-1 my-2" cols="50" rows="4"></textarea>
                  </div>
                  <div className="px-2">
                    <input type="text" name="" placeholder="Publisher" className="w-full border-2 rounded-lg px-2 py-1 my-2" />
                    <input type="text" name="" placeholder="Language" className="w-full border-2 rounded-lg px-2 py-1 my-2" />
                    <input type="text" name="" placeholder="isbn" className="w-full border-2 rounded-lg px-2 py-1 my-2" />
                    <input type="text" name="" placeholder="Category" className="w-full border-2 rounded-lg px-2 py-1 my-2" />
                    <label htmlFor="bookimgfile" className="flex justify-center">
                      <input type="file" name="" id="bookimgfile" className="hidden" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeYvFFZa-ooRQKWf-B0hAV3ZzgQFIHfMUDF0xMLBVvYrxssMmjy0OW8YE&s=10" alt="upload" className="w-[40%]" />
                    </label>
                    <div className="flex justify-between">
                      <button className="px-2 py-2 bg-green-600 rounded-lg">
                        Submit
                      </button>
                      <button className="px-2 py-2 bg-red-500 rounded-lg">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            )}

            <div>
              {booksStatus && (
                <div clasName="p-2">
                  <div className="p-3 border grid sm:grid-cols-2 md:grid-cols-2 gap-5">
                    <div classaName="md:cols-span-5">
                      <h1 className="font-bold text-2xl">Books Title</h1>
                      <h4 className="font-bold text-green-600">$600</h4>
                      <p className="text-justify">
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                      </p>
                      <div className="flex">
                        <img src="https://png.pngtree.com/png-vector/20221009/ourmid/pngtree-original-approved-stamp-and-badget-design-red-grunge-png-image_6293837.png" alt="approved" className="w-[50%]" />
                        {/* <img src="https://png.pngtree.com/png-vector/20221009/ourmid/pngtree-original-approved-stamp-and-badget-design-red-grunge-png-image_6293837.png" alt="approved" className="w-20 h-20" /> */}
                      </div>
                    </div>
                    <div className=" md:cols-span-1">
                      <img src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855669.jpg" alt="bookimg" className="w-[50%] justify-end " />
                      <button className="p-2 my-2 bg-red-600 rounded-sm ">Remove</button>
                    </div>
                  </div>
                </div>

              )}
              <div>
                {purchaseStatus && (
                <div clasName="p-2">
                  <div className="p-5 border grid sm:grid-cols-1 md:grid-cols-2 gap-100">
                    <div classaName="md:cols-span-5">
                      <h1 className="font-bold text-3xl">Purchased Status</h1>
                      <h4 className="font-bold text-green-600">$600</h4>
                      <p className="text-justify">
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                      </p>
                      <div className="flex">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwIvU_ICaFVmdhP8Sz7Crvh1hax-WtPTd8pyBlAdf2hrgfHHpER6H3CA&s=10" alt="approved" className="w-[40%]"/>
                        {/* <img src="https://png.pngtree.com/png-vector/20221009/ourmid/pngtree-original-approved-stamp-and-badget-design-red-grunge-png-image_6293837.png" alt="approved" className="w-20 h-20" /> */}
                      </div>
                    </div>
                    <div className=" md:cols-span-1">
                      <img src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855669.jpg" alt="bookimg" className="w-[full] h-[80%] justify-end " />
                    </div>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
       
      </div>
       <Footer />
    </>
  );
}
export default Profile;