import React from 'react'
import {  Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Moon from './Moon'
import Mars from './Mars'
import Europa from './Europa'
import Titan from './Titan'
import Nav from './Nav'

const Destination = () => {
  // const {pathname} = useLocation()

  // if(pathname === "/destination"){
  //   return <Navigate to="/destination/moon " replace/>
  // }
  return (
    <div className='bg-destinatonMobile  bg-cover bg-center h-screen min-h-screen mt-[-6rem] md:bg-destinationTablet lg:bg-destinationDesktop flex'>
      <div>
     
      <Routes>
        <Route path='/moon' element={<Moon/>}/>
        <Route path='/mars' element={<Mars/>}/>
        <Route path='/europa' element={<Europa/>}/>
        <Route path='/titan' element={<Titan/>}/>
      </Routes>
      </div>
      <Nav/>
    </div>
  )
}

export default Destination