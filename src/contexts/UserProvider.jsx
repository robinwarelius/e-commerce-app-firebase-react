import { useState, useEffect, createContext } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
export const UserContext = createContext();

const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const handleUser = (user) => {
    setNewUser(user);
  };

  return (
    <>
      <UserContext.Provider value={{ users, handleUser, newUser }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
