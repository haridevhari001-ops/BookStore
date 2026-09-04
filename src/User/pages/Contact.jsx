import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { IoMdPin } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";




function Contact() {
  return (
    <>
      <Header />
      {/* Contact page */}
      <div className='w-full'>
        <section className='w-full px-30 py-10 my-3'>
          <h1 className='text-center text-3xl mb-4'>Contact Us</h1>
        </section>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quis, eligendi, unde quia deleniti, tempora in harum eos adipisci laudantium porro eum. Repellendus distinctio quasi praesentium, cum placeat sint! Repellat.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sit ipsa, fugiat officia nostrum tempore, doloremque aspernatur quas natus doloribus velit, magnam enim molestias. Dolorum laborum doloribus voluptatem inventore quas.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
          {/* Location */}
          <div className='flex items-center gap-3'>
            <div className='bg-blue-600 p-3 text-white rounded-full'>
              <IoMdPin className='text-3xl' />
            </div>
            <div>
            <h2 className='text-2xl mb-3'> Our Location</h2>
            <p>123 Main St, City, Country</p>
            </div>
          </div>

          <div className=' flex items-center mb-3'>
            <div className='bg-blue-600 p-3 text-white rounded-full'>
              <FaEnvelope className='text-3xl' />
            </div>
            <span>contact@bookstore.com</span>
          </div>
            <div className='flex items-center mb-3'>
              <div className='bg-blue-600 p-3 text-white rounded-full'>
                <FaPhone className='text-3xl' />
              </div>
              <span>098765431+</span>
            </div>
            
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086123456789!2d-122.419415484681!3d37.7749297797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x123456789abcdef0!2sBookstore%20Location!5e0!3m2!1sen!2sus!4v1612345678901"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
           
          </div>
          <div className='w-150 my-5'>
            <h2 className='text-2xl mb-3'>Get in Touch</h2>
            <form className='flex flex-col gap-4'>
              <input type="text" placeholder='Your Name' className='border p-2' />
              <input type="email" placeholder='Your Email' className='border p-2' />
              <textarea placeholder='Your Message' className='border p-2'></textarea>
              <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>Send Message</button>
            </form>
          </div>
          <div className='w-150 my-5'>
            <h2 className='text-2xl mb-3'>Contact Information</h2>
            <p>Email: contact@bookstore.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          
        </div>

    
      <Footer />
    </>

  )
}

export default Contact