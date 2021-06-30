import "./Navbar.scss";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo_bar">
        <a className="fas fa-brain" id="logo" href="#"></a>
      </div>
      <div className="nav_bar">
        <a href="#" id="element"><li>Learn</li></a>
        <a href="#" id="element"><li>Build</li></a>
        <a href="#" id="element"><li>Help</li></a>
      </div>
      <div className="login_bar">
        <div className="bag">
          <li className="fas fa-sign-in-alt">
            <p id="tooltip">Sign-In</p>
          </li>
          <li className="fas fa-user-plus">
            <p id="tooltip">Sign-Up</p>
          </li>
          <li className="fas fa-user-secret">
            <p id="tooltip">Guest</p>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;