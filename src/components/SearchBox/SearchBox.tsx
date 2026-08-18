import css from './SearchBox.module.css';

interface SearchBoxProps {
  search: string;
  updateSearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBox({ search, updateSearchQuery }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      defaultValue={search}
      onChange={updateSearchQuery}
    />
  );
}

export default SearchBox;
