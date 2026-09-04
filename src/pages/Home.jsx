import React, { useEffect, useState } from 'react'
import Preloader from '../component/Preloader'
import Header from '../User/components/Header'
import Footer from '../User/components/Footer'
import { FaSearch } from "react-icons/fa"

function Home() {

  const [loadstatus, setLoadStatus] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadStatus(false)
    }, 2000)
  }, [])

  return (
    <>
      {loadstatus ? (
        <Preloader />
      ) : (
        <>
          <Header />

          {/* ================= HERO ================= */}
          <section className="w-full bg-blue-600">

            <div
              className="h-[70vh] bg-no-repeat bg-cover bg-fixed bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeSUyMGJvb2tzfGVufDB8fDB8fHww')"
              }}
            >

              <div className="text-white bg-[rgba(0,0,0,0.3)] h-full flex flex-col items-center justify-center gap-3">

                <h1 className="text-5xl font-bold">
                  Wonderful Gifts
                </h1>

                <h4 className="text-3xl">
                  Give Your Family and Friends a Book
                </h4>

                {/* Search */}
                <div className="relative w-[80%] md:w-[50%]">

                  <input
                    type="text"
                    placeholder="Search Books"
                    className="w-full bg-white text-gray-600 py-3 px-4 rounded-2xl outline-none"
                  />

                  <FaSearch className="text-black absolute top-4 right-4" />

                </div>

              </div>

            </div>

          </section>


          {/* ================= NEW ARRIVALS ================= */}
          <section className="w-full py-5">

            <h1 className="text-3xl text-center my-3">
              New Arrival
            </h1>

            <h1 className="text-5xl text-center my-3">
              Explore Our Latest Collection
            </h1>

            {/* Cards */}
            <div className="flex flex-wrap justify-around gap-5 my-5">

              {/* Card */}
              <div className="w-[18rem] shadow-2xl rounded-lg overflow-hidden">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQUyHRIJQpzbIUSNLJgsj-tlA9ZF4xxa0XuV2r4fI-svplmiLmFn9vgFx&s=10"
                  alt="Harry Potter"
                  className="h-75 w-full object-cover"
                />

                <h1 className="my-2 text-center text-xl">
                  Harry Potter
                </h1>

                <h2 className="text-center text-green-700 mb-3">
                  $300
                </h2>

              </div>

            </div>

            {/* Explore Button */}
            <div className="text-center my-5">

              <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900">
                Explore More
              </button>

            </div>

          </section>


          {/* ================= FEATURED AUTHORS ================= */}
          <section className="w-full my-5 px-5">

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">

              {/* Author Content */}
              <div>

                <h1 className="text-center text-xl">
                  FEATURED AUTHORS
                </h1>

                <h1 className="text-center text-2xl font-bold">
                  CAPTIVATING WITH EVERY WORD
                </h1>

                <p className="mt-3 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vero cum dolorum inventore vel cumque a molestiae autem
                  quaerat commodi natus officia nostrum ipsum quas nihil
                  nesciunt pariatur, impedit molestias.
                </p>

                <p className="mt-3 text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Esse quidem nobis nulla? Enim at deleniti reprehenderit
                  tempora! Culpa reiciendis esse aspernatur, aliquam
                  veritatis excepturi doloribus est hic voluptatibus quae
                  impedit!
                </p>

              </div>

              {/* Author Image */}
              <div className="flex justify-center items-center">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibB3i9knLQmw5sIJl_A6Yv7V6FbZcfoVv0HTh_orI1iWADhhQJapToBU&s=10"
                  alt="Featured Author"
                  className="w-75 h-75 rounded-full object-cover"
                />

              </div>

            </div>

          </section>


          {/* ================= TESTIMONIALS ================= */}
          <section className="w-full px-5 my-5">

            <h1 className="text-center my-2 text-3xl">
              TESTIMONIALS
            </h1>

            <h2 className="text-center my-2 text-3xl">
              SEE WHAT OTHER PEOPLE ARE SAYING
            </h2>

            <div className="flex flex-col items-center mb-4">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3unDoRcmSdDsTZeAaJTX7DENAUbdapZtvZjL4-qbpigQ5usb-pAT_MGF3&s=10"
                alt="Customer"
                className="w-75 h-75 rounded-full object-cover"
              />

              <h1 className="text-xl font-bold mt-2">
                John Doe
              </h1>

            </div>

            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae illum praesentium dolorum tempore perferendis
              reiciendis non consequatur consectetur impedit omnis eveniet
              similique, ipsum distinctio repellendus qui libero at obcaecati
              rem!
            </p>

          </section>


          {/* ================= FOOTER ================= */}
          <Footer />

        </>
      )}
    </>
  )
}

export default Home