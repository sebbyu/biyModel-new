import "./../scss/Navbar.scss";

function Navbar(props) {
  
  return (
    <div className="navbar-main">
      <div className="navbar-main--logo_bar">
        {/* eslint-disable-next-line */}
        <a className="fas fa-brain" id="logo" href='/'></a>
      </div>
      <div className="navbar-main--navigation_bar">
        <a href="/learn" id="element"><li>Learn</li></a>
        <a href="/comingsoon" id="element"><li>Build</li></a>
        <a href="/help" id="element"><li>Help</li></a>
      </div>
      <div className="navbar-main--login_bar">
        <div className="navbar-main--login_bar-bag">
          <a className="fas fa-sign-in-alt" href="/signin">
            <p id="tooltip">Sign-In</p>
          </a>
          <a className="fas fa-user-plus" href="/signup">
            <p id="tooltip">Sign-Up</p>
          </a>
          <a className="fas fa-user-secret" href="/comingsoon">
            <p id="tooltip">Guest</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;