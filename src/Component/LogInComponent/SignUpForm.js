import "./SignUpForm.css";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
import axios, { Axios } from "axios";
const SignUpForm = (props) => {
  const close = () => {
    props.setSignUp((state) => {
      return !state;
    });
  };

  //creating a bidirectional link with the values in the box to create an account
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  let url = "https://settledrail.backendless.app/api/data/UserAuthentication";

  const changeUser = (event) => {
    setUser(event.target.value);
  };
  const changePass = (event) => {
    setPass(event.target.value);
  };
  const changeConfirmPass = (event) => {
    setConfirmPass(event.target.value);
  };

  const createUser = () => {
    if (pass !== confirmPass) {
      alert("Password does not match");
    } else {
      axios
        .post(url, {
          Username: user,
          Password: pass,
        })
        .then(function () {
          alert("Account successfully created");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="signUpFormContainer">
      <div className="formContainer">
        <IconContext.Provider value={{ color: "white", className: "xButton" }}>
          <div>
            <FaTimes onClick={close}></FaTimes>
          </div>
        </IconContext.Provider>
        <h2>Sign up and be part of the Pet Heaven Community</h2>
        <form>
          <div className="formDetailContainer">
            <input
              type="text"
              placeholder="Username"
              value={user}
              onChange={changeUser}
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={changePass}
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={changeConfirmPass}
            ></input>
            <input type="text" placeholder="Email address"></input>
          </div>
          <div className="buttons">
            <button onClick={createUser}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
