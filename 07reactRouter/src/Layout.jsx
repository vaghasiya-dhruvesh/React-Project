
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            {/* Function of outlet is to fix the upper and bellow component like header and footer are same  */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout