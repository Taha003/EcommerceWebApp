import React from 'react';
import './App.css';
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
//Pages
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
//Components
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Product from './Components/Product';
import Footer from './Components/Footer';
import { useGlobalContext } from './Contexts/ProductContext';

function App() {


  return (
    <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
    <Sidebar/>
    <Footer/>
   </Router>
    </>
  );
}

export default App;
