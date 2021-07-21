import './App.scss';
import Home from './Components/Home/Home';
import Page404 from './Components/Page404/Page404';
import ComingSoon from './Components/ComingSoon/ComingSoon';
import Learn from './Components/Learn/Learn';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Help from './Components/Help/Help';
import {useRoutes} from 'hookrouter';

function App() {
  const routes = {
    '/' : () => <Home />,
    '/comingsoon': () => <ComingSoon />,
    '/learn': () => <Learn />,
    '/help': () => <Help />,
  }
  const routerPages = useRoutes(routes);
  return (
    <div className="app-main">
      <div className="app-main--navbar">
        <div className="app-main--navbar-wrap">
          <Navbar />
        </div>
      </div>
      <div className="app-main--main">
        {routerPages || <Page404 />}
      </div>
      <div className="app-main--footer">
        <div className="app-main--footer-wrap">
          {routerPages.type.name !== "Home" ?
          (<div></div>)
          : 
          (<Footer />)}
        </div>
      </div>
    </div>
  );
}

export default App;
