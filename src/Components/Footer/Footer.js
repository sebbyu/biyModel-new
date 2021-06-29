import './Footer.scss';

function Footer(props) {
  return (
    <div className="bottom">
      <div id="bottom-top">
        <div id="logo">
          <p class="fas fa-brain"></p>
          <p>BIYM</p>
        </div>
        <div id="info">
          <ul>
            <p id="little-title">COMPANY</p>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
          </ul>
          <ul>
            <p id="little-title">COMMUNITIES</p>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
          <ul>
            <p id="little-title">USEFUL LINKS</p>
            <li>Support</li>
            <li>Web Player</li>
            <li>Free Mobile App</li>
          </ul>
        </div>
        <div id="social-media">
          <p className="fab fa-facebook-f"></p>
          <p className="fab fa-instagram"></p>
          <p className="fab fa-twitter"></p>
        </div>
      </div>
      <div id="bottom-bottom">
        <div id="left">
          <ul>
            <li>Legal</li>
            <li>Privacy Center</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>About Ads</li>
          </ul>
        </div>
        <div id="right">
          <span id="right-top">
            <p>USA</p>
            <li className="fas fa-flag-usa"></li>
          </span>
          <span id="right-bottom">
            <p>CopyRight</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;