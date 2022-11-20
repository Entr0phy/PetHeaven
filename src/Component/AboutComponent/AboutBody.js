import "./AboutBody.css";
import imageVolunteer from "../Images/petVolunteer.png";
import imageDog from "../Images/adoptDog.png";
import imageCat from "../Images/catBye.jpeg";
import { useNavigate } from "react-router";

const AboutBody = (props) => {
  //variable to be used to navigate to other part of the site
  let navigate = useNavigate();

  //variable to check the current state if the user is logged in or not
  const isLoggedIn = props.checkState;

  //functions that redirects user to either the expected or log in page depending if
  //they are logged in or not
  const volunteerButton = () => {
    let path = isLoggedIn ? `/Gallery` : `/LogIn`;
    navigate(path);
  };

  const adoptButton = () => {
    let path = isLoggedIn ? "/Gallery" : `/LogIn`;
    navigate(path);
  };

  const releaseButton = () => {
    let path = isLoggedIn ? "/Gallery" : `/LogIn`;
    navigate(path);
  };

  return (
    <div className="aboutBodyContainer">
      {/* first row of elements in the grid layour */}
      <div className="aboutBodyImageContainer">
        <img src={imageVolunteer}></img>
      </div>

      <div className="explanationContainer">
        <h2>We are volunteers</h2>
        <p>
          We are a group of charitable organisation consisting of volunteers
          that looks out and care for abondon pets particularly cats and dogs.
          We provide temporary shelter for our paw friends untill we managed to
          link them up with their new owners! We are always looking out for new
          volunteers to join us to care for our adorable paw friends from taking
          care of our adorable friends to the administrative paper work for
          finding new owners we are always in need of volunteers to help our
          small friends out!
          <br />
          <br />
          Click on the button below to register as a volunteer
          <br />
          <br />
          <button onClick={volunteerButton}>Join Now</button>
        </p>
      </div>

      {/* second row of elements in the gird layout */}
      <div className="explanationContainer">
        <h2>Help give them a home</h2>
        <p>
          You can call us the cupid of pet matching! We are always seeking out
          and finding potential new owners for all of our adorable paw friends
          that has been abandon by their previous owners. If you feel that you
          are up to task and is ready to provide and comfortable and lovely home
          for our little friends, look no further and submit an online form to
          register your interest to provide a shelter for them!
          <br />
          <br />
          Click on the button below to submit a request to give them a home!
          <br />
          <br />
          <button onClick={adoptButton}>Adopt Now</button>
        </p>
      </div>

      <div className="aboutBodyImageContainer">
        <img src={imageDog}></img>
      </div>

      {/* third row of elements in the grid layout */}
      <div className="aboutBodyImageContainer">
        <img src={imageCat}></img>
      </div>

      <div className="explanationContainer">
        <h2>Say goodbye</h2>
        <p>
          Life is always filled with many struggles and there will be times
          where we realised hey this is not working out. We understand that
          everyone has their own struggles which is why we provide an option for
          pet owners to release their pets into the society in hopes of allowing
          the pets to seek a better home for them.
          <br />
          <br />
          Click on the button below to release your pet!
          <br />
          <br />
          <button onClick={releaseButton}>Relase Now</button>
        </p>
      </div>
    </div>
  );
};

export default AboutBody;
