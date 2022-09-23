import React from "react";
import { useCart } from "react-use-cart";

import data from "./data";

export default function Items() {
  return (
    <div className="flex justify-center">
      {data.productData.map((item, index) => {
        return (
          <ItemCard
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            key={index}
            item={item}
          />
        );
      })}
    </div>
  );
}

function ItemCard(props) {
  const { addItem } = useCart();
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-gray-500 max-w-sm m-5 content-evenly">
      <img className="rounded-t-lg h-20 mx-auto" src={props.img} alt="" />
      <div>
        <h5 className="text-white text-xl font-medium mb-2">{props.title}</h5>
        <p className="text-blue-300 mb-4">Rs {props.price}</p>
        <p className="text-gray-300 mb-4">{props.desc}</p>
        <button
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => addItem(props.item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
