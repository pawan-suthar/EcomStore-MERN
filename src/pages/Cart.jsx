import React, { useContext } from "react";
import ProductContextt from "../context/ProductContext";

const Cart = () => {
  const { cart,remove } = useContext(ProductContextt);
  return (
    <div>
      <div className="lg:w-[70vw] mx-auto grid grid-cols-1 lg:grid-cols-3  gap-10 justify-center items-center mb-10">
        {cart.length == "" ? (
          <h1 className="text-center justify-center  text-2xl font-semibold lg:w-[80vw] mt-[200px] text-gray-500">Empty cart...</h1>
        ) : (
          cart.map((product) => {
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
                    <button onClick={()=>remove(product)} className=" text-black font-semibold hover:scale-105  rounded-md">
                      remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
