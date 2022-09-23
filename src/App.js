import { CartProvider } from "react-use-cart";

import Cart from "./Cart";
import Header from "./Header";
import Items from "./Items";

import "./App.css";

function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <Items />
        <hr />
        <div className="mt-2"></div>
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
