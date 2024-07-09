import { useContext, useState } from "react";
import { CartContext } from "../providers/CartContext";
import { ShippingOptions } from "../constants";
import { TbLetterXSmall } from "react-icons/tb";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <section className="cart-page">
        <div className="cart-header">
          <h4>Cart</h4>
          <div className="cart-stage">
            <div id="c-stage" className="shopping-stage">
              <div className="step-num">
                <p>1</p>
              </div>
              <div className="step-name">
                <p>Shopping cart</p>
              </div>
            </div>
            <div id="c-stage" className="checkout-stage">
              <div className="step-num" id="step-num-two">
                <p>2</p>
              </div>
              <div className="step-name">
                <p>Checkout details</p>
              </div>
            </div>
            <div id="c-stage" className="order-stage">
              <div className="step-num" id="step-num-three">
                <p>3</p>
              </div>
              <div className="step-name" id="step-name-three">
                <p>Order complete</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-body">
          <div className="cart-list">
            <div className="cart-list-header">
              <p>Product</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            <div className="cart-list-products">
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cart.map((product, index) => (
                  <div className="cart-list-product" key={index}>
                    <div className="clp-details">
                      <div className="clp-image">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="clp-info">
                        <h4>{product.name}</h4>
                        <p>Color: black {product.color}</p>
                        <button onClick={() => removeFromCart(product.name)}>
                          <TbLetterXSmall size="24" color="#828282" />
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="clp-quantity">
                      <button
                        className="quantity-btn-1"
                        onClick={() => handleQuantityDecrement()}
                      >
                        -
                      </button>
                      <p>{quantity}</p>
                      <button
                        className="quantity-btn-1"
                        onClick={() => handleQuantityIncrement()}
                      >
                        +
                      </button>
                    </div>
                    <div className="clp-price">
                      <p>{product.price}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="cart-summary">
            <h4>Cart summary</h4>
            <div className="shipping-options">
              {ShippingOptions.map((shipping) => (
                <div className="shipping" key={shipping.option}>
                  <div className="option-select">
                    <input type="radio" aria-label="shipping options" />
                    <p>{shipping.option}</p>
                  </div>
                  <p>{shipping.price}</p>
                </div>
              ))}
            </div>
            <div id="subtotal" className="cart-total">
              <p>Subtotal</p>
              <h5>1669.99</h5>
            </div>
            <div id="total" className="cart-total">
              <p>Total</p>
              <p>$1684.99</p>
            </div>
            <div className="checkout-btn">
              <button>
                <a href="/checkout">Checkout</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="coupon-sect">
        <h4>Have a coupon?</h4>
        <p>Add your code for an instant cart discount</p>
        <div className="coupon-code">
          <input
            type="text"
            aria-label="coupon code"
            placeholder="Coupon code"
          />
          <button>Apply</button>
        </div>
      </div>
    </>
  );
};

export default CartPage;

// import { ShippingOptions } from "../constants";
// import image1 from "../assets/image 1.png";
// import image2 from "../assets/image 2.png";
// import image3 from "../assets/image 3.png";
// import { useState } from "react";

// const CartPage = () => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleQuantityIncrement = () => {
//     setQuantity(quantity + 1);
//   };
//   return (
//     <>
//       <section className="cart-page">
//         <div className="cart-header">
//           <h4>Cart</h4>

//           <div className="cart-stage">
//             <div id="c-stage" className="shopping-stage">
//               <div className="step-num">
//                 <p>1</p>
//               </div>
//               <div className="step-name">
//                 <p>Shopping cart</p>
//               </div>
//             </div>
//             <div id="c-stage" className="checkout-stage">
//               <div className="step-num" id="step-num-two">
//                 <p>2</p>
//               </div>
//               <div className="step-name">
//                 <p>Checkout details</p>
//               </div>
//             </div>
//             <div id="c-stage" className="order-stage">
//               <div className="step-num" id="step-num-three">
//                 <p>3</p>
//               </div>
//               <div className="step-name">
//                 <p>Order complete</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="cart-body">
//           <div className="cart-list">
//             <div className="cart-list-header">
//               <p>Product</p>
//               <p>Quantity</p>
//               <p>Price</p>
//             </div>
//             <div className="cart-list-products">
//               <div className="cart-list-product">
//                 <div className="clp-details">
//                   <div className="clp-image">
//                     <img src={image1} alt="" />
//                   </div>
//                   <div className="clp-info">
//                     <h4>Echo</h4>
//                     <p>Color: Green</p>
//                     <p>
//                       <span>X</span>Remove
//                     </p>
//                   </div>
//                 </div>
//                 <div className="clp-quantity">
//                   <button
//                     className="quantity-btn-1"
//                     onClick={handleQuantityDecrement}
//                   >
//                     -
//                   </button>
//                   <p>{quantity}</p>
//                   <button
//                     className="quantity-btn-1"
//                     onClick={handleQuantityIncrement}
//                   >
//                     +
//                   </button>
//                 </div>
//                 <div className="clp-price">
//                   <p>$500.00</p>
//                 </div>
//               </div>
//               <div className="cart-list-product">
//                 <div className="clp-details">
//                   <div className="clp-image">
//                     <img src={image2} alt="" />
//                   </div>
//                   <div className="clp-info">
//                     <h4>Echo</h4>
//                     <p>Color: Green</p>
//                     <p>
//                       <span>X</span> Remove
//                     </p>
//                   </div>
//                 </div>
//                 <div className="clp-quantity">
//                   <p id="quantity-btn">-</p>
//                   <p>1</p>
//                   <p id="quantity-btn">+</p>
//                 </div>
//                 <div className="clp-price">
//                   <p>$500.00</p>
//                 </div>
//               </div>
//               <div className="cart-list-product">
//                 <div className="clp-details">
//                   <div className="clp-image">
//                     <img src={image3} alt="" />
//                   </div>
//                   <div className="clp-info">
//                     <h4>Echo</h4>
//                     <p>Color: Green</p>
//                     <p>
//                       <span>X</span>Remove
//                     </p>
//                   </div>
//                 </div>
//                 <div className="clp-quantity">
//                   <p>-</p>
//                   <p>1</p>
//                   <p>+</p>
//                 </div>
//                 <div className="clp-price">
//                   <p>$500.00</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="cart-summary">
//             <h4>Cart summary</h4>
//             <div className="shipping-options">
//               {ShippingOptions.map((shipping) => (
//                 <div className="shipping" key={shipping.option}>
//                   <div className="option-select">
//                     <input type="radio" aria-label="shipping options" />
//                     <p>{shipping.option}</p>
//                   </div>
//                   <p>{shipping.price}</p>
//                 </div>
//               ))}
//             </div>
//             <div id="subtotal" className="cart-total">
//               <p>Subtotal</p>
//               <h5>1669.99</h5>
//             </div>
//             <div id="total" className="cart-total">
//               <p>Total</p>
//               <p>$1684.99</p>
//             </div>

//             <div className="checkout-btn">
//               <button>
//                 <a href="/checkout">Checkout</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="coupon-sect">
//         <h4>Have a coupon?</h4>
//         <p>Add your code for an instant cart discount</p>
//         <div className="coupon-code">
//           <input
//             type="text"
//             aria-label="coupon code"
//             placeholder="Coupon code"
//           />
//           <button>Apply</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartPage;
