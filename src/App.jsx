import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductContextt from "./context/ProductContext"; //import productconext

function App() {
  const [products, setproducts] = useState([]);
  const [cart,setcart] = useState([])


  //add to cart  
  const buy = (product) => {
    setcart([...cart, product]);
    // console.log(cart);
  }

  const remove = (product) => {
    const newcart = cart.filter((item)=> item.id !== product.id)
    setcart(newcart)
  }
  
  return (
    <>
    {/* wrap conext */}
    <ProductContextt.Provider value={{products, setproducts,cart,buy,remove}}> 
  
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
