import './ModelOptions.scss';

function ModelOptions() {
  return (
    <div className="main">
      <div className="frame">
        <div className="top">
          <p id="title">Choose your model task</p>
        </div>
        <div className="bottom">
          <div className="buttons">
            <button id="button">Regression</button>
            <button id="button">CNN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelOptions;