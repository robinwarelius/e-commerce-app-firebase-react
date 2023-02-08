import { createContext } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
export const RegistrationContext = createContext();

const RegistrationProvider = (props) => {
  const usersCollectionRef = collection(db, "users");

  const registerUser = async (
    email,
    firstname,
    lastname,
    password,
    personalNumber
  ) => {
    await addDoc(usersCollectionRef, {
      email: email,
      firstName: firstname,
      lastName: lastname,
      password: password,
      personalNumber: personalNumber,
    });
  };

  return (
    <>
      <RegistrationContext.Provider value={{ registerUser }}>
        {props.children}
      </RegistrationContext.Provider>
    </>
  );
};

export default RegistrationProvider;
