import NewsLetter from "./FooterComponent/NewsLetter";
import Contact from "./FooterComponent/Contact";
import Copyright from "./FooterComponent/Copyright";
const Footer = () => {
  return (
    <div className="footerContainer">
      <NewsLetter />
      <Contact />
      <Copyright />
    </div>
  );
};

export default Footer;
