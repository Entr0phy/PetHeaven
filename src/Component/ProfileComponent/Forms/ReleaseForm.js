import { useNavigate } from "react-router";
import "./Forms.css";
const ReleaseForm = () => {
  let navigate = useNavigate;
  return (
    <form className="formContainer">
      <h2>Release a Pet</h2>
      <div className="inputContainerRelease">
        <input type="text" placeholder="Breed of Pet"></input>
        <input type="text" placeholder="URL of image of Pet"></input>
        <input type="text" placeholder="NRIC"></input>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Contact Number"></input>
        <textarea placeholder="Reason for release"></textarea>
        <br />
      </div>
      <div className="volunteerbtn">
        <button
          onClick={() => {
            alert("Requested Submitted");
            navigate(`/`);
          }}
        >
          Release
        </button>
      </div>
    </form>
  );
};

export default ReleaseForm;
