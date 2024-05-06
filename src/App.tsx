import React , { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuOrder from './client/menuorder';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartComponent from './client/cart/cart';
import MenuContextProvider from './client/context';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Order Plsss!!!
        </p>
        
      </header>
        <div className="App-body">
        {/* <MenuOrder></MenuOrder> */}
        </div>        
        <MenuContextProvider>
        <Router>
        <div>
        <Routes>
        <Route path="/" element={<MenuOrder/>}/>
        <Route path="/cart" element={<CartComponent/>}/>
        </Routes>
        </div>
        </Router>
        </MenuContextProvider>
    </div>
  );
}

export default App;
