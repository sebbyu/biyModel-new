import './Page404.scss';

function Page404() {
  return (
    <div className="main">
      <div className="frame">
        <h1 id="title">404</h1>
        <h5 id="subtitle">Page Not Found</h5>
        <p id="sentence">
          The page you are looking for doesn't exist or an other error occured.
        </p>
        <button id="button">
          Homepage
        </button>
      </div>
    </div>
  );
}

export default Page404;

