// src/components/SearchBox/SearchBox.jsx
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contactsSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search..."
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
};

export default SearchBox;
