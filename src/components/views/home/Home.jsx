import homeStyles from "./homeStyles.css";
import { UserContext } from "../../../contexts/UserProvider";
import { useContext } from "react";
import Card from "./Card";
import Search from "./Search";

const Home = () => {
  const { newUser } = useContext(UserContext);
  return (
    <>
      <p>{newUser.email}</p>
      <h1 className="headingHome">
        Great <span className="colorLetter">$</span>tyle
      </h1>
      <Search />
      <div id="contentDiv">
        <Card />
      </div>
    </>
  );
};

export default Home;
