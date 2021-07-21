import './Learn.scss';
import about from './../../assets/about.png';
import Textbox from './Textbox/Textbox';
import LearningContent from './LearningContent/LearningContent';
import jsonContents from './LearningContent/contents.json';

const Learn = () => {
  var contents = jsonContents.map(x => {
    return (
      <li key={x.id}>
        <LearningContent 
          title={x.title}
          link_title={x.link_title}
          link={x.link}
          img_src={x.img_src}
        / >
      </li>
    )
  })
  return (
    <div className="learn-main">
      <div className="learn-main-frame">
        <div className="learn-main-frame--top">
          <div className="learn-main-frame--top-background">
            <div className="learn-main-frame--top-background--about">
              <h2 id="about">ABOUT</h2>
              <p id="description">BIY&reg;</p>
            </div>
            <div className="learn-main-frame--top-background--image">
              <img src={about} alt="not found" />
            </div>
          </div>
        </div>
        <div className="learn-main-frame--mid">
          <div className="learn-main-frame--mid-info">
            <Textbox 
              title="Mission"
              text="BIY&reg; We aim to improve efficiency 
              and patient outcomes by empowering healthcare 
              professionals with deep learning technologies 
              in medical imaging."
            />
            <Textbox 
              title="Vision"
              text="BIY&reg; We envision the expansion of 
              AI-enabled healthcare expertise globally, so 
              patients around the world can benefit from fast 
              and accurate diagnosis and treatment."
            />
          </div>
        </div>
        <div className="learn-main-frame--bottom">
          <div className="learn-main-frame--bottom-frame">
            <h1 className="learn-main-frame--bottom-frame--title">
              More about Machine Learning
            </h1>
            <div className='learn-main-frame--bottom-frame--lists'>
              <ul id="contents-lists">
                {contents}
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn;