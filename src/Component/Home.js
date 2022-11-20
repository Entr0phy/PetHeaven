import "./Home.css";
import FrontPage from "./HomeComponent/FrontPage";
import ThreeSteps from "./HomeComponent/ThreeSteps";

const Home = (props) => {
  return (
    <div className="homeContainer">
      <FrontPage
        stateChanger={props.stateChanger}
        checkState={props.checkState}
      />
      <ThreeSteps></ThreeSteps>
    </div>
  );
};

export default Home;
