import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductContextt from "./context/ProductContext"; //import productconext

function App() {
  const [products, setproducts] = useState([]);
  return (
    <>
    {/* wrap conext */}
    <ProductContextt.Provider value={{products, setproducts}}> 
  
      <BrowserRouter>
        <Navbar  />
        <Routes>
          <Route
            path="/"
            element={<Home  />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </ProductContextt.Provider>
    </>
  );
}

export default App;
