import "./About.css";
import AboutBody from "./AboutComponent/AboutBody";
import AboutHeader from "./AboutComponent/AboutHeader";
const About = (props) => {
  return (
    <div className="aboutContainer">
      <AboutHeader />
      <AboutBody checkState={props.checkState} />
    </div>
  );
};

export default About;
