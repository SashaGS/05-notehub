import css from './SearchBox.module.css';

interface SearchBoxProps {
  search: string;
  updateSearchQuery: (value: string) => void;
}

function SearchBox({ search, updateSearchQuery }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={search}
      onChange={e => updateSearchQuery(e.target.value)}
    />
  );
}

export default SearchBox;
