// import s from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => {
        const { urls, alt_description, likes, user } = item;
        return (
          <li key={item.id} className={s.item}>
            <ImageGalleryItem
              urls={urls}
              desc={alt_description}
              likes={likes}
              userName={user.name}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  openModal: PropTypes.func,
};

export default ImageGallery;
