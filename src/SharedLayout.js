import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import {BodyWrapper, Navbar, NavbarWrapper, OutletWrapper} from './Styles'

const SharedLayout = () => {

  const navigate = useNavigate();

  return (
    <>
        <BodyWrapper>
            <Navbar>
                <NavbarWrapper>
                <div onClick={() => {navigate("/")}} className='mainhead'>deto<span className='white'>NOTE</span></div>
                <div className='subhead'>Send notes that detonate after being read.</div>
                </NavbarWrapper>      
            </Navbar>
            <OutletWrapper>
                <Outlet/>
            </OutletWrapper>
            <Footer/>
        </BodyWrapper>

    </>
  )
}

export default SharedLayout