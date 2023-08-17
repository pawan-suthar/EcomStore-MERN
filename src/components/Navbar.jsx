import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setproducts }) => {
  const [servalue, setservalue] = useState("");

  const SerchProduct = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${servalue}`
    );
    const data = await res.json();
    setproducts(data.products);
  };
  return (
    <nav className="flex flex-col lg:flex-row lg:justify-evenly shadow-md items-center py-3 mb-8">
      <h3 className="font-semibold text-2xl mb-3 lg:mb-0 lg:self-center">
        <Link to="/">Ecommerce Store</Link>
      </h3>
      <div className="flex flex-row items-center justify-center mb-3 lg:mb-0">
        <input
          className="outline-none border-2 px-3 rounded-lg w-[40vw] lg:w-auto hover:border-blue-400"
          type="search"
          name=""
          id=""
          placeholder="Search here"
          onChange={(e) => setservalue(e.target.value)}
        />
        <button
          onClick={SerchProduct}
          className="px-3 py-1 bg-gray-500 hover:bg-gray-900 rounded-md ml-2 text-white"
        >
          Search
        </button>
      </div>
      <ul className="flex flex-col lg:flex-row gap-2 text-xl font-semibold">
        <Link to="/" className="text-black hover:scale-105 transition-all">
          Home
        </Link>
        <Link to="/cart" className="text-black hover:scale-105 transition-all">
          Cart
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
