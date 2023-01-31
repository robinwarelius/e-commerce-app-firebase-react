import { Route, Routes } from "react-router-dom";
import Contact from "../views/contact/Contact";
import Cart from "../views/cart/Cart";
import Home from "../views/home/Home";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import UserProvider from "../../contexts/UserProvider";

const Main = () => {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserProvider>
    </>
  );
};

export default Main;
