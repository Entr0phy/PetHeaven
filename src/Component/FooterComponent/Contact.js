import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaMailBulk,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactUs">
        <h2>Contact Us</h2>
        <div className="contactList">
          <div className="address">
            <FaMapMarkerAlt size={25} />
            <p>50 East Coast Road Singapore 123456</p>
          </div>
        </div>
        <div className="contactList">
          <div className="address">
            <FaPhoneAlt size={25} />
            <p>
              &nbsp;+65 6789 1234 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;{" "}
            </p>
          </div>
        </div>
        <div className="contactList">
          <div className="address">
            <FaMailBulk size={25} />
            <p>
              &nbsp; enquiries@petheaven.org.sg &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;
            </p>
          </div>
        </div>
      </div>

      <div className="contactUs">
        <h2>Social Media</h2>
        <div className="address">
          <FaFacebook size={25} />
          <p> &nbsp;Facebook</p>
        </div>
        <div className="address">
          <FaInstagram size={25} />
          <p> &nbsp;Instagram</p>
        </div>
        <div className="address">
          <FaTiktok size={25} />
          <p> &nbsp;TikTok &nbsp; &nbsp; &nbsp; &nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
