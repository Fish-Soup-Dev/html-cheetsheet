import './HintButton.css';

function HintButton(props) {
  return (
    <button className="html-hint-button" onClick={ props.clicked }>
      <h1 className="html-hint-title">{ props.title }</h1>
      <p className="html-hint-discription">{ props.discription }</p>
    </button>
  );
}

export default HintButton;