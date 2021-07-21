import './../scss/ComingSoon.scss';

function ComingSoon() {
  return (
    <div className="comingsoon-main">
      <div className="comingsoon-main-frame">
        <h1 className="comingsoon-main-frame--title">COMING SOON</h1>
        <h5 className="comingsoon-main-frame--subtitle">SITE UNDER CONSTRUCTION</h5>
        <div className="comingsoon-main-frame--progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" value="50" max="100">50%</div>
        </div>
        <button className="comingsoon-main-frame--button">Notify Me!</button>
      </div>
    </div>
  );
}

export default ComingSoon;