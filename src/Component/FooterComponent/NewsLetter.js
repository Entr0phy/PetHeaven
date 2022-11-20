import "./NewsLetter.css";
import { useState, useRef } from "react";

const NewsLetter = () => {
  const [text, setText] = useState("");
  const Subscribe = () => {
    if (!text) {
      alert("Please enter your email");
    } else {
      alert("You have subscribed to our newsletters!");
    }
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="newsletter-container">
      <div className="news-header">
        <h1>Subscribe to our NewsLetters</h1>
      </div>

      <form className="nameSubmit">
        <input
          type="text"
          placeholder="Enter your email"
          required
          value={text}
          onChange={handleChange}
        ></input>
        <button className="btn" onClick={Subscribe}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
