import "./SignUp.css";
const SignUp = (props) => {
  const changeSignUp = () => {
    props.setSignUp((state) => {
      return !state;
    });
  };
  return (
    <div className="signUpContainer">
      <h1>New Here?</h1>
      <p>
        Sign up to join our fun <br /> and loving pet community!{" "}
      </p>
      <button onClick={changeSignUp} disabled={props.signUp}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
