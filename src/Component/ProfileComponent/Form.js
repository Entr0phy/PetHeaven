import VolunteerForm from "./Forms/VolunteerForm";
import AdoptForm from "./Forms/AdoptForm";
import ReleaseForm from "./Forms/ReleaseForm";
const Form = (props) => {
  return (
    <div className="formContainer">
      {props.formState.volunteer ? (
        <VolunteerForm setFormState={props.setFormState} />
      ) : (
        <></>
      )}
      {props.formState.adopt ? <AdoptForm /> : <></>}
      {props.formState.release ? <ReleaseForm /> : <></>}
    </div>
  );
};

export default Form;
