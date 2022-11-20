import ProfileElement from "./ProfileComponent/ProfileElement";
import Form from "./ProfileComponent/Form";
import { useState } from "react";
const Profile = (props) => {
  //setting state for the form pop up functionality
  const [formState, setFormState] = useState({
    volunteer: false,
    adopt: false,
    release: false,
  });

  //function to sign out
  const setState = () => {
    alert("Sign out successful");
    props.setState((state) => {
      return !state;
    });
  };
  return (
    <div className="profileContainer">
      <h1 className="topHeader">My Profile</h1>
      <ProfileElement setFormState={setFormState}></ProfileElement>

      <div className="rainbowBg">
        <Form formState={formState} setFormState={setFormState} />
      </div>

      <div className="signOutBtn">
        <button onClick={setState}>Sign Out</button>
      </div>
    </div>
  );
};

export default Profile;
