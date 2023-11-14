import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter } from 'react-router-dom';

const App=()=> {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
