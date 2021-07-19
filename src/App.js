import './App.scss';
import Home from './Components/Home/Home';
import Page404 from './Components/Page404/Page404';
import ComingSoon from './Components/ComingSoon/ComingSoon';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {useRoutes} from 'hookrouter';

function App() {
  const routes = {
    '/' : () => <Home />,
    '/comingsoon': () => <ComingSoon />,
  }
  const routerPages = useRoutes(routes);
  return (
    <div className="page">
      <div className="navbar">
        <div className="navbar-wrap">
          <Navbar />
        </div>
      </div>
      <div className="main">
        {routerPages || <Page404 />}
      </div>
      <div className="footer">
        <div className="footer-wrap">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
