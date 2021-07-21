import './Textbox.scss';

const Textbox = (props) => {
  return (
    <div className="textbox-main">
      <div className="textbox-main-frame">
        <h2 id="title">{props.title}</h2>
        <p id="text">{props.text}</p>
      </div>
    </div>
  )
}

export default Textbox;