import logo from "../images/logo.svg";
import fb from "../images/icon-facebook.svg";
import ig from "../images/icon-instagram.svg";
import x from "../images/icon-twitter.svg";
import p from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div id="footer" className="min-h-[40vh] bg-DarkModerateCyan flex flex-col justify-center items-center pt-8">
      <img className="" src={logo} alt="" />

      <div className="mt-8 flex text-center w-[30%]">
        <p>About</p>
        <p>Services</p>
        <p>Projects</p>
      </div>

      <div id="logos" className="flex space-x-10 mt-12">
        <img src={fb} alt="" />
        <img src={ig} alt="" />
        <img src={x} alt="" />
        <img src={p} alt="" />
      </div>
    </div>
  );
};
export default Footer;
