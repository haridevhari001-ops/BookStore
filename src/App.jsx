import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'

import Auth from './pages/Auth'
import Home from './pages/Home'

import Books from './User/pages/Books'
import BooksDetails from './User/pages/BooksDetails'
import Contact from './User/pages/Contact'
import Profile from './User/pages/Profile'

import Dashboard from './Admin/pages/Dashboard'
import Resources from './Admin/pages/Resources'
import Careers from './Admin/pages/Careers'
import Settings from './Admin/pages/Settings'
import Pnf from './pages/Pnf'
import Header from './User/components/Header'
import Footer from './User/components/Footer'
import AdminHeader from './Admin/components/AdminHeader'

function App() {
  return(
<>
{/* <Header/> */}
<Routes>
  {/* common */}
<Route path='' element={<Home/>}></Route>
<Route path='auth' element={<Auth/>}></Route>
{/* User */}
<Route path='books' element={<Books/>}></Route>
<Route path='details' element={<BooksDetails/>}></Route>
<Route path='contact' element={<Contact/>}></Route>
<Route path='profile' element={<Profile/>}></Route>
{/* settings */}
<Route path='admin' element={<Dashboard/>}></Route>
<Route path='admin/resources' element={<Resources />}></Route>
<Route path='admin/settings' element={<Settings />}></Route>
<Route path='/*' element={<Pnf/>}></Route>
<Route path='admin' element={<AdminHeader/>}></Route>
</Routes>
{/* <Footer/> */}
</>
)
}
export default App
