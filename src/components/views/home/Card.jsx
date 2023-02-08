import homeStyles from "./homeStyles.css";
import cartImg from "../../../images/add-cart.png";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../contexts/ProductProvider";
import { CartContext } from "../../../contexts/CartProvider";
import { useContext } from "react";

const Card = () => {
  const { products, handleDetails, color } = useContext(ProductsContext);
  const { addCart } = useContext(CartContext);

  let list = products.map((product) => {
    return (
      <div className="productDiv">
        <h2>{product.title}</h2>
        <h4>{product.brand}</h4>
        <img className="imgProduct" src={product.url} />
        <p>Price: {product.price}:-</p>
        <Link
          onClick={() => {
            handleDetails(product);
          }}
          to="/product"
          className="btn buttonHome"
        >
          Details
        </Link>
        <img
          className="imgCard"
          src={cartImg}
          onClick={() => {
            addCart(product, product.price);
          }}
        />
      </div>
    );
  });

  return (
    <>
      <div className="cardDiv">{list}</div>
      <p>{color}</p>
    </>
  );
};

export default Card;
