import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import SearchBox from '../SearchBox/SearchBox';
import Paginate from '../Pagination/Pagination';
import css from './App.module.css';

function App() {
  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          {<SearchBox />}
          {<Paginate />}
          {<button className={css.button}>Create note +</button>}
        </header>
      </div>
    </>
  );
}

export default App;
