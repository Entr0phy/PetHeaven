import "./ProfileElement.css";
import { BsFillPeopleFill, BsChevronDoubleDown } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaPaw, FaCat } from "react-icons/fa";
const ProfileElement = (props) => {
  const changeState = props.setFormState;
  const volunteerClick = () => {
    changeState({
      volunteer: true,
      adopt: false,
      release: false,
    });
  };

  const adoptClick = () => {
    changeState({
      volunteer: false,
      adopt: true,
      release: false,
    });
  };

  const releaseClick = () => {
    changeState({
      volunteer: false,
      adopt: false,
      release: true,
    });
  };

  return (
    <div className="profileElementContainer">
      <div className="volunteerContainer" onClick={volunteerClick}>
        <IconContext.Provider
          value={{ color: "white", className: "elementIcon" }}
        >
          <div>
            <BsFillPeopleFill size={30}></BsFillPeopleFill>
          </div>
        </IconContext.Provider>
        <h3>Register as Volunteer</h3>
        <p>
          Register as a volunteer, be part of the people that cares and help out
          abandon pets by doing daily maintenance or to even adminstrative paper
          work for the adoption and release processess
        </p>
        <BsChevronDoubleDown size={20} />
      </div>

      <div className="adoptContainer" onClick={adoptClick}>
        <IconContext.Provider
          value={{ color: "white", className: "elementIcon" }}
        >
          <div>
            <FaPaw size={30} />
          </div>
        </IconContext.Provider>
        <h3>Adopt a Pet</h3>
        <p>
          Fancy any of our little friends? We are always looking for new owners
          for our paw friends
          <br />
          <br />
          <br />
        </p>
        <BsChevronDoubleDown size={20} />
      </div>

      <div className="releaseContainer" onClick={releaseClick}>
        <IconContext.Provider
          value={{ color: "white", className: "elementIcon" }}
        >
          <div>
            <FaCat size={30} />
          </div>
        </IconContext.Provider>
        <h3>Release a Pet</h3>
        <p>
          Too caught up with life? Look no further, we will ensure that when you
          release your pet back into the society, he/she will be matched with a
          new owner just as good or even better than you!
        </p>
        <BsChevronDoubleDown size={20} />
      </div>
    </div>
  );
};

export default ProfileElement;
