import PropTypes from "prop-types";
import { IoMdSearch } from "react-icons/io";
import { TbMoodLookRight } from "react-icons/tb";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value;
    if (query === "") {
      toast.success("Enter search query", {
        icon: <TbMoodLookRight />,
      });
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <button type="submit" className={s.btn}>
          <IoMdSearch />
        </button>
        <input
          className={s.input}
          type="text"
          name="query"
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos..."
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = { onSubmit: PropTypes.func };

export default SearchBar;
