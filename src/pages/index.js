import React from 'react'
import {useState } from "react";
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar'
import Sidebar from '../components/SideBar'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
     setIsOpen(!isOpen)
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <HeroSection />
    </>
  )
}

export default Home
