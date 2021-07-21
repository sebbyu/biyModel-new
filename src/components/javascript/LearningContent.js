import './../scss/LearningContent.scss';

const LearningContent = (props) => {
  return (
    <div className="learning_content-main">
      <a href={props.link}>
        <div className="learning_content-main-frame">
          <h5 id="learning_content-title">{props.title}</h5>
          <img id="learning_content-image" src={props.img_src} alt="not found" />
        </div>
      </a>
    </div>
  )
}

export default LearningContent;