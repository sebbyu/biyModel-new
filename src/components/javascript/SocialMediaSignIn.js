import './../scss/SocialMediaSignIn.scss';

const SocialMediaSignin = (props) => {
  return (
    <div className="social_media_signin-main">
      <div className="social_media_signin-main-frame" style={props.colorStyle}>
        <div className="social_media_signin-main-frame-text" style={props.logoColor}>
          <div className={props.logo}>&emsp;</div>
          <div>CONTINUE WITH {props.social_media_name}</div>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaSignin;