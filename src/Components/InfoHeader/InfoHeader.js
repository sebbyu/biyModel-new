import './InfoHeader.scss';

const InfoHeader = (props) => {
  return (
    <div className="infoheader-main">
      <div className="infoheader-main-frame">
        <div className="infoheader-main-frame--textbox">
          <h2 className="infoheader-main-frame--textbox--title">{props.title}</h2>
          <p className="infoheader-main-frame--textbox--text">{props.text}</p>
        </div>
        <div className="infoheader-main-frame--image">
          <img src={props.image_src} alt="not found" />
        </div>
      </div>
    </div>
  )
}

export default InfoHeader;