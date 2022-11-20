import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";

const Header = (props) => {
  //variable to track to see if the user is logged in or not
  const isLoggedIn = props.loggedIn;
  return (
    <>
      <nav>
        <div className="HeaderItems">
          <h2>
            Pet Heaven <FaPaw size={30}></FaPaw>
          </h2>
          <div className="LinkItems">
            <Link to="/" className="Items">
              Home
            </Link>
            <Link to="/About" className="Items">
              About
            </Link>
            <Link to="/Gallery" className="Items">
              Gallery
            </Link>

            {/* Conditional rendering is done here, if a user is logged in
             it will redirect to the profile page, else it will redirect
              to the log in page*/}

            {isLoggedIn ? (
              <Link to="/Profile" className="Items">
                Profile
              </Link>
            ) : (
              <Link to="/LogIn" className="Items">
                LogIn
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
