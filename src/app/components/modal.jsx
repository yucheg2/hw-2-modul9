import React from "react";
import { useHistory } from "react-router-dom";

const Modal = () => {
    const { replace } = useHistory();
    const handleClose = () => {
        replace("/");
    };
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <p className="mt-2">Обновлено!</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleClose} className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
