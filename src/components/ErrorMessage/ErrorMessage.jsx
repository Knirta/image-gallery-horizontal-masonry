import PropTypes from "prop-types";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ text }) => {
  return (
    <div className={s.wrap}>
      <h2>{text}</h2>
    </div>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string,
};

export default ErrorMessage;
