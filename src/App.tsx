import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate, Route, Routes } from 'react-router-dom';
import { store } from  './store/store';
import './App.scss';
import Header from './components/header/Header';
import Cats from './routes/Cats';
import FavCats from './routes/FavCats';
import { handleScroll } from './helpers/handleScroll';


function App() {

  const isLoading = store.isLoading

  useEffect(() => {
    isLoading && store.getCats()
  }, [isLoading])
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
  }, [])

  return (
    <div className="app">
        <Header />
        <Routes>
            <Route path='/' element={<Cats />} />
            <Route path='/favourites' element={<FavCats />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </div>
  );
}

export default observer(App);
