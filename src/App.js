import './App.css';
import React from 'react';
import Header from './components/header'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import Sample from './components/sample';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<ProductListing/>} />
    <Route path="/xyz" element={<Sample/>}/>
    <Route path="/product/:productId" element={<ProductDetails/>} />
    <Route> 404 not found </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
