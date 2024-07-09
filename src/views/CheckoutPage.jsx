import image1 from "../assets/image 1.png";
// import image2 from "../assets/image 2.png";
// import image3 from "../assets/image 3.png";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const CheckoutPage = () => {
  return (
    <>
      <section className="cart-page">
        <div className="cart-header">
          <h4>Check Out</h4>

          <div className="cart-stage">
            <div id="c-stage" className="shopping-stage-2">
              <div id="step-num-one" className="step-num-2">
                <p>1</p>
              </div>
              <div id="step-name-one" className="step-name-2">
                <p>Shopping cart</p>
              </div>
            </div>
            <div id="c-stage" className="checkout-stage-3">
              <div className="step-num-3" id="step-num-3">
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

        <div className="checkout-body">
          <div className="checkout-form">
            <div className="contact-form">
              <h4>Contact information</h4>

              <div className="contact-names">
                <div id="contact" className="contact-first-name">
                  <label htmlFor="first-name">FIRST NAME</label>
                  <input
                    type="text"
                    aria-label="first name"
                    placeholder="First name"
                  />
                </div>
                <div id="contact" className="contact-last-name">
                  <label htmlFor="last-name">LAST NAME</label>
                  <input
                    type="text"
                    aria-label="last name"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div id="contact" className="contact-phone-number">
                <label htmlFor="phone-number">PHONE NUMBER</label>
                <input
                  type="text"
                  aria-label="phone number"
                  placeholder="Phone number"
                />
              </div>
              <div id="contact" className="contact-email">
                <label htmlFor="email">EMAIL</label>
                <input type="email" aria-label="email" placeholder="Email" />
              </div>
            </div>
            <div className="contact-form">
              <h4>Shipping Address</h4>
              <div id="contact">
                <label htmlFor="address">STREET ADDRESS</label>
                <input
                  type="text"
                  aria-label="street address"
                  placeholder="Street address"
                />
              </div>
              <div id="contact" className="contact-city">
                <label htmlFor="city">COUNTRY</label>
                <input type="text" aria-label="country" placeholder="Country" />
              </div>
              <div id="contact" className="contact-country">
                <label htmlFor="town/city">TOWN/CITY</label>
                <input
                  type="text"
                  aria-label="town/city"
                  placeholder="Town/City"
                />
              </div>
              <div className="contact-names">
                <div id="contact" className="contact-first-name">
                  <label htmlFor="state">STATE</label>
                  <input type="text" aria-label="state" placeholder="State" />
                </div>
                <div id="contact" className="contact-last-name">
                  <label htmlFor="zip-code">ZIP CODE</label>
                  <input
                    type="text"
                    aria-label="zip code"
                    placeholder="Zip code"
                  />
                </div>
              </div>

              <div className="diff-billing">
                <input type="checkbox" aria-label="check" />
                <label htmlFor="diff-billing">
                  Use a different billing address (optional)
                </label>
              </div>
            </div>
            <div className="contact-form">
              <h4>Payment method</h4>
              <div id="pay-by-credit" className="pay-by">
                <div className="select-payment">
                  <input type="radio" aria-label="check" />
                  <label htmlFor="credit-card">Pay by Credit Card</label>
                </div>
                <FaRegMoneyBillAlt />
              </div>
              <div className="pay-by">
                <div className="select-payment">
                  <input type="radio" aria-label="check" />
                  <label htmlFor="transfer">Pay by Transfer</label>
                </div>
              </div>
              <div id="contact" className="contact-country">
                <label htmlFor="card number">CARD NUMBER</label>
                <input
                  type="text"
                  aria-label="card number"
                  placeholder="Card number"
                />
              </div>
              <div className="contact-names">
                <div id="contact" className="contact-first-name">
                  <label htmlFor="state">EXPIRATION DATE</label>
                  <input
                    type="text"
                    aria-label="Expiration date"
                    placeholder="MM/YY"
                  />
                </div>
                <div id="contact" className="contact-last-name">
                  <label htmlFor="cvc-code">CVC</label>
                  <input
                    type="text"
                    aria-label="cvc code"
                    placeholder="Cvc code"
                  />
                </div>
              </div>
            </div>

            <div className="place-order-btn">
              <a href="/order">
                <button>Place order</button>
              </a>
            </div>
          </div>
          <div className="order-summary">
            <h4>Cart summary</h4>
            <div className="order-products">
              <div className="order-product">
                <div className="order-details">
                  <div className="order-image">
                    <img src={image1} alt="" />
                  </div>
                  <div className="order-info">
                    <h4>Echo</h4>
                    <p>Color: Green</p>
                    <div className="order-quantity">
                      <p>-</p>
                      <p>1</p>
                      <p>+</p>
                    </div>
                  </div>
                </div>
                <div className="order-price">
                  <p>$500.00</p>
                </div>
              </div>
              <div className="order-product">
                <div className="order-details">
                  <div className="order-image">
                    <img src={image1} alt="" />
                  </div>
                  <div className="order-info">
                    <h4>Echo</h4>
                    <p>Color: Green</p>
                    <div className="order-quantity">
                      <p>-</p>
                      <p>1</p>
                      <p>+</p>
                    </div>
                  </div>
                </div>
                <div className="order-price">
                  <p>$500.00</p>
                </div>
              </div>
              <div className="order-product">
                <div className="order-details">
                  <div className="order-image">
                    <img src={image1} alt="" />
                  </div>
                  <div className="order-info">
                    <h4>Echo</h4>
                    <p>Color: Green</p>
                    <div className="order-quantity">
                      <p>-</p>
                      <p>1</p>
                      <p>+</p>
                    </div>
                  </div>
                </div>
                <div className="order-price">
                  <p>$500.00</p>
                </div>
              </div>
            </div>
            <div className="order-coupon">
              <div className="order-coupon-input">
                <input
                  type="text"
                  aria-label="coupon code"
                  placeholder="Enter coupon code"
                />
                <button>Apply</button>
              </div>
              <h4>Have a coupon?</h4>
              <p>Add your code for an instant cart discount</p>
            </div>
            <div className="order-total">
              <div className="order-total-info">
                <p>Shipping</p>
                <h4>Express shipping</h4>
              </div>

              <div className="order-total-info">
                <p>Subtotal</p>
                <h4>$1500.00</h4>
              </div>
              <div className="order-total-info">
                <p>Total</p>
                <h4>$1500.00</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
