import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../../Components/Home'
export default function  DefaultLayout() {
  return (
    <div>
        <Home/>
        <Outlet/>
    </div>
  )
}

