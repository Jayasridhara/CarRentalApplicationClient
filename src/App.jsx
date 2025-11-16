import React, { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes, useLoaderData, useLocation } from 'react-router-dom';

import CarDetails from './pages/CarDetails';
import MyBookings from './pages/MyBookings';
import Cars from './pages/Cars';
import Home from './pages/Home';
import Footer from './component/Footer';

import Dashboard from './pages/owner/Dashboard';
import AddCar from './pages/owner/AddCar';
import ManageCars from './pages/owner/ManageCars';
import ManageBooking from './pages/owner/ManageBooking';
import Layout from './pages/owner/Layout';
import Login from './component/Login';
import {Toaster} from 'react-hot-toast';
import { useAppContext } from './context/AppContext';
function App() {


  const {showLogin}=useAppContext();
  const isOwerPath=useLocation().pathname.startsWith('/owner');



  return (
    <>
      <Toaster/>
      {showLogin && <Login/>}
      {!isOwerPath && <Navbar/>}

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details/:id' element={<CarDetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/owner' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="add-car" element={<AddCar/>}/>
          <Route path="manage-cars" element={<ManageCars/>}/>
          <Route path="manage-bookings" element={<ManageBooking/>}/>
        </Route>
      </Routes>



      {!isOwerPath && <Footer/>}
      
    </>
  )
}

export default App