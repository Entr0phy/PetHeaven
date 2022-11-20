import "./FrontPage.css";
import { useNavigate } from "react-router";
const FrontPage = (props) => {
  let navigate = useNavigate();
  const isSingedIn = props.checkState;
  //function to redicrect to a new page
  const routeChange = () => {
    let path = isSingedIn ? `/Gallery` : `/LogIn`;
    navigate(path);
  };
  const test = props.checkState;
  return (
    <div className="frontPage">
      <h4>Welcome to Pet Heaven</h4>
      <h2>Give Pets a second home</h2>

      <div className="adobtNow">
        <button onClick={routeChange}>Adopt Now</button>
      </div>

      {/* /*</div><{ h2>{test ? "true" : "false"} </h2>
      <button
        onClick={() =>
          props.stateChanger((state) => {
            return !state;
          })
        }
      />} */}
    </div>
  );
};

export default FrontPage;
