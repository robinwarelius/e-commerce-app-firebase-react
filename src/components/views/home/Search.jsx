import homeStyles from "./homeStyles.css";
import searchImg from "../../../images/search.png";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../contexts/ProductProvider";

const Search = () => {
  const inputSearch = useRef();
  const { handleSearch } = useContext(ProductsContext);

  return (
    <>
      <div className="searchDiv">
        <input
          placeholder="search on product..."
          className="searchInput"
          type="text"
          ref={inputSearch}
        />
        <Link src={searchImg} to="/search">
          <img
            className="imgCard"
            src={searchImg}
            onClick={() => {
              handleSearch(inputSearch.current.value);
            }}
          />
        </Link>
      </div>
    </>
  );
};

export default Search;

{
}
