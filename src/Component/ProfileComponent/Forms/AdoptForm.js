import { useNavigate } from "react-router";
import "./Forms.css";
const AdoptForm = () => {
  let navigate = useNavigate();
  return (
    <form className="formContainer">
      <h2>Adopt a Pet</h2>
      <div className="inputContainerAdopt">
        <input type="text" placeholder="UID of Pet"></input>
        <input type="text" placeholder="NRIC"></input>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="text" placeholder="Contact Number"></input>
        <textarea placeholder="Reason for adoption"></textarea>
        <br />
      </div>
      <div className="volunteerbtn">
        <button
          onClick={() => {
            alert("Requested Submitted");
            navigate(`/`);
          }}
        >
          Adopt
        </button>
      </div>
    </form>
  );
};

export default AdoptForm;
