import cartStyles from "./cartStyles.css";
import emtyImg from "../../../images/empty-cart.png";
import deleteImg from "../../../images/delete.png";
import { useContext, useRef, useState, useEffect } from "react";
import { CartContext } from "../../../contexts/CartProvider";

const Cart = () => {
  const { cart, totalPrice, handlePostCart, removeCart, shipping } =
    useContext(CartContext);
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const personalNumber = useRef();

  if (cart.length === 0) {
    return (
      <>
        <div className="emptyDiv">
          <img className="emtyImg" src={emtyImg} />
        </div>
      </>
    );
  } else {
    let cartDetails = cart.map((product) => {
      return (
        <>
          <div className="productDivCart">
            <p style={{ fontWeight: "bold" }}>
              {product.title}, {product.brand}
            </p>
            <p>Price: {product.price}:-</p>
            <p>Color: {product.color}</p>
            <img
              id="deleteImg"
              src={deleteImg}
              onClick={() => {
                removeCart(product, product.price);
              }}
            />
            <hr className="hrCart"></hr>
          </div>
        </>
      );
    });

    return (
      <>
        <h1 className="headingCart">Cart</h1>
        {cartDetails}
        <p className="inputDivCart" id="totalPriceId">
          Totalprice: {totalPrice}
        </p>
        <div className="inputDivCart">
          <input type="text" placeholder="Firstname" ref={firstName} />
          <input type="text" placeholder="Lastname" ref={lastName} />
          <input type="text" placeholder="Email" ref={email} />
          <input type="text" placeholder="YYYYMMDD-XXXX" ref={personalNumber} />
          <button
            className="cartButton"
            onClick={() => {
              handlePostCart(
                cart,
                firstName.current.value,
                lastName.current.value,
                email.current.value,
                personalNumber.current.value
              );
            }}
          >
            Send Order
          </button>
          <label>{shipping}</label>
        </div>
      </>
    );
  }
};

export default Cart;
