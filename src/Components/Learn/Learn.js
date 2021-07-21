import './Learn.scss';
import about from './../../assets/about.png';
import Textbox from './Textbox/Textbox';
import LearningContent from './LearningContent/LearningContent';
import jsonContents from './LearningContent/contents.json';

const Learn = () => {
  var contents = jsonContents.map(x => {
    return (
      <li>
        <LearningContent 
          key={x.id}
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
              text="BIY&reg;"
            />
            <Textbox 
              title="Vision"
              text="BIY&reg;"
            />
          </div>
        </div>
        <div className="learn-main-frame--bottom">
          <div className="learn-main-frame--bottom-frame">
            {/* <h2>More about Machine Learning</h2>
            <ul>
              {contents}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn;