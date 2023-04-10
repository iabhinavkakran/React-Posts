import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("/");
  }
  return (
    <React.Fragment>
      <div className="backdrop" onClick={closeHandler} />
      <dialog open className="modal">
        {children}
      </dialog>
    </React.Fragment>
  );
};
export default Modal;
