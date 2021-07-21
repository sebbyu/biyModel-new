import "./../scss/Help.scss";
//components
import InfoHeader from './../../components/javascript/InfoHeader';
//assets
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