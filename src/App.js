import './App.scss';
import Home from './Components/Home/Home.js'
import Navbar from './Components/Navbar/Navbar.js'
import Footer from './Components/Footer/Footer.js'

function App() {
  return (
    <div className="page">
      <div className="navbar">
        <div className="wrap">
          <Navbar />
        </div>
      </div>
      <div className="main">
        <Home />
      </div>
      <div className="footer">
        <div className="wrap">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
