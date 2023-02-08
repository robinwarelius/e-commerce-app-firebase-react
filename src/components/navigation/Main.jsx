import { Route, Routes } from "react-router-dom";
import Contact from "../views/contact/Contact";
import Cart from "../views/cart/Cart";
import Home from "../views/home/Home";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import ClickedProduct from "../views/home/ClickedProduct";
import SearchResult from "../views/home/SearchResult";
import UserProvider from "../../contexts/UserProvider";
import RegistrationProvider from "../../contexts/RegistrationProvider";
import ProductProvider from "../../contexts/ProductProvider";
import CartProvider from "../../contexts/CartProvider";

const Main = () => {
  return (
    <>
      <CartProvider>
        <ProductProvider>
          <RegistrationProvider>
            <UserProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product" element={<ClickedProduct />} />
                <Route path="/search" element={<SearchResult />} />
              </Routes>
            </UserProvider>
          </RegistrationProvider>
        </ProductProvider>
      </CartProvider>
    </>
  );
};

export default Main;
