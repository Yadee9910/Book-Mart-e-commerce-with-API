import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import Orders from './pages/Orders';
import Store from './pages/Store';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EmailVerification from './pages/EmailVerification';
import ResetPassword from './pages/ResetPassword';
import Product from './pages/Product';
import VerifyEmail from './pages/VerifyEmail';
<<<<<<< HEAD
import ForgotPassword from './pages/ForgotPassword';
=======
import Checkout from './pages/CheckOut';
>>>>>>> 4e8aceb8a1036ccfbbc16335fa5b4c7d898899d1


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<WishList />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/aboutUs" element={<About />}/>
        <Route path="/contactUs" element={<Contact />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/emailverification" element={<EmailVerification />}/>
        <Route path="/resetpassword" element={<ResetPassword />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/verifyemail" element={<VerifyEmail />}/>
<<<<<<< HEAD
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
=======
        <Route path="/checkout" element={<Checkout />}/>
>>>>>>> 4e8aceb8a1036ccfbbc16335fa5b4c7d898899d1
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
