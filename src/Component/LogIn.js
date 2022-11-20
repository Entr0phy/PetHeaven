import SignIn from "./LogInComponent/SignIn";
import SignUp from "./LogInComponent/SignUp";
import SignUpForm from "./LogInComponent/SignUpForm";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
const LogIn = (props) => {
  let navigate = useNavigate;
  const [signUp, setSignUp] = useState(false);

  return (
    <div>
      <div className="logInContainer">
        <SignIn checkState={props.checkState} setState={props.setState} />
        <SignUp signUp={signUp} setSignUp={setSignUp} />
      </div>
      {signUp ? <SignUpForm setSignUp={setSignUp} /> : <></>}
    </div>
  );
};

export default LogIn;
