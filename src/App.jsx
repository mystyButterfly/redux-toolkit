import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from 'react'
import List from './components/List'
import Cart from './components/Cart'
import './App.css'
import { useSelector } from "react-redux";

function App() {
  const amount = useSelector((state)=>state.cart.items)
  return (
    <Router basename="/redux-toolkit">
      <nav>
        <Link to="/">Home</Link>
        <Link to="cart">Cart {amount?.length>0&&amount?.length}</Link>
      </nav>
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  )
}

export default App
