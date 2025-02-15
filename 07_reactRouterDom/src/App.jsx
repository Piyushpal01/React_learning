import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      {/* dynamically passing components using react-router-dom with help of outlet*/}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
