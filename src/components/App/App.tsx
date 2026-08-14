import { useState } from 'react';
import { fetchNotes } from '../../services/noteService';
import NoteList from '../NoteList/NoteList';
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import SearchBox from '../SearchBox/SearchBox';

import ReactPaginateModule from 'react-paginate';
import type { ReactPaginateProps } from 'react-paginate';
import type { ComponentType } from 'react';
import css from './App.module.css';
import { useQuery } from '@tanstack/react-query';
// import NoteList from '../NoteList/NoteList';

type ModuleWithDefault<T> = { default: T };
const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

function App() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: notes,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ['notes', search, currentPage],
    queryFn: () => fetchNotes(),
    // enabled: search !== '',
    retry: 1,
    staleTime: 5000,
    // placeholderData: keepPreviousData,
  });
  console.log(notes);

  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          {<SearchBox />}
          {notes && notes?.totalPages > 1 && (
            <ReactPaginate
              pageCount={notes.totalPages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              onPageChange={({ selected }) => setCurrentPage(selected + 1)}
              forcePage={currentPage - 1}
              containerClassName={css.pagination}
              activeClassName={css.active}
              nextLabel="→"
              previousLabel="←"
            />
          )}
          {<button className={css.button}>Create note +</button>}
        </header>

        {isSuccess && <NoteList notes={notes?.notes} />}
      </div>
    </>
  );
}

export default App;
