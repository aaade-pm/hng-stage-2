import { Prices } from "../constants";

const Filter = () => {
  return (
    <>
      <section className="filter">
        <h3>Filter</h3>
        <div className="categories">
          <h4>CATEGORIES</h4>
          <p>All Sound Systems </p>
          <p> Accessories</p>
          <p> Earbuds</p>
          <p id="headset">Headsets </p>
          <p>Speakers </p>
          <p>Sound bars </p>
        </div>

        <div className="prices">
          <h4>PRICES</h4>
          <>
            {Prices.map((price, index) => (
              <div className="price-range" key={index}>
                <p>{price}</p>
                <input type="checkbox" aria-label="price range select" />
              </div>
            ))}
          </>
        </div>
      </section>
    </>
  );
};

export default Filter;
