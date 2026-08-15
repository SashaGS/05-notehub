import { useState } from 'react';
import { fetchNotes } from '../../services/noteService';
import NoteList from '../NoteList/NoteList';
import SearchBox from '../SearchBox/SearchBox';

// import ReactPaginateModule from 'react-paginate';
// import type { ReactPaginateProps } from 'react-paginate';
// import type { ComponentType } from 'react';

import css from './App.module.css';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import Modal from '../Modal/Modal';
import NoteForm from '../NoteForm/NoteForm';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
// import NoteList from '../NoteList/NoteList';

// type ModuleWithDefault<T> = { default: T };
// const ReactPaginate = (
//   ReactPaginateModule as unknown as ModuleWithDefault<
//     ComponentType<ReactPaginateProps>
//   >
// ).default;

function App() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenModal, setisOpenModel] = useState(false);

  const {
    data: notes,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ['notes', search, currentPage],
    queryFn: () => fetchNotes(search, currentPage),
    // enabled: search !== '',
    retry: 1,
    staleTime: 5000,
    placeholderData: keepPreviousData,
  });

  const hendleClick = () => {
    setisOpenModel(!isOpenModal);
  };

  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          {<SearchBox />}
          {notes && notes?.totalPages > 1 && (
            <Pagination
              totalPages={notes?.totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}
          {
            <button className={css.button} onClick={hendleClick}>
              Create note +
            </button>
          }
        </header>
        {isLoading && <Loader />}
        <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #713200',
              background: '#d67719cb',
            },
          }}
        />
        {isOpenModal && (
          <Modal onClose={hendleClick}>
            <NoteForm />
          </Modal>
        )}

        {isSuccess && notes && <NoteList notes={notes?.notes} />}
      </div>
    </>
  );
}

export default App;
