import React, { useEffect, useState,useContext } from "react";
import HashLoader from "react-spinners/HashLoader";
import ProductContextt from "../context/ProductContext"; //import context

const Home = () => {
  const [loading, setloading] = useState(true);

  const { products, setproducts, cart, setcart, buy } = useContext(ProductContextt); //destructure from ProductConext

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const raw = await fetch("https://dummyjson.com/products");
    const data = await raw.json();
    // console.log(data.products);
    setproducts(data.products);
    setloading(false);
  };

  return (
    <div className="lg:w-[70vw] mx-auto grid grid-cols-1 lg:grid-cols-3  gap-10 justify-center items-center mb-10">
      {loading ? (
        <div className="w-[70vw] h-[80vh] flex justify-center items-center">
          <HashLoader color="#36d7b7" size={100} speedMultiplier={1} />
        </div>
      ) : (
        products.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-gray-100 w-[80vw] mx-auto lg:w-[20vw] rounded-md overflow-hidden shadow-md"
            >
              <img
                src={product.thumbnail}
                alt="pic"
                className="rounded-md rounded-bl-none rounded-br-none hover:scale-105 transition-all w-full h-[210px]"
              />
              <div className="p-2">
                <h2 className="font-semibold uppercase">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <div className="flex justify-between my-1 items-center">
                  <span className="font-medium text-gray-700">
                    price: ${product.price}
                  </span>
                  <button onClick={()=>buy(product)} className=" text-black font-semibold hover:scale-105  rounded-md">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
