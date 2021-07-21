import "./Help.scss";
import InfoHeader from './../InfoHeader/InfoHeader';
import helpImage from './../../assets/help.png';

const Help = () => {
  return (
    <div className="help-main">
      <div className="help-main-frame">
        <div className="help-main-frame--top">
          <InfoHeader 
            title="HELP"
            text="BIY&reg;"
            image_src={helpImage}
          />
        </div>
      </div>
    </div>
  )
}

export default Help;