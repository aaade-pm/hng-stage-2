import { useContext } from "react";
import { CartContext } from "../providers/CartContext";
import { ShippingOptions } from "../constants";
import { TbLetterXSmall } from "react-icons/tb";

const CartPage = () => {
  const { cart, updateCartQuantity, removeFromCart } = useContext(CartContext);

  return (
    <>
      <section className="cart-page">
        <div className="cart-header">
          <h4 onClick={() => console.table(cart)}>Cart</h4>

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
              <div className="step-name">
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
              {cart.map((product, index) => (
                <div className="cart-list-product" key={index}>
                  <div className="clp-details">
                    <div className="clp-image">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="clp-info">
                      <h4>{product.name}</h4>
                      <p>Color: {product.color}</p>
                      <p onClick={() => removeFromCart(index)}>
                        <span>
                          <TbLetterXSmall />
                        </span>{" "}
                        Remove
                      </p>
                    </div>
                  </div>
                  <div className="clp-quantity">
                    <button
                      className="quantity-btn-1"
                      onClick={() =>
                        updateCartQuantity(
                          index,
                          product.quantity > 1 ? product.quantity - 1 : 1
                        )
                      }
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button
                      className="quantity-btn-1"
                      onClick={() =>
                        updateCartQuantity(index, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="clp-price">
                    <p>${product.price}</p>
                  </div>
                </div>
              ))}
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
              <h5>
                $
                {cart.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )}
              </h5>
            </div>
            <div id="total" className="cart-total">
              <p>Total</p>
              <p>
                $
                {cart.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                ) + 15}
              </p>
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
