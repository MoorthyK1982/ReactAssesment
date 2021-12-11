import React from "react";

const ModalHead = ({header, setShowModal}:any) => {
    return (<div className="modal-header">
    <h5 className="modal-title">{header}</h5>
    <button type="button" className="btn-close" onClick={()=>{setShowModal(false)}}></button>
  </div>);
}

export default ModalHead;