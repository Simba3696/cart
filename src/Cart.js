import { Fragment } from "react";
import { useCart } from "react-use-cart";

export default function Cart() {
  const {
    isEmpty,
    totalItems,
    items,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return (
      <h1 className="text-center font-bold text-2xl">Your Cart is Empty!</h1>
    );
  }
  return (
    <div>
      <div className="row justify-center">
        <div className="col-12">
          <h5 className="font-bold text-xl">
            Cart ({totalUniqueItems}) Total Items: ({totalItems})
          </h5>
          <div className="table w-full">
            <tbody>
              {items.map((item, index) => {
                return (
                  <Fragment>
                    <tr key={index} className="space-y-4 text-justify">
                      <td>
                        <img src={item.img} className="ml-4 h-20" alt="" />
                      </td>
                      <td className="font-medium">{item.title}</td>
                      <td className="font-medium">{item.price}</td>
                      <td className="font-medium">
                        Quantity ({item.quantity})
                      </td>
                      <button
                        className="bg-blue-200 hover:bg-blue-500 py-2 px-4 rounded ml-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="bg-blue-200 hover:bg-blue-500 py-2 px-4 rounded ml-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </tr>
                    {item.minQuantity > item.quantity ? (
                      <tr>
                        <span className="text-red-300">
                          Minimum Quantity of {item.minQuantity} is required!
                        </span>
                      </tr>
                    ) : null}
                    {item.maxQuantity < item.quantity ? (
                      <tr>
                        <span className="text-red-300">
                          Maximum Quantity of {item.maxQuantity} can be
                          purchased!
                        </span>
                      </tr>
                    ) : null}
                  </Fragment>
                );
              })}
            </tbody>
          </div>
        </div>
        <div className="mt-2 font-medium">
          <span className="p-2 mt-4">Enter Promo Code:</span>
          <input
            className="border-solid border-2 border-gray-200 rounded px-2"
            type="text"
          ></input>
          <button className="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded ml-2">
            Apply
          </button>
        </div>
        <div className="float-right">
          <div>
            <div className="font-bold text-3xl py-4 pr-2">
              Total Price: {cartTotal}
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => emptyCart()}
            >
              Clear Cart
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
