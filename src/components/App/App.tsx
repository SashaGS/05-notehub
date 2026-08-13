import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import SearchBox from '../SearchBox/SearchBox';

import ReactPaginateModule from 'react-paginate';
import type { ReactPaginateProps } from 'react-paginate';
import type { ComponentType } from 'react';
import css from './App.module.css';

type ModuleWithDefault<T> = { default: T };
const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

function App() {
  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          {<SearchBox />}
          {/* {
            <ReactPaginate
              // pageCount={movies.total_pages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              // onPageChange={({ selected }) => setcurrentPage(selected + 1)}
              // forcePage={currentPage - 1}
              containerClassName={css.pagination}
              activeClassName={css.active}
              nextLabel="→"
              previousLabel="←"
            />
          } */}
          {<button className={css.button}>Create note +</button>}
        </header>
      </div>
    </>
  );
}

export default App;
