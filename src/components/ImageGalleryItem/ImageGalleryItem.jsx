import PropTypes from "prop-types";
import { SlLike } from "react-icons/sl";

import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ urls, desc, likes, userName, openModal }) => {
  return (
    <figure
      className={s.figure}
      data-url={urls.regular}
      data-desc={desc}
      onClick={(e) => openModal(e)}
    >
      <img className={s.img} src={urls.small} alt={desc} />
      <figcaption className={s.caption}>
        <SlLike style={{ marginRight: "8px" }} />
        {likes} <span className={s.username}>author: {userName}</span>
      </figcaption>
    </figure>
  );
};

ImageGalleryItem.propTypes = {
  urls: PropTypes.object,
  desc: PropTypes.string,
  likes: PropTypes.number,
  userName: PropTypes.string,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;
