import './App.css';
import React,{useState} from 'react';
import {Button} from 'react-bootstrap'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Toptrending from './Toptrending';
import Bestoffers from './Bestoffers';
import Header from './Header';
import Image from 'react-bootstrap/Image'
import Shoppingcart from './Shoppingcart';


function App()
 {
  return (
    <div className="App">
    <Header />
      <BrowserRouter>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/trending">
        <Toptrending />
      </Route>
      <Route path="/offers">
        <Bestoffers />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/shopping">
        <Shoppingcart />
        
      </Route>
      </BrowserRouter>
      <Image />
      
      
       
      
    </div>
    
      
   
    
  );
}

export default App;
