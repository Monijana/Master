import React , { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuOrder from './client/menuorder';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartComponent from './client/cart/cart';

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
        <Router>
        <div>
        <Routes>
        <Route path="/" element={<MenuOrder/>}/>
        <Route path="/cart" element={<CartComponent/>}/>
        </Routes>
        </div>
        </Router>

        {/* <Router>
                <Route path="/" Component={CartComponent}/>
                <Route path="/cart" Component={CartComponent}/>
        </Router> */}
    </div>
  );
}

export default App;
