import cartImg from "../../../images/add-cart.png";
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductProvider";
import { CartContext } from "../../../contexts/CartProvider";
import Search from "../home/Search";

const SearchResult = () => {
  const { searchResult } = useContext(ProductsContext);
  const { addCart } = useContext(CartContext);

  let list = searchResult.map((product) => {
    return (
      <div className="productDiv" id="searchResultDiv">
        <h2>{product.title}</h2>
        <h4>{product.brand}</h4>
        <img className="imgProduct" src={product.url} />
        <p>Price: {product.price}:-</p>
        <p>Material: {product.material}</p>
        <p>Color: {product.color}</p>
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
      <div id="resultDiv">
        <h1 className="headingHome">Search result</h1>
        <Search />
        {list}
      </div>
    </>
  );
};

export default SearchResult;
