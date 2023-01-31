import registerStyles from "./registerStyles.css";
import { UserContext } from "../../../contexts/UserProvider";
import { useContext } from "react";
import { useRef, useState } from "react";

const Register = () => {
  const [result, setResult] = useState("");
  const { users } = useContext(UserContext);
  const firstname = useRef("");
  const lastname = useRef("");
  const personalNumber = useRef("");
  const email = useRef("");
  const password01 = useRef("");
  const password02 = useRef("");

  const handleInput = () => {
    const newFirstname = firstname.current.value;
    const newLastname = lastname.current.value;
    const newPersonalNumber = personalNumber.current.value;
    const newEmail = email.current.value;
    const newPassword01 = password01.current.value;
    const newPassword02 = password02.current.value;

    let result = users.filter((user) => {
      if (user.email === newEmail) {
        return "Fail";
      }
    });

    if (
      result.length === 0 &&
      newPassword01 === newPassword02 &&
      newPassword01 != "" &&
      newPassword02 != "" &&
      newFirstname != "" &&
      newLastname != "" &&
      newPersonalNumber != "" &&
      newPersonalNumber.length === 10
    ) {
      setResult("Registration successful!");
      // Skicka in result till RegistrationProvider metoden...
    } else {
      setResult("Registration faild! Try again...");
    }
  };

  return (
    <>
      <div className="result-div">
        <h2>Register Account</h2>
        <hr />
        <br></br>
        <label>Firstname</label>
        <br></br>
        <input type="text" ref={firstname} />
        <br></br>
        <label>Lastname</label>
        <br></br>
        <input type="text" ref={lastname} />
        <br></br>
        <label>Personalnumber</label>
        <br></br>
        <input type="text" placeholder="YYYYMMDD-XXXX" ref={personalNumber} />
        <br></br>
        <label>Email</label>
        <br></br>
        <input type="text" ref={email} />
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="text" ref={password01} />
        <br></br>
        <label>Repeat password</label>
        <br></br>
        <input type="text" ref={password02} />
        <br></br>
        <button onClick={handleInput}>Submit</button>
        <br></br>
        <label>{result}</label>
      </div>
    </>
  );
};

export default Register;
