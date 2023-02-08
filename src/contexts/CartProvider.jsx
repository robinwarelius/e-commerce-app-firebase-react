import { useState, useEffect, createContext } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState("");

  const [totalPrice, setTotalPrice] = useState(null);

  const ordersCollectionRef = collection(db, "orders");

  const addCart = (product, price) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + price);
  };

  const removeCart = (product, price) => {
    const filterProducts = cart.filter((element) => {
      if (element.id !== product.id) {
        return element;
      }
    });

    setCart(filterProducts);
    setTotalPrice(totalPrice - price);
  };

  const handlePostCart = async (
    cart,
    firstName,
    lastName,
    email,
    personalNumber
  ) => {
    setShipping(
      "Your order was successfully placed! The ordernumber will be sent to: " +
        email
    );

    const products = cart.map((product) => {
      return product.title + ", " + product.brand;
    });

    const productsId = cart.map((product) => {
      return product.id;
    });

    await addDoc(ordersCollectionRef, {
      email: email,
      firstName: firstName,
      lastName: lastName,
      personalNumber: personalNumber,
      product: products,
      productID: productsId,
      totalPrice: totalPrice,
    });
  };

  return (
    <>
      <CartContext.Provider
        value={{
          addCart,
          cart,
          handlePostCart,
          totalPrice,
          removeCart,
          shipping,
          setShipping,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
