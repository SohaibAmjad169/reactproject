import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

function Header() {
  return (
    <>
        <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Service' element={<Service/>}></Route>
      <Route path='/About'  element={<About/>}></Route>
      <Route path='/Contact'  element={<Contact/>}></Route>
    </Routes>
    </>
  );
}

export default Header;
