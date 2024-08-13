import PropTypes from "prop-types";
import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, url, desc, onClose }) => {
  ReactModal.setAppElement("#root");
  ReactModal.defaultStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    content: {
      maxWidth: "calc(100vw - 48px)",
      height: "calc(100vh - 24px)",
      outline: "none",
    },
  };
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      <img src={url} alt={desc} className={s.img} />
    </ReactModal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool,
  url: PropTypes.string,
  desc: PropTypes.string,
  onClose: PropTypes.func,
};

export default ImageModal;
