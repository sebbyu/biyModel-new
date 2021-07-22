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
import Signin from './views/javascript/Signin';
import Signup from './views/javascript/Signup';
//hooks
import {useRoutes} from 'hookrouter';

function App() {
  var notApp = false;
  const routes = {
    '/' : () => <Home />,
    '/comingsoon': () => <ComingSoon />,
    '/learn': () => <Learn />,
    '/help': () => <Help />,
    '/signin': () => <Signin />,
    '/signup': () => <Signup />,
  }
  const routerPages = useRoutes(routes);
  if (routerPages.type.name === "Signin" || routerPages.type.name === "Signup") {
    notApp = !notApp;
  }
  return (
    <div className="app-main">
      <div className="app-main--navbar">
        <div className="app-main--navbar-wrap">
          {!notApp ? 
          (<Navbar />)
          :
          (<div></div>)}
        </div>
      </div>
      <div className="app-main--main">
        {routerPages || <Page404 />}
      </div>
      <div className="app-main--footer">
        <div className="app-main--footer-wrap">
          {!notApp ? 
          (<Footer />)
          :
          (<div></div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
