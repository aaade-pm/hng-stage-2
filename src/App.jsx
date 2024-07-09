import React, { Suspense } from "react";
import { CartProvider } from "./providers/CartContext";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./views/HomePage"));
const CartPage = React.lazy(() => import("./views/CartPage"));
const CheckoutPage = React.lazy(() => import("./views/CheckoutPage"));
const CompleteOrder = React.lazy(() => import("./views/CompleteOrder"));

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order" element={<CompleteOrder />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
