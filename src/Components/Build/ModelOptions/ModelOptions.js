import './ModelOptions.scss';

function ModelOptions() {
  return (
    <div className="model_options-main">
      <div className="model_options-main-frame">
        <div className="model_options-main--top">
          <p id="title">Choose your model task</p>
        </div>
        <div className="model_options-main--bottom">
          <div className="model_options-main--bottom-buttons">
            <button id="button">Regression</button>
            <button id="button">CNN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelOptions;