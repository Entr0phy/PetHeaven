import "./SignIn.css";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
const SignIn = (props) => {
  //function to check if user is validated or not
  const logIn = () => {
    if (!accepted) {
      alert("Incorrect Username or Password");
      return false;
    } else {
      alert("Log In successful");
      props.setState((state) => {
        return !state;
      });
    }
  };

  //setting the initial state for user acceptance and username, password
  const [accepted, setAccepted] = useState(false);
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  // function for data binding of username and password
  const handleChangeUser = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePass = (event) => {
    setPassWord(event.target.value);
  };

  let url = `https://settledrail.backendless.app/api/data/UserAuthentication?where=Username%20%3D%20%27${userName}%27AND%20Password%20%3D%20%27${passWord}%27`;

  //function to validate and check if username and password matches by referring it to the database
  async function sendRequest() {
    await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.text(); // Or `.json()` or one of the others
      })
      .then((data) => {
        const dataType = JSON.parse(data);
        if (dataType.length === 1) {
          setAccepted(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  sendRequest();
  return (
    <div className="signInContainer">
      <h1>Login to Your Account</h1>
      <h4>Login using social networks</h4>
      <div className="socialIcons">
        <IconContext.Provider
          value={{ color: "white", className: "iconsSignInBlue" }}
        >
          <div>
            <FaFacebookF size={20}></FaFacebookF>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "white", className: "iconsSignInLightBlue" }}
        >
          <div>
            <FaTwitter size={20}></FaTwitter>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ color: "white", className: "iconsSignInOrange" }}
        >
          <div>
            <FaGoogle size={20}></FaGoogle>
          </div>
        </IconContext.Provider>
      </div>
      <p>OR</p>
      <form className="userinputContainer">
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={handleChangeUser}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={passWord}
          onChange={handleChangePass}
        ></input>
        <button type="submit" onClick={logIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
