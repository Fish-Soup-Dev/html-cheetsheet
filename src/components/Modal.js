import './Modal.css';

function Modal(props) {
  return (
    <div className={`modal ${ props.show ? 'show' : ''}`} onClick={ props.closed }>
      <div className="modal-content" onClick={ e => e.stopPropagation() }>

        <div className="modal-header">
          <h4 className="modal-title">{ props.title }</h4>
          <button className="modal-button" onClick={ props.closed }>Close</button>
        </div>

        <div className="modal-body">
          { props.children }
        </div>

      </div>
    </div>
  );
}

export default Modal;