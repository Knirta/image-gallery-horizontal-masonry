import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <RotatingLines
        height="65"
        width="65"
        strokeColor="blue"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
