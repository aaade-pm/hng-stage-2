import { useContext } from "react";
import { ProductsList } from "../constants";
import { CartContext } from "../providers/CartContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  BsFillGrid3X3GapFill,
  BsGridFill,
  BsFillGrid1X2Fill,
  BsFillGrid3X2GapFill,
} from "react-icons/bs";
import { PiHeart } from "react-icons/pi";
import { RiStarSFill } from "react-icons/ri";

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <section className="product-list">
        <div className="product-header">
          <p>Headsets</p>
          <div className="sort">
            <p>
              Sort by <MdKeyboardArrowDown size="12" />
            </p>
            <div className="sort-icons">
              <div className="s-icon">
                <BsFillGrid3X3GapFill size="12" />
              </div>
              <div className="s-icon">
                <BsGridFill size="12" />
              </div>
              <div className="s-icon">
                <BsFillGrid1X2Fill size="12" />
              </div>
              <div className="s-icon-2">
                <BsFillGrid3X2GapFill size="12" />
              </div>
            </div>
          </div>
        </div>

        <div className="product-listing">
          <div className="product-card">
            {ProductsList.map((product, index) => (
              <div className="product" key={index}>
                <div className="product-image">
                  <div className="product-image-hover">
                    <div className="like-product">
                      <PiHeart />
                    </div>
                    <div className="add-to-cart">
                      <button onClick={() => addToCart(product)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <img src={product.image} alt="headset image" />
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    <div className="rating">
                      <RiStarSFill color="#FFD700" />
                    </div>
                    <div className="rating">
                      <RiStarSFill color="#FFD700" />
                    </div>
                    <div className="rating">
                      <RiStarSFill color="#FFD700" />
                    </div>
                    <div className="rating">
                      <RiStarSFill color="#FFD700" />
                    </div>
                    <div className="rating">
                      <RiStarSFill color="#FFD700" />
                    </div>
                  </div>
                  <h5>{product.name}</h5>
                  <h5>{product.price}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="show-more-button">
          <button>Show More</button>
        </div>
      </section>
    </>
  );
};

export default Products;
