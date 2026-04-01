import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (product) => {
    const alreadyExists = cart.some((item) => item.id === product.id);

    if (alreadyExists) {
      toast.warning(`${product.name} is already in your cart`);
      return;
    }

    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemoveFromCart = (productId) => {
    const removedProduct = cart.find((item) => item.id === productId);

    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));

    if (removedProduct) {
      toast.info(`${removedProduct.name} removed from cart`);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty");
      return;
    }

    setCart([]);
    toast.success("Proceeding to checkout. Cart cleared successfully");
    setActiveTab("products");
  };

  return (
    <div className="bg-base-100 pt-20 text-base-content">
      <Navbar cartCount={cart.length} setActiveTab={setActiveTab} />
      <Hero />
      <Stats />

      {activeTab === "products" ? (
        <Products
          cart={cart}
          cartCount={cart.length}
          setActiveTab={setActiveTab}
          onAddToCart={handleAddToCart}
        />
      ) : (
        <Cart
          cart={cart}
          setActiveTab={setActiveTab}
          onRemoveFromCart={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      )}

      <Steps />
      <Pricing />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}

export default App;