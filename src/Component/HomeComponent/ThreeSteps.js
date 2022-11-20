import "./ThreeSteps.css";
import { GiShakingHands, GiDogHouse, GiCat } from "react-icons/gi";
import { IconContext } from "react-icons";
const ThreeSteps = () => {
  return (
    <div className="threeStepsContainer">
      <div className="elementContainer">
        <div className="elementHeader">
          <div className="icon">
            <IconContext.Provider
              value={{ color: "white", className: "icons" }}
            >
              <div>
                <GiShakingHands size={30}></GiShakingHands>
              </div>
            </IconContext.Provider>
            <h2>Join</h2>
          </div>
        </div>
        <div className="elementDesc">
          <p>
            Join us as a Pet Heaven ambassador, become part of the pet loving
            community that cares for the welfare of abandon pets.
          </p>
        </div>
      </div>

      <div className="elementContainer">
        <div className="elementHeader">
          <div className="icon">
            <IconContext.Provider
              value={{ color: "white", className: "icons" }}
            >
              <div>
                <GiDogHouse size={30}></GiDogHouse>
              </div>
            </IconContext.Provider>
            <h2>Adopt</h2>
          </div>
        </div>
        <div className="elementDesc">
          <p>
            Help give the abandon pets a second home, we have a range of abandon
            pets available for adoption
          </p>
        </div>
      </div>
      <div className="elementContainer">
        <div className="elementHeader">
          <div className="icon">
            <IconContext.Provider
              value={{ color: "white", className: "icons" }}
            >
              <div>
                <GiCat size={30}></GiCat>
              </div>
            </IconContext.Provider>
            <h2>Release</h2>
          </div>
        </div>
        <div className="elementDesc">
          <p>
            We provide a platform for you pet owners should you ever feel the
            need to release your pets to the society
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeSteps;
