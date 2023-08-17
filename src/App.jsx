import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [products, setproducts] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar setproducts={setproducts} />
        <Routes>
          <Route
            path="/"
            element={<Home products={products} setproducts={setproducts} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
