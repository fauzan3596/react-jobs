import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function MainLayout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default MainLayout