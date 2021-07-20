import "./Navbar.scss";

function Navbar(props) {
  
  return (
    <div className="navbar-main">
      <div className="navbar-main--logo_bar">
        {/* eslint-disable-next-line */}
        <a className="fas fa-brain" id="logo" href='/'></a>
      </div>
      <div className="navbar-main--navigation_bar">
        <a href="/comingsoon" id="element"><li>Learn</li></a>
        <a href="/comingsoon" id="element"><li>Build</li></a>
        <a href="/comingsoon" id="element"><li>Help</li></a>
      </div>
      <div className="navbar-main--login_bar">
        <div className="navbar-main--login_bar-bag">
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