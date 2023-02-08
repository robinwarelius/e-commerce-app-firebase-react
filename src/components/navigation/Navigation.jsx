import NavigationCss from "./navigation.css";
import HomeImg from "../../images/home.png";
import ChatImg from "../../images/chat.png";
import LoginImg from "../../images/log-in.png";
import CartImg from "../../images/shopping-cart.png";
import RegisterImg from "../../images/register.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav class="border">
        <div className="navDiv">
          <ul>
            <span className="hovertext" data-hover="Home">
              <li>
                <NavLink to="/">
                  {" "}
                  <img className="image-nav" src={HomeImg} />
                </NavLink>
              </li>
            </span>

            <span className="hovertext" data-hover="Contact">
              <li>
                <NavLink to="/contact">
                  {" "}
                  <img className="image-nav" src={ChatImg} />{" "}
                </NavLink>
              </li>
            </span>

            <span className="hovertext" data-hover="Login">
              <li>
                <NavLink to="/login">
                  {" "}
                  <img className="image-nav" src={LoginImg} />{" "}
                </NavLink>
              </li>
            </span>

            <span className="hovertext" data-hover="Register">
              <li>
                <NavLink to="/register">
                  <img className="image-nav" src={RegisterImg} />
                </NavLink>
              </li>
            </span>

            <span className="hovertext" data-hover="Cart">
              <li>
                <NavLink to="/cart">
                  {" "}
                  <img className="image-nav" src={CartImg} />{" "}
                </NavLink>
              </li>
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
