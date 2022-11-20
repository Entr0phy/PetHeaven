import "./Forms.css";
import { useNavigate } from "react-router";
const VolunteerForm = (props) => {
  let navigate = useNavigate();

  return (
    <form className="formContainer">
      <h2>Register as a volunteer</h2>
      <div className="inputContainerRegister">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="DOB "></input>
        <input type="text" placeholder="Contact Number"></input>
      </div>
      <div className="volunteerbtn">
        <button
          onClick={() => {
            console.log("Registered");
            navigate(`/`);
          }}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default VolunteerForm;
