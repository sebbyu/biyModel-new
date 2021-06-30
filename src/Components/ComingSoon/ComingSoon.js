import './ComingSoon.scss';

function ComingSoon() {
  return (
    <div className="main">
      <div className="frame">
        <h1 className="title">COMING SOON</h1>
        <h5 className="subtitle">SITE UNDER CONSTRUCTION</h5>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" value="50" max="100">50%</div>
        </div>
        <button className="button">Notify Me!</button>
      </div>
    </div>
  );
}

export default ComingSoon;