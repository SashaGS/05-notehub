import css from './SearchBox.module.css';

function SearchBox(params: type) {
  return <input className={css.input} type="text" placeholder="Search notes" />;
}

export default SearchBox;
