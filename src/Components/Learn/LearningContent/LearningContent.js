import './LearningContent.scss';

const LearningContent = (props) => {
  return (
    <div className="learning_content-main">
      <div className="learning_content-main-frame">
        <h3 id="title">{props.title}</h3>
        <a id="link" href={props.link}>{props.link_title}</a>
        <img src={props.img_src} alt="not found" />
      </div>
    </div>
  )
}

export default LearningContent;