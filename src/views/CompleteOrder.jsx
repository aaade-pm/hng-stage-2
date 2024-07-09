import image1 from "../assets/image 1.png";

const CompleteOrder = () => {
  return (
    <>
      <section className="complete-order">
        <div className="order-header">
          <h4>Complete!</h4>
          <div className="order-stage">
            <div id="c-stage" className="shopping-stage-2">
              <div className="step-num-2">
                <p>1</p>
              </div>
              <div className="step-name-2">
                <p>Shopping cart</p>
              </div>
            </div>
            <div id="c-stage" className="checkout-stage-4">
              <div className="step-num-3" id="step-num-4">
                <p>2</p>
              </div>
              <div className="step-name-4">
                <p>Checkout details</p>
              </div>
            </div>
            <div id="c-stage" className="order-stage-5">
              <div className="step-num" id="step-num-5">
                <p>3</p>
              </div>
              <div className="step-name-5">
                <p>Order complete</p>
              </div>
            </div>
          </div>
        </div>
        <div className="co-body">
          <div className="co-details">
            <div className="co-confirmation">
              <h4>Thank you!</h4>
              <h4>Your order has been </h4>
              <h4>confirmed.</h4>
            </div>

            <div className="co-images">
              <div className="co-image">
                <div className="co-quantity">
                  <p>1</p>
                </div>
                <img src={image1} alt="" />
              </div>
              <div className="co-image">
                <div className="co-quantity">
                  <p>1</p>
                </div>

                <img src={image1} alt="" />
              </div>
              <div className="co-image">
                <div className="co-quantity">
                  <p>1</p>
                </div>

                <img src={image1} alt="" />
              </div>
            </div>
          </div>
          <div className="co-infos">
            <div className="co-info">
              <p>Order code:</p>
              <h4>#ACEICYNXRF</h4>
            </div>
            <div className="co-info">
              <p>Date:</p>
              <h4>July 8, 2024</h4>
            </div>
            <div className="co-info">
              <p>Total:</p>
              <h4>$1678.00</h4>
            </div>
            <div className="co-info">
              <p>Payment method:</p>
              <h4>Credit Card</h4>
            </div>
          </div>
          <div className="back-to-home">
            <a href="/">
              <button>Back to HomePage</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompleteOrder;
