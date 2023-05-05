import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index'
import About from './components/about'
import Contact from './components/contact'
import Home from './components/home'

export default function App() {
  return (
    <div className="App">
       <BrowserRouter>
{/* added routes */}
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />}/>
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}
