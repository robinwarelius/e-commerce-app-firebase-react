import registerStyles from "./registerStyles.css";
import homeImg from "../../../images/home.png";
import { UserContext } from "../../../contexts/UserProvider";
import { RegistrationContext } from "../../../contexts/RegistrationProvider";
import { useRef, useState, useContext } from "react";

const Register = () => {
  const { users } = useContext(UserContext);
  const { registerUser } = useContext(RegistrationContext);
  const [hideButton, setHideButton] = useState("hidden");
  const [result, setResult] = useState("");
  const firstname = useRef("");
  const lastname = useRef("");
  const personalNumber = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  const handleInput = () => {
    const newFirstname = firstname.current.value;
    const newLastname = lastname.current.value;
    const newPersonalNumber = personalNumber.current.value;
    const newEmail = email.current.value;
    const newPassword = password.current.value;
    const newConfirmPassword = confirmPassword.current.value;

    let result = users.filter((user) => {
      if (user.email === newEmail) {
        return "succed";
      }
    });

    if (
      result.length === 0 &&
      newPassword === newConfirmPassword &&
      newPassword !== "" &&
      newConfirmPassword !== "" &&
      newFirstname !== "" &&
      newLastname !== "" &&
      newPersonalNumber !== ""
    ) {
      setResult("Registration successful!");
      setHideButton("");
      registerUser(
        newEmail,
        newFirstname,
        newLastname,
        newPassword,
        newPersonalNumber
      );
    } else {
      setResult("Registration faild! Try again...");
    }
  };

  return (
    <>
      <div className="registerDiv border">
        <h2 className="headingRegister">Register Account</h2>

        <input
          placeholder="Firstname"
          className="registerInput"
          type="text"
          ref={firstname}
        />

        <input
          placeholder="Lastname"
          className="registerInput"
          type="text"
          ref={lastname}
        />

        <input
          className="registerInput"
          type="text"
          placeholder="YYYYMMDD-XXXX"
          ref={personalNumber}
        />

        <input
          placeholder="Email"
          className="registerInput"
          type="text"
          ref={email}
        />

        <input
          placeholder="Password"
          className="registerInput"
          type="text"
          ref={password}
        />

        <input
          placeholder="Confirm password"
          className="registerInput"
          type="text"
          ref={confirmPassword}
        />
        <button className="registerButton" onClick={handleInput}>
          Submit
        </button>
        <br></br>
        <label className="registerLabel">{result}</label>
        <br></br>
        <img
          className="registerImg"
          src={homeImg}
          hidden={hideButton}
          onClick={() => {
            window.location.reload();
          }}
        />
      </div>
    </>
  );
};

export default Register;
