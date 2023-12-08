import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from "./pages/landing.js";
import Home from "./pages/home.js";
import Cart from "./pages/cart.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;