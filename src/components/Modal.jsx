import './Modal.css'

function Modal({title}) {
    function Cancel(){
        console.log("Cancel")
    }
    function Confirm(){
        console.log("Confirm")
    }
    return (
    <>
    <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
        <button className="btn btn__cancel" onClick={Cancel}>Cancel</button>
        <button className="btn" onClick={Confirm}>Confirm</button>
        </div>
    </div>
    <div className="backdrop" />
    </>
    )
}

export default Modal 