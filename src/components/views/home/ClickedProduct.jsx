import { ProductsContext } from "../../../contexts/ProductProvider";
import cartImg from "../../../images/add-cart.png";
import Search from "../home/Search";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserProvider";
import { CartContext } from "../../../contexts/CartProvider";

const ClickedProduct = () => {
  const { clickedProduct } = useContext(ProductsContext);
  const { newUser } = useContext(UserContext);
  const { addCart } = useContext(CartContext);

  return (
    <>
      <p>{newUser.email}</p>
      <div>
        <h1 className="headingHome">Great $tyle</h1>
        <Search />
        <div className="productDiv" id="productDivDetails">
          <h2>{clickedProduct.title}</h2>
          <h4>{clickedProduct.brand}</h4>
          <img className="imgProduct" src={clickedProduct.url} />
          <p>Price: {clickedProduct.price}:-</p>
          <p>Material: {clickedProduct.material}</p>
          <p>Color: {clickedProduct.color}</p>
          <Link to="/" className="btn buttonHome">
            Back
          </Link>
          <img
            className="imgCard"
            src={cartImg}
            onClick={() => {
              addCart(clickedProduct, clickedProduct.price);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ClickedProduct;
