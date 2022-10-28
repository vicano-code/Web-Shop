import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Contact from './components/Contact';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <h4 id="info">Note that this dummy website is still under construction</h4>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<Product />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
