import { MdOutlineArrowForwardIos } from "react-icons/md";
import Filter from "../components/Filter";
import Products from "../components/Products";

const ProductPage = () => {
  return (
    <>
      <section className="product-page">
        <p>
          Home <MdOutlineArrowForwardIos size="8" color="#BDBDBD" />
          <span>Product</span>
        </p>

        <div className="hero">
          <Filter />
          <Products />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
