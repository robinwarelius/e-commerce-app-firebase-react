import { UserContext } from "../../../contexts/UserProvider";
import { useContext } from "react";

const Home = () => {
  const { newUser } = useContext(UserContext);
  return (
    <>
      <p>{newUser.email}</p>
    </>
  );
};

export default Home;
