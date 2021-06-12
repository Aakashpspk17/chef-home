import React from 'react'
import Navbar from '../Menubar'
import Footer from '../Footer'
import { Nav } from 'react-bootstrap'

export default function Layout (props) {
    
    
    return(
        <>
        <Navbar />
        {props.children}
        <Footer />
        </>
    )
}