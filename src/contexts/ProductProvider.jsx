import { useState, useEffect, createContext } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
export const ProductsContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [clickedProduct, setClickedProduct] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);

  const handleDetails = (product) => {
    setClickedProduct(product);
  };

  const handleSearch = (searchInput) => {
    const list = products.filter((product) => {
      if (
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return product;
      }
    });

    setSearchResult(list);
  };

  return (
    <>
      <ProductsContext.Provider
        value={{
          products,
          handleDetails,
          clickedProduct,
          handleSearch,
          searchResult,
        }}
      >
        {props.children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductProvider;
