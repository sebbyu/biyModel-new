import './App.scss';
//components
import Navbar from './components/javascript/Navbar';
import Footer from './components/javascript/Footer';
//views
import Home from './views/javascript/Home';
import Learn from './views/javascript/Learn';
import Help from './views/javascript/Help';
import Page404 from './views/javascript/Page404';
import ComingSoon from './views/javascript/ComingSoon';
//hooks
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
