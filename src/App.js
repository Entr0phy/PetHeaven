import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Component/Home";
import Gallery from "./Component/Gallery";
import Header from "./Component/Header";
import About from "./Component/About";
import LogIn from "./Component/LogIn";
import Footer from "./Component/Footer";
import Profile from "./Component/Profile";

import "./index.css";
function App() {
  // setting logged in state to track if a user has logged in or not
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Router>
        <Header className="HeaderBar" loggedIn={loggedIn} />

        <div className="Container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home stateChanger={setLoggedIn} checkState={loggedIn} />
              }
            />
            <Route
              path="/About"
              exact
              element={<About checkState={loggedIn} />}
            />
            <Route
              path="/Gallery"
              exact
              element={<Gallery checkState={loggedIn} />}
            />

            {/*Conditional rendering is done here to redirect user to either the log in page
            or the profile page depending on if the user has logged in or not */}

            {!loggedIn ? (
              <Route
                path="/LogIn"
                exact
                element={<LogIn checkState={loggedIn} setState={setLoggedIn} />}
              />
            ) : (
              <Route
                path="/Profile"
                exact
                element={
                  <Profile checkState={loggedIn} setState={setLoggedIn} />
                }
              />
            )}
          </Routes>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
