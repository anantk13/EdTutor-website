import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <> 
    <Header />
    <Outlet />   {/*Outlet keeps the base layout and where it is applied it changes only that part like here header and footer will remain same on home and about us and only inner content will change*/}
    <Footer />

    </>
  )
}

export default Layout