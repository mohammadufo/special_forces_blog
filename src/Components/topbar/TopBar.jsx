import { Link } from "react-router-dom";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-whatsapp-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              <b>HOME</b>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              <b>WRITE</b>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/settings">
              <b>SETTING</b>
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {/* <Link to="/settings">
          <img src="img/mamad.jpg" alt="profile" className="topImg" />
        </Link> */}
        <ul className="topList">
          <li className="topListItem">
            <Link to="/login" className="link">
              <b>Login</b>
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/Register" className="link">
              <b>Register</b>
            </Link>
          </li>
        </ul>

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
