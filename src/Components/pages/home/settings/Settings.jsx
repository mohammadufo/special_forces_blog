import "./settings.css";
import Sidebar from "./../../../sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img alt="" src="img/mamad.jpg" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>User Name</label>
          <input type="text" placeholder="Muhammad UFO" />
          <label>Email</label>
          <input type="email" placeholder="shadow.m.s.313@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
