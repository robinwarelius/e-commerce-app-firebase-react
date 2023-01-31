import { UserContext } from "../../../contexts/UserProvider";
import { useContext, useState, useRef } from "react";

const CheckLogin = () => {
  const { users, handleUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [result, setResult] = useState("");
  const email = useRef();
  const password = useRef();

  const checkInput = () => {
    const newEmail = email.current.value;
    const newPassword = password.current.value;

    users.map((user) => {
      if (user.email === newEmail && user.password === newPassword) {
        setUserName(newEmail);
        handleUser(user);
      }
    });

    let result = users.filter((user) => {
      if (user.email === newEmail && user.password === newPassword) {
        return "succed";
      }
    });

    if (result.length === 0) {
      setResult("Login faild!");
    } else {
      setResult("Login successful!");
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <input type="text" placeholder="Email..." ref={email} />
        <input type="password" placeholder="Password..." ref={password} />
        <button onClick={checkInput}>Login</button>
        <label>
          {result} {userName}
        </label>
      </div>
    </>
  );
};

export default CheckLogin;
