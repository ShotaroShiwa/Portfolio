import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import css from "./Modal.module.scss";

const useModal = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = (modalContent) => {
    setContent(modalContent);
    setShow(true);
  };

  const closeModal = () => {
    setContent(null);
    setShow(false);
  };
  const Modal = ({ show }) => {
    const contentRef = useRef(null);

    useEffect(() => {
      if (contentRef.current === null) return;

      if (show) {
        disableBodyScroll(contentRef.current);
      } else {
        enableBodyScroll(contentRef.current);
      }

      return () => {
        clearAllBodyScrollLocks();
      };
    }, [show, contentRef]);

    if (!show) return null;

    return createPortal(
      <div className={css.modalWindow}>
        <div className={css.modalBack}></div>
        <div className={css.modalContainer} ref={contentRef}>
          {content}
          <button className="primaryText bottomPaddings" onClick={closeModal}>✕ Close</button>
        </div>
      </div>,
      document.getElementById('root')
    );
  };


  return { Modal, openModal, closeModal, show };
};

export default useModal;
