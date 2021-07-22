import './../scss/Signin.scss';
//components
import SocialMediaSignIn from './../../components/javascript/SocialMediaSignIn';

const Signin = () => {
  return (
    <div className="signin-main">
      <div className="signin-main-frame">
        <div className="signin-main-frame--top">
          <div className="signin-main-frame--top-logo">
            <p class="fas fa-brain"></p>
              &nbsp;
            <p>BIYM</p>
          </div>
        </div>
        <hr/>
        <div className="signin-main-frame--mid">
          <p>To continue, log in to BIYM</p>
          <div className="signin-main-frame--mid--social_media">
            <SocialMediaSignIn
              logo="fab fa-google"
              social_media_name="GOOGLE"
              colorStyle={{backgroundColor: "white", color: "black"}}
              logoColor={{color: "black"}}
            />
            <SocialMediaSignIn
              logo="fab fa-facebook-f"
              social_media_name="FACEBOOK"
              colorStyle={{backgroundColor: "#3366ff", color: "white"}}
              logoColor={{color: "white"}}
            />
            <SocialMediaSignIn
              logo="fab fa-apple"
              social_media_name="APPLE"
              colorStyle={{backgroundColor: "black", color: "white"}}
              logoColor={{color: "white"}}
            />
          </div>
          <p>----------------- OR -----------------</p>
          <div className="signin-main-frame--mid--signin_form">
          </div>
        </div>
        <div className="signin-main-frame--bottom">
          <p>Don't have an account?</p>
          <input className="signin-main-frame--bottom-signup" type='button'
            value="SIGN UP FOR BIYM" onsubmit="#" />
        </div>
      </div>
    </div>
  )
}

export default Signin;